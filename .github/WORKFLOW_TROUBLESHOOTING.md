# GitHub Actions Workflow Troubleshooting

## Common First-Run Issues

### ✅ Expected Warnings (Can Ignore)

These warnings are **normal** if GitHub Advanced Security is not yet enabled:

#### 1. CodeQL/Semgrep SARIF Upload Warnings
```
Warning: Advanced Security must be enabled for this repository to use code scanning.
Error: Resource not accessible by integration
```

**Why:** GitHub Advanced Security is required to upload security findings.
**Fix:** Follow `GITHUB_SECURITY_SETUP.md` to enable Advanced Security.
**Workaround:** Workflow continues anyway with `continue-on-error: true`.

#### 2. Dependency Review Skipped
```
This job was skipped
```

**Why:** Dependency Review only runs on pull requests, not direct pushes.
**Fix:** This is correct behavior. It will run on your next PR.

---

## Fixed Issues (Should Not Occur)

### ✅ TruffleHog: "BASE and HEAD commits are the same"

**Fixed in latest workflow.** Now uses `--since-commit HEAD~10` to scan recent commits.

**Previously:** TruffleHog failed when pushing directly to main because it tried to compare base/head.
**Now:** Scans last 10 commits regardless of push type.

### ✅ Next.js: "Potential secrets found in build output"

**Fixed in latest workflow.** Now uses more specific regex to avoid false positives.

**Previously:** Detected variable names (like `process.env.SUPABASE_KEY`) as secrets.
**Now:** Only detects actual secret values (e.g., `SUPABASE_KEY=sk-abc123...`).

---

## How to Interpret Results

### Secret Scanning (TruffleHog)

#### ✅ Success
```
✓ TruffleHog Secret Scan
```
**Meaning:** No verified secrets found in recent commits.

#### ❌ Failure
```
✗ TruffleHog Secret Scan
🚨 Found verified secrets
```
**Action:**
1. Check workflow logs for details
2. Rotate affected secrets immediately
3. Add to `.trufflehog-ignore.yml` if false positive

### SAST (Semgrep)

#### ✅ Success
```
✓ Run Semgrep
✓ Upload Semgrep results to GitHub Security (or skipped with warning)
```
**Meaning:** No critical security issues found.

#### ⚠️ Warning
```
⚠ Upload Semgrep results to GitHub Security
Warning: Advanced Security must be enabled
```
**Meaning:** Scan completed but couldn't upload to Security tab.
**Action:** Check logs for findings, or enable Advanced Security.

### CodeQL Analysis

#### ✅ Success
```
✓ Perform CodeQL Analysis
CodeQL scanned X files
```
**Meaning:** Analysis completed successfully.

#### ⚠️ Warning
```
⚠ Perform CodeQL Analysis
Warning: Advanced Security must be enabled
```
**Meaning:** Analysis completed but couldn't upload results.
**Action:** Enable Advanced Security to see results in Security tab.

#### ❌ Syntax Errors
```
Could not process some files due to syntax errors (X results)
```
**Action:** Check which files have syntax errors and fix them.

### Next.js Security Checks

#### ✅ Success
```
✓ Check for unsafe Next.js patterns
✓ Build project
✓ Check build output for sensitive data
```
**Meaning:** No security issues detected.

#### ❌ Failure: Unsafe Patterns
```
✗ Check for unsafe Next.js patterns
⚠️ Found dangerouslySetInnerHTML usage
```
**Action:** Review flagged files and use safer alternatives.

#### ❌ Failure: Build Secrets
```
✗ Check build output for sensitive data
⚠️ WARNING: Actual secrets found in build output!
```
**Action:**
1. Check which secrets leaked
2. Ensure secrets are not accessed in client components
3. Verify environment variables are server-only

### Custom Security Rules

#### ✅ Success
```
✓ Check API route security patterns
✓ All API routes follow security patterns
```
**Meaning:** All API routes have CSRF, rate limiting, and validation.

#### ❌ Failure: Missing Security
```
✗ Check API route security patterns
⚠️ app/api/example/route.ts: POST route missing CSRF verification
```
**Action:** Add missing security controls to flagged API routes.

### Dependency Scan

#### ✅ Success
```
✓ Run npm audit
✓ Generate SBOM
```
**Meaning:** No high/critical vulnerabilities found.

#### ❌ Failure: Vulnerabilities
```
✗ Run npm audit
Found X vulnerabilities (Y moderate, Z high, W critical)
```
**Action:**
1. Review `npm audit` output
2. Update vulnerable packages
3. Wait for Dependabot PRs

---

## Enabling Full Features

### To Enable GitHub Advanced Security

**For Public Repos:** Free and auto-enabled.

**For Private Repos:**
1. Go to repository **Settings**
2. Click **Code security and analysis**
3. Under "GitHub Advanced Security", click **Enable**
4. Confirm

**Benefits:**
- CodeQL results in Security tab
- Semgrep results in Security tab
- Dependabot alerts
- Secret scanning alerts
- Code scanning alerts

### To Enable Dependabot

1. Go to repository **Settings**
2. Click **Code security and analysis**
3. Enable **Dependabot alerts**
4. Enable **Dependabot security updates**

**Benefits:**
- Automatic PRs for vulnerable dependencies
- Weekly dependency updates
- License compliance checking

---

## Workflow Status Meanings

| Status | Symbol | Meaning |
|--------|--------|---------|
| **Success** | ✅ | Job completed successfully |
| **Skipped** | ⊘ | Job didn't run (e.g., PR-only job on push) |
| **Warning** | ⚠️ | Job completed with warnings (non-blocking) |
| **Failure** | ❌ | Job failed (blocks PR merge if required) |

---

## When to Be Concerned

### 🚨 Critical Issues (Fix Immediately)

- ❌ TruffleHog found verified secrets
- ❌ Actual secrets in build output
- ❌ API routes missing security controls
- ❌ Critical/high npm audit vulnerabilities

### ⚠️ Important (Fix Soon)

- ❌ Unsafe Next.js patterns (eval, dangerouslySetInnerHTML)
- ❌ Medium npm audit vulnerabilities
- ❌ CodeQL syntax errors

### ℹ️ Informational (Can Wait)

- ⚠️ Advanced Security not enabled (warnings only)
- ⚠️ Low npm audit vulnerabilities
- ⊘ Dependency Review skipped (PR-only)

---

## Common Questions

### Q: Why are SARIF uploads failing?

**A:** GitHub Advanced Security is not enabled. This is expected.

**Options:**
1. Enable Advanced Security (recommended)
2. Continue without it (scans still run, just not visible in Security tab)

### Q: Why is Dependency Review skipped?

**A:** It only runs on pull requests, not direct pushes to main.

**To test:** Create a PR with a dependency change.

### Q: Why is the workflow slow?

**A:** First run downloads dependencies and analyzes entire codebase.

**Duration:**
- First run: ~10-15 minutes
- Subsequent runs: ~5-10 minutes (cached)

### Q: Can I disable some checks?

**A:** Yes, but not recommended.

**To disable a job:**
```yaml
jobs:
  job-name:
    if: false  # Disable this job
```

### Q: How do I see detailed scan results?

**A:** Click on the failed job in GitHub Actions to see logs.

**With Advanced Security enabled:**
- Go to **Security** tab → **Code scanning alerts**

---

## Quick Fixes

### Fix: TruffleHog Fails on First Push

**Already fixed in latest workflow.**

### Fix: Too Many False Positives

**Semgrep:**
Add to `.semgrepignore`:
```
# Ignore test files
**/*.test.ts
**/*.spec.ts
```

**TruffleHog:**
Add to `.trufflehog-ignore.yml`:
```yaml
- path: "test/fixtures/*.json"
  reason: "Test data only"
```

### Fix: Build Takes Too Long

**Option 1:** Reduce frequency of scheduled scans
```yaml
schedule:
  - cron: '0 9 * * 1'  # Weekly instead of daily
```

**Option 2:** Skip non-critical jobs on push
```yaml
jobs:
  codeql-analysis:
    if: github.event_name == 'pull_request'  # PR only
```

---

## Getting Help

### Check Logs
1. Go to GitHub **Actions** tab
2. Click on failed workflow run
3. Click on failed job
4. Expand failed step
5. Read error message

### Review Documentation
- `SECURITY_SCANNING.md` - Detailed scanning guide
- `GITHUB_SECURITY_SETUP.md` - Setup instructions
- `.github/SECURITY_CHECKLIST.md` - Developer checklist

### Common Log Patterns

**"Resource not accessible"**
→ Need to enable Advanced Security

**"BASE and HEAD commits are the same"**
→ Update workflow (already fixed)

**"Potential secrets found"**
→ Check if actual secrets or just variable names

**"Missing CSRF verification"**
→ Add security controls to API route

---

## Summary

### Expected First Run
- ⚠️ SARIF upload warnings (if Advanced Security not enabled)
- ⊘ Dependency Review skipped (push to main)
- ✅ All scans complete
- ⏱️ ~10-15 minutes duration

### Next Steps
1. Review any actual failures in logs
2. Enable GitHub Advanced Security
3. Fix any flagged security issues
4. Create a PR to test Dependency Review

**Most warnings are informational and don't block deployment.**

---

**Updated:** 2026-02-08
**Related:** `GITHUB_SECURITY_SETUP.md`, `SECURITY_SCANNING.md`
