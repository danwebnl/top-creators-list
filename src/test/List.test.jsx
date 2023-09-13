import { describe, test, expect } from "vitest";
import { render, screen, waitFor, within } from "@testing-library/react";
import List from "../components/List";
import mockData from "./mockResponse";

describe("Display the results based on the mock data", () => {
  test("should display the results list in the page", async () => {
    render(<List data={mockData} />);
    await waitFor(() => {
      const listElement = screen.getByTestId("list-results");
      expect(listElement).toBeInTheDocument();
    });
  });

  test("the list should contain 3 items", async () => {
    render(<List data={mockData} />);
    await waitFor(() => {
      const list = screen.getByTestId("list-results");
      const { getAllByRole } = within(list);
      const items = getAllByRole("listitem");
      expect(items.length).toBe(3);
    });
  });

  test("the list should display the correct 3 results in the right order", async () => {
    render(<List data={mockData} />);
    await waitFor(() => {
      const list = screen.getByTestId("list-results");
      const { getAllByRole } = within(list);
      const items = getAllByRole("listitem");
      expect(items[0].textContent).toBe("user_2_email");
      expect(items[1].textContent).toBe("user_3_email");
      expect(items[2].textContent).toBe("user_4_email");
    });
  });
});
