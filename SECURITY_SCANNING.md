# Security Scanning Guide

This document explains the comprehensive security scanning setup implemented in this repository.

## Overview

The security workflow addresses the following areas:
1. **Secret Scanning** - Detect hardcoded credentials
2. **SAST** - Static Application Security Testing
3. **Dependency Scanning** - Vulnerability detection in dependencies
4. **Custom Security Rules** - Codebase-specific security patterns
5. **SBOM Generation** - Software Bill of Materials for supply chain security

---

## Security Checks

### 1. Secret Scanning (TruffleHog)

**What it does:**
- Scans entire git history for leaked secrets
- Detects API keys, passwords, tokens, private keys
- Uses entropy detection and regex patterns
- Only flags verified secrets to reduce false positives

**When it runs:**
- Every push to main
- Every pull request
- Weekly scheduled scan

**Configuration:**
- Located in `.github/workflows/security.yml`
- Uses `trufflesecurity/trufflehog@main` action
- Fails the build if verified secrets are found

**False positives:**
Create `.trufflehog-ignore.yml` if needed:
```yaml
# Example ignore patterns
- path: "test/fixtures/*.json"
  reason: "Test data only"
```

---

### 2. SAST - Static Analysis

We use two complementary SAST tools:

#### Semgrep
**What it does:**
- Fast, lightweight SAST
- Detects OWASP Top 10 vulnerabilities
- Checks for insecure Node.js/TypeScript patterns
- Next.js-specific security rules

**Rules applied:**
- `p/security-audit` - General security issues
- `p/owasp-top-ten` - OWASP vulnerabilities (XSS, injection, etc.)
- `p/nodejs` - Node.js-specific issues
- `p/typescript` - TypeScript security patterns
- `p/nextjs` - Next.js framework security

**Results:**
- Uploaded to GitHub Security tab (SARIF format)
- Visible in pull request checks

#### CodeQL
**What it does:**
- Deep semantic code analysis by GitHub
- Detects complex security vulnerabilities
- Tracks data flow through the application
- Finds authorization/authentication issues

**Query suite:**
- `security-extended` - Comprehensive security queries
- Detects SQL injection, XSS, command injection, path traversal
- Finds insecure crypto usage, weak randomness
- Identifies authentication/authorization flaws

**Results:**
- Visible in GitHub Security tab
- Creates alerts with detailed remediation guidance
- Available in `.github/workflows/codeql.yml` for advanced config

---

### 3. Dependency Scanning

**Components:**

#### npm audit
- Checks for known vulnerabilities in dependencies
- Fails on high/critical severity issues
- Part of standard CI/CD

#### SBOM Generation
- Creates CycloneDX-format Software Bill of Materials
- Lists all dependencies and versions
- Stored as CI artifact (90-day retention)
- Enables supply chain security tracking

**To download SBOM:**
1. Go to Actions tab in GitHub
2. Select latest security workflow run
3. Download "sbom" artifact

#### Dependency Review (PRs only)
- Reviews dependency changes in pull requests
- Blocks PRs introducing vulnerable dependencies
- Checks license compliance (blocks GPL-3.0, AGPL-3.0)
- Fails on moderate or higher severity vulnerabilities

---

### 4. Security-Enhanced Linting

**Additional ESLint rules for security:**
- `eslint-plugin-security` - Detects security anti-patterns
- `eslint-plugin-no-secrets` - Finds potential secrets in code

**Custom rules in `eslint.config.mjs`:**
- Prevents `eval()`, `new Function()` usage
- Enforces crypto.getRandomValues() for security-sensitive randomness
- Warns about missing error handling on fetch calls
- Restricts process.env access in client components

---

### 5. Next.js Security Checks

**Automated checks for Next.js-specific issues:**

#### Pattern Detection
- ❌ `dangerouslySetInnerHTML` usage (XSS risk)
- ❌ `eval()` usage (code injection)
- ❌ Hardcoded secrets patterns
- ❌ Secrets in build output (`.next/` directory)

#### API Route Security
All API routes must include:
- ✅ CSRF token verification (`verifyCsrfToken`)
- ✅ Rate limiting (`checkRateLimit`)
- ✅ Input validation with Zod schemas

The workflow automatically checks that all POST/PUT/DELETE routes follow these patterns.

#### Security Headers
Verifies that `proxy.ts` includes all required headers:
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security

---

## Viewing Security Results

### GitHub Security Tab
1. Go to repository Settings → Security
2. Enable "Dependency graph", "Dependabot alerts", "Code scanning alerts"
3. View all security findings in Security → Code scanning alerts

### Pull Request Checks
Security findings appear as:
- ❌ Failed checks (block merge)
- ⚠️  Annotations on specific lines
- 💬 Comments with remediation advice

### Weekly Reports
Scheduled scans run every Monday at 9am UTC. Review results in:
- Email notifications (if enabled)
- GitHub Security tab
- Actions → Security & Quality workflow

---

## Configuring GitHub Security Features

### Required Setup

1. **Enable GitHub Advanced Security** (for private repos)
   - Settings → Code security and analysis
   - Enable "GitHub Advanced Security"

2. **Enable Dependabot**
   - Settings → Code security and analysis
   - Enable "Dependabot alerts"
   - Enable "Dependabot security updates"

3. **Enable Code Scanning**
   - Settings → Code security and analysis
   - Enable "Code scanning"
   - CodeQL will run automatically via workflow

4. **Configure Notifications**
   - Settings → Notifications → Security alerts
   - Choose email/web notifications for security findings

---

## Handling Security Findings

### Critical Severity
1. Stop any deployments
2. Assess impact and scope
3. Apply patch immediately
4. Follow incident response in `SECURITY.md`
5. Rotate secrets if credential leak suspected

### High Severity
1. Create fix within 1 business day
2. Test fix thoroughly
3. Deploy to production ASAP

### Medium/Low Severity
1. Create GitHub issue
2. Prioritize in next sprint
3. Fix before next release

### False Positives
1. Document why it's a false positive
2. Add to ignore file (`.semgrepignore`, ESLint disable comment)
3. Include comment explaining suppression

---

## Custom Security Rules

Located in `.github/workflows/security.yml` under `custom-security-rules` job.

### Adding New Rules

To add a custom check:

```yaml
- name: Check for new security pattern
  run: |
    if grep -r "dangerousPattern" app/ lib/; then
      echo "⚠️  Found dangerous pattern"
      exit 1
    fi
```

### Current Custom Rules

1. **API Route Security** - All POST/PUT/DELETE routes must have CSRF, rate limiting, validation
2. **Environment Variables** - Client components must only use NEXT_PUBLIC_* vars
3. **Security Headers** - Middleware must set all required headers
4. **Build Output** - No secrets in compiled JavaScript

---

## Performance Considerations

**Workflow Duration:**
- Secret scan: ~1-2 minutes
- Semgrep: ~2-3 minutes
- CodeQL: ~5-10 minutes
- Total: ~10-15 minutes

**Optimization tips:**
- Jobs run in parallel (except security-summary)
- Use caching for npm dependencies
- Semgrep runs in container for speed
- Scheduled scans run weekly to avoid CI slowdown

---

## Maintenance

### Weekly
- Review security scan results from scheduled workflow
- Triage new findings
- Update ignore files if needed

### Monthly
- Review Dependabot PRs
- Update security rules if new patterns emerge
- Check for new Semgrep/CodeQL queries

### Quarterly
- Rotate secrets per `SECURITY.md` schedule
- Review and update custom security rules
- Audit ignored security findings
- Update this documentation

---

## Troubleshooting

### "TruffleHog found secrets"
- Review the findings in workflow logs
- Check if it's a false positive (test data, example code)
- If real secret: rotate immediately, add to `.trufflehog-ignore.yml` if needed

### "Semgrep/CodeQL failed"
- Review findings in GitHub Security tab
- Create issues for valid findings
- Suppress false positives with inline comments:
  ```typescript
  // nosemgrep: rule-id
  const code = someFunction();
  ```

### "Dependency Review blocked PR"
- Check which dependency introduced vulnerability
- Look for alternative package or wait for patch
- Document exception if no alternative exists

### "Build too slow"
- Consider disabling some scans on feature branches
- Keep full scanning for main branch and PRs to main
- Use GitHub's caching more aggressively

---

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Semgrep Rules](https://semgrep.dev/explore)
- [CodeQL Documentation](https://codeql.github.com/)
- [TruffleHog](https://github.com/trufflesecurity/trufflehog)
- [GitHub Advanced Security](https://docs.github.com/en/code-security)
- [SBOM Guide](https://www.cisa.gov/sbom)

---

## Support

For issues with security scanning:
1. Check workflow logs in GitHub Actions
2. Review this documentation
3. Consult `SECURITY.md` for incident response
4. Contact security team at security@loveiq.org
