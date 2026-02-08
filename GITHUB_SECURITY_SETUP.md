# GitHub Security Setup Guide

Follow these steps to enable all security features in your GitHub repository.

## Prerequisites

- Repository admin access
- GitHub Enterprise or Team plan (for private repos using Advanced Security)
- Public repos get these features for free

---

## Step 1: Enable GitHub Advanced Security (Private Repos Only)

**For public repositories, skip to Step 2.**

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Click **Code security and analysis** (left sidebar)
4. Under "GitHub Advanced Security", click **Enable**
5. Confirm by clicking **Enable GitHub Advanced Security**

**Cost:** Included in GitHub Enterprise/Team plans. Charged per active committer for private repos.

---

## Step 2: Enable Security Features

In the same "Code security and analysis" page:

### Enable Dependabot

1. **Dependabot alerts**
   - Click **Enable** if not already enabled
   - Automatically notifies you of vulnerable dependencies

2. **Dependabot security updates**
   - Click **Enable**
   - Automatically creates PRs to update vulnerable dependencies

### Enable Secret Scanning

1. **Secret scanning**
   - Click **Enable** (free for public repos, requires Advanced Security for private)
   - Detects leaked credentials in commits

2. **Push protection**
   - Click **Enable** (optional but recommended)
   - Prevents pushing commits containing secrets

### Enable Code Scanning

1. **Code scanning**
   - Click **Set up** → **Default**
   - Or click **Advanced** to use the workflow we created
   - This enables CodeQL analysis

**Note:** Our custom workflows (`.github/workflows/security.yml` and `codeql.yml`) will run automatically once enabled.

---

## Step 3: Configure Notifications

1. Go to **Settings** → **Notifications** (your user settings, not repo)
2. Scroll to "Security alerts"
3. Enable email notifications for:
   - ✅ Dependabot alerts
   - ✅ Secret scanning alerts
   - ✅ Code scanning alerts

**Recommended:** Set up Slack/Teams integration for real-time alerts.

---

## Step 4: Configure Branch Protection

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch
3. Enable:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
4. Under "Status checks that are required", add:
   - `Secret Scanning`
   - `SAST - Semgrep`
   - `CodeQL Analysis`
   - `Custom Security Rules`
   - `Next.js Security Checks`
   - `Dependency Security Audit`

This ensures security checks must pass before merging PRs.

---

## Step 5: Verify Workflows

1. Go to **Actions** tab
2. You should see:
   - "Security & Quality" workflow
   - "CodeQL Advanced" workflow
3. Click **Run workflow** on "Security & Quality" to test
4. Wait ~10-15 minutes for first run to complete

**First run will:**
- Scan entire git history for secrets
- Analyze all code with Semgrep and CodeQL
- Generate SBOM
- Create baseline for future scans

---

## Step 6: Review Initial Findings

After first workflow run:

1. Go to **Security** tab
2. Click **Code scanning alerts**
3. Review each finding:
   - **Critical/High:** Fix immediately
   - **Medium:** Create issue, fix in next sprint
   - **Low/Info:** Review and suppress if false positive
   - **False positives:** Dismiss with reason

**Pro tip:** Many findings will be duplicates between Semgrep and CodeQL. Group them and fix the root cause.

---

## Step 7: Configure Dependabot Reviewers

1. Edit `.github/dependabot.yml`
2. Update the `reviewers` section:
   ```yaml
   reviewers:
     - "your-github-username"
     - "loveiqhq/maintainers"  # Or your team
   ```
3. Commit and push
4. Dependabot PRs will now request review from these people/teams

---

## Step 8: Set Up Security Tab Dashboard

1. Go to **Security** → **Overview**
2. Pin important metrics:
   - Open security alerts
   - Dependency graph
   - Recent security updates
3. Review this dashboard weekly

---

## Step 9: Test Security Scanning

Create a test PR to verify everything works:

```bash
# Create test branch
git checkout -b test-security-scanning

# Add a fake secret (will be caught by TruffleHog)
echo "SUPABASE_KEY=sb-abc123def456-FAKE-KEY-HERE" >> test-secret.txt
git add test-secret.txt
git commit -m "Test: secret scanning"

# Push (should fail if push protection enabled)
git push origin test-security-scanning

# If push succeeds, create PR and check for security alert
```

**Expected result:**
- Push protection prevents push, OR
- PR shows security alert for secret in test-secret.txt
- Security check fails in PR

**Clean up:**
```bash
git checkout main
git branch -D test-security-scanning
git push origin --delete test-security-scanning
```

---

## Step 10: Document for Team

Share these docs with your team:
- `SECURITY.md` - Main security policy
- `SECURITY_SCANNING.md` - Detailed scanning guide
- `SECURITY_CHECKLIST.md` - Developer checklist
- This guide - Setup instructions

Add to your team onboarding:
1. Read security documentation
2. Enable security notifications
3. Review open security alerts before starting work
4. Follow security checklist for all PRs

---

## Maintenance Schedule

### Daily
- Review security check failures in PRs
- Fix critical/high findings immediately

### Weekly (Monday)
- Review scheduled security scan results
- Triage new findings
- Merge Dependabot PRs

### Monthly
- Review ignored/suppressed findings
- Update security rules if needed
- Check for new Semgrep/CodeQL rules

### Quarterly
- Rotate secrets (see `SECURITY.md`)
- Audit all security configurations
- Review and update documentation

---

## Troubleshooting

### "GitHub Advanced Security not available"
- **For private repos:** Need GitHub Enterprise or Team plan
- **For public repos:** Features are free, no action needed

### "CodeQL analysis failed"
- Check workflow logs in Actions tab
- Ensure repository has JavaScript/TypeScript code
- Verify Node.js dependencies install successfully

### "TruffleHog found many secrets"
- Review findings - may be test data or examples
- Add false positives to `.trufflehog-ignore.yml`
- For real secrets: rotate immediately, then suppress

### "Dependabot can't update dependencies"
- Check if package-lock.json is in .gitignore (it shouldn't be)
- Verify npm registry is accessible
- Review Dependabot logs in Insights → Dependency graph → Dependabot

### "Too many security alerts"
- **Dependency alerts:** Bulk dismiss low-severity if risk accepted
- **Code scanning:** Suppress false positives with reason
- **Secret scanning:** Review and dismiss test/example data

### "Workflows taking too long"
- Normal for first run (~15 minutes)
- Subsequent runs faster due to caching
- Consider disabling some checks on feature branches (keep all for main)

---

## Cost Considerations

### Public Repositories
All features are **free**:
- GitHub Advanced Security
- Dependabot
- Secret scanning
- Code scanning (CodeQL)
- Actions minutes (generous free tier)

### Private Repositories
**Required:**
- GitHub Enterprise or Team plan
- Advanced Security charged per **active committer**

**Free:**
- Actions minutes (generous monthly allowance)
- Third-party tools (Semgrep, TruffleHog)

**Cost optimization:**
- Review committer list monthly
- Disable Advanced Security on archived repos
- Use scheduled scans instead of every push (reduces Actions usage)

---

## Security Contacts

**Report security issues:**
- Email: security@loveiq.org
- DO NOT create public GitHub issues for security vulnerabilities

**Incident response:**
- Follow procedures in `SECURITY.md`
- Contact on-call security team immediately
- Review GitHub Security alerts for IOCs

---

## Additional Resources

**GitHub Documentation:**
- [Advanced Security](https://docs.github.com/en/code-security)
- [Dependabot](https://docs.github.com/en/code-security/dependabot)
- [Secret scanning](https://docs.github.com/en/code-security/secret-scanning)
- [CodeQL](https://codeql.github.com/)

**Third-Party Tools:**
- [Semgrep Rules](https://semgrep.dev/explore)
- [TruffleHog](https://github.com/trufflesecurity/trufflehog)
- [CycloneDX](https://cyclonedx.org/)

**Security Standards:**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NIST SSDF](https://csrc.nist.gov/Projects/ssdf)
- [SBOM Guide](https://www.cisa.gov/sbom)

---

**Setup completed?** ✅

You're now protected against:
- Leaked secrets in code and commits
- OWASP Top 10 vulnerabilities
- Dependency vulnerabilities
- Supply chain attacks
- Insecure coding patterns
- Missing security controls

**Next:** Review `SECURITY_SCANNING.md` for detailed usage guide.
