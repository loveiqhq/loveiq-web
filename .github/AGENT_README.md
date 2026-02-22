# .github/

GitHub configuration: CI/CD workflows, templates, and security documentation.

## What belongs here

- GitHub Actions workflow files (`workflows/`)
- Issue and PR templates
- Security and incident response documentation
- Dependabot configuration

## What does NOT belong here

- Application source code → use `app/`, `lib/`, `components/`
- General project documentation → use `.planning/` or repo root

## Key files

| File                           | Purpose                                                            |
| ------------------------------ | ------------------------------------------------------------------ |
| `workflows/ci.yml`             | Main CI: lint, build, unit tests                                   |
| `workflows/security.yml`       | Security scanning: secrets, SAST, dependencies, SBOM               |
| `workflows/codeql.yml`         | Advanced CodeQL static analysis                                    |
| `workflows/health-monitor.yml` | Production health monitoring                                       |
| `workflows/load-test.yml`      | Automated load testing                                             |
| `INCIDENT_RESPONSE_AGENT.md`   | IR protocol for AI agents (follow immediately on security trigger) |
| `SECURITY_CHECKLIST.md`        | Pre-deployment security checklist                                  |
| `dependabot.yml`               | Automated dependency update configuration                          |
