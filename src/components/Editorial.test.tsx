import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { Portfolio, CaseStudy } from "./Editorial";

test("provides a clear work entry, résumé, and direct contact", () => {
  render(<Portfolio />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(screen.getByRole("main")).toHaveAttribute("id", "main");
  expect(
    screen.getByRole("link", { name: /explore my experience/i }),
  ).toHaveAttribute("href", "#experience");
  expect(screen.getByRole("link", { name: /email me/i })).toHaveAttribute(
    "href",
    "mailto:rohansharmadutt876@gmail.com",
  );
  expect(
    within(screen.getByRole("navigation")).getByRole("link", {
      name: /résumé/i,
    }),
  ).toHaveAttribute("href", "/Rohan-Sharma-Resume.pdf");
});

test("project evidence can be expanded", async () => {
  render(<Portfolio />);
  const summary = screen.getAllByText("Inside the project")[0];
  await userEvent.click(summary);
  expect(summary.closest("details")).toHaveAttribute("open");
  expect(
    screen.getAllByRole("link", { name: /view source on github/i })[0],
  ).toHaveAttribute("href", "https://github.com/rohnn-afk/ViewCount");
});

test("case study preserves disclosure and engineering evidence", () => {
  render(<CaseStudy />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(
    screen.getByRole("heading", { name: "Conceptual disclosure" }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      /applications could then move through the container build/,
    ),
  ).toBeInTheDocument();
});
