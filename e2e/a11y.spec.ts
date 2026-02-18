import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const criticalRoutes = ["/", "/about", "/waitlist", "/glossary", "/trust-zone"];

for (const route of criticalRoutes) {
  test(`${route} — no critical accessibility violations`, async ({ page }) => {
    await page.goto(route);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .exclude("#cookieyes-root") // third-party consent banner
      .exclude(".g-recaptcha") // third-party reCAPTCHA widget
      .exclude(".bg-clip-text") // gradient text — axe cannot evaluate variable-contrast gradients
      .analyze();

    // Only fail on critical or serious violations (minor/moderate are tracked, not blocking)
    const blocking = results.violations.filter(
      (v) => v.impact === "critical" || v.impact === "serious"
    );
    expect(
      blocking,
      `Critical/serious a11y violations on ${route}: ${blocking.map((v) => `${v.id}: ${v.description}`).join("; ")}`
    ).toHaveLength(0);
  });
}
