import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const criticalRoutes = ["/", "/about", "/waitlist", "/glossary", "/trust-zone"];

for (const route of criticalRoutes) {
  test(`${route} — no critical accessibility violations`, async ({ page }) => {
    await page.goto(route);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .exclude("#cookieyes-root") // third-party consent banner
      .analyze();

    expect(results.violations).toEqual([]);
  });
}
