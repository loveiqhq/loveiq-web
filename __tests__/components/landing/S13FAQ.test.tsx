// @vitest-environment jsdom
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, afterEach } from "vitest";
import S13FAQ from "@/components/landing/S13FAQ";

afterEach(cleanup);

describe("S13FAQ", () => {
  it("renders first FAQ question text", () => {
    render(<S13FAQ />);
    expect(screen.getByText(/is this a test or an ongoing journey/i)).toBeInTheDocument();
  });

  it("renders all 13 FAQ question buttons", () => {
    render(<S13FAQ />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(13);
  });

  it("click question sets aria-expanded to true", async () => {
    const user = userEvent.setup();
    render(<S13FAQ />);
    const button = screen.getByRole("button", { name: /is this a test or an ongoing journey/i });
    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("click open question again sets aria-expanded to false", async () => {
    const user = userEvent.setup();
    render(<S13FAQ />);
    const button = screen.getByRole("button", { name: /is this a test or an ongoing journey/i });
    await user.click(button);
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("two different FAQs can be open simultaneously", async () => {
    const user = userEvent.setup();
    render(<S13FAQ />);
    const [first, second] = screen.getAllByRole("button");
    await user.click(first);
    await user.click(second);
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(second).toHaveAttribute("aria-expanded", "true");
  });
});
