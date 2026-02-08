# AI Assistant Configuration Files

This repository includes configuration files for multiple AI coding assistants to ensure consistent security practices and code quality across all tools.

## 📁 Configuration Files

| File | AI Assistant | Description |
|------|-------------|-------------|
| `CLAUDE.md` | Claude (Anthropic) | Main instructions for Claude Code |
| `.cursorrules` | Cursor AI | Instructions for Cursor editor |
| `.github/copilot-instructions.md` | GitHub Copilot | Instructions for Copilot in VS Code |
| `.windsurfrules` | Windsurf (Codeium) | Instructions for Windsurf editor |
| `.continuerules` | Continue | Instructions for Continue extension |
| `.aider.conf.yml` | Aider | Configuration for Aider CLI tool |
| `.codeium/instructions.md` | Codeium | Instructions for Codeium extension |

## 🎯 What They Do

All configuration files ensure AI assistants:

1. **Follow security requirements**
   - CSRF verification in API routes
   - Rate limiting on POST routes
   - Input validation with Zod schemas
   - No hardcoded secrets

2. **Use consistent code patterns**
   - API route template with security controls
   - Component patterns matching existing code
   - File organization standards
   - TypeScript strict mode

3. **Prevent common mistakes**
   - No `eval()`, `dangerouslySetInnerHTML`
   - No `Math.random()` for security
   - No `console.log()` (use .info/.warn/.error)
   - No `process.env.*` in client code

4. **Reference documentation**
   - `SECURITY.md` - Security policy
   - `.github/SECURITY_CHECKLIST.md` - Developer checklist
   - `SECURITY_SCANNING.md` - Security scanning details
   - `.github/SECURITY_QUICK_REFERENCE.md` - Quick reference

## 🔧 How to Use

### Claude Code (Current)
Already configured via `CLAUDE.md` - no additional setup needed.

### Cursor AI
1. Open project in Cursor
2. Cursor automatically reads `.cursorrules`
3. AI suggestions will follow the rules

### GitHub Copilot
1. Install Copilot extension in VS Code
2. Copilot reads `.github/copilot-instructions.md`
3. Suggestions follow the guidelines

### Windsurf
1. Open project in Windsurf editor
2. Reads `.windsurfrules` automatically
3. AI assistance follows the rules

### Continue
1. Install Continue extension in VS Code
2. Reads `.continuerules` automatically
3. Code suggestions follow the patterns

### Aider
1. Install Aider: `pip install aider-chat`
2. Run in project directory: `aider`
3. Configuration loaded from `.aider.conf.yml`

### Codeium
1. Install Codeium extension
2. Reads `.codeium/instructions.md`
3. Autocomplete follows the rules

## ✅ What's Enforced

### API Route Requirements

All AI assistants will suggest API routes with:

```typescript
export async function POST(request: Request) {
  // 1. CSRF verification
  if (!(await verifyCsrfToken(request))) {
    return NextResponse.json({ error: "Invalid request." }, { status: 403 });
  }

  // 2. Rate limiting
  const ip = getClientIp(request);
  const rateLimit = await checkRateLimit(ip, { bucket: "name", limit: 5, windowMs: 60_000 });
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Please try again later." }, { status: 429 });
  }

  // 3. Input validation
  const parsed = schema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  // 4. Business logic with error handling
  try {
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error:", err);
    return NextResponse.json({ error: "Unable to process request." }, { status: 500 });
  }
}
```

### Security Patterns

- ✅ CSRF protection (POST/PUT/DELETE/PATCH)
- ✅ Rate limiting (all POST routes)
- ✅ Input validation (Zod schemas)
- ✅ Generic error messages (no info disclosure)
- ✅ Proper TypeScript types (no `any`)
- ✅ Security headers (via middleware)
- ✅ No hardcoded secrets

### Code Style

- TypeScript strict mode
- Functional components with FC type
- Tailwind CSS (design tokens from `globals.css`)
- Follow existing file organization
- ESLint rules enforced

## 🚫 What's Prevented

All AI assistants are configured to avoid:

- ❌ Hardcoded secrets or API keys
- ❌ `eval()`, `new Function()`, `dangerouslySetInnerHTML`
- ❌ `Math.random()` for security (use `crypto.getRandomValues()`)
- ❌ `console.log()` (use `console.info/warn/error`)
- ❌ `process.env.*` in client code (only `NEXT_PUBLIC_*`)
- ❌ Skipping security controls
- ❌ Information disclosure in errors
- ❌ TypeScript `any` type

## 📚 Common Documentation

All AI assistants reference:

1. **`CLAUDE.md`** - Main codebase instructions
2. **`SECURITY.md`** - Security policy and incident response
3. **`.github/SECURITY_CHECKLIST.md`** - Pre-commit security checklist
4. **`.github/SECURITY_QUICK_REFERENCE.md`** - Quick reference card
5. **`SECURITY_SCANNING.md`** - Security scanning documentation

## 🔄 Keeping in Sync

When updating security requirements:

1. Update `CLAUDE.md` (primary source)
2. Update `SECURITY.md` if policy changes
3. Update AI assistant configs if needed:
   - `.cursorrules`
   - `.github/copilot-instructions.md`
   - `.windsurfrules`
   - `.continuerules`
   - `.aider.conf.yml`
   - `.codeium/instructions.md`
4. Update `.github/SECURITY_CHECKLIST.md`
5. Update `.github/SECURITY_QUICK_REFERENCE.md`

**Tip:** Most rules reference `CLAUDE.md`, so updating it updates most assistants indirectly.

## 🧪 Testing AI Assistants

To verify AI assistants follow the rules:

### Test 1: API Route Security
Ask AI to create a new API route. Should include:
- ✅ CSRF verification
- ✅ Rate limiting
- ✅ Zod validation
- ✅ Error handling

### Test 2: Secret Detection
Try to add a hardcoded API key. AI should:
- ⚠️  Warn against it
- 💡 Suggest using environment variables

### Test 3: Unsafe Patterns
Try to use `eval()` or `dangerouslySetInnerHTML`. AI should:
- ⚠️  Flag as security risk
- 💡 Suggest safer alternatives

### Test 4: Environment Variables
Try to access `process.env.SECRET` in a client component. AI should:
- ⚠️  Warn it won't work
- 💡 Suggest `NEXT_PUBLIC_*` prefix or move to server

## 📝 File Formats

Different tools use different formats:

- **Markdown** (`.md`): Claude, Copilot, Codeium
- **Plain text** (no extension): Cursor, Windsurf, Continue
- **YAML** (`.yml`): Aider

All contain the same core security requirements and patterns.

## 🎓 For Developers

If you're using an AI assistant not listed here:

1. Check if it supports custom instructions
2. Copy relevant sections from `.cursorrules` or `CLAUDE.md`
3. Adapt to your tool's configuration format
4. Add to this document for team reference

## 🔗 Related Documentation

- `IMPLEMENTATION_COMPLETE.md` - Security implementation summary
- `GITHUB_SECURITY_SETUP.md` - GitHub security features setup
- `SECURITY_IMPLEMENTATION_SUMMARY.md` - Technical details
- `.github/README.md` - GitHub configuration overview

## 📞 Support

**Questions about AI assistant configs?**
- Check the specific config file for your tool
- Review `CLAUDE.md` for detailed patterns
- See `.github/SECURITY_CHECKLIST.md` for requirements

**Updating configs?**
- Keep all files in sync
- Test with each AI assistant if possible
- Document changes in this file

---

## Summary

**7 AI assistants configured** to follow the same security practices:
- Claude Code, Cursor, Copilot, Windsurf, Continue, Aider, Codeium

**All enforce:**
- API route security (CSRF + rate limiting + validation)
- No hardcoded secrets
- No unsafe patterns
- Consistent code style
- TypeScript best practices

**Result:** Secure, consistent code regardless of which AI assistant developers use.

---

**Last updated:** 2026-02-08
**Configuration files:** 7 total (including CLAUDE.md)
**Status:** ✅ All AI assistants configured
