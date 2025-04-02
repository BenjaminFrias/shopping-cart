import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Root from "./Root";

describe("App component", () => {
	it("renders the navigation bar", () => {
		render(
		  <MemoryRouter>
			<Root />
		  </MemoryRouter>
		);
	
		const navElement = screen.getByRole("nav");
		expect(navElement).toBeInTheDocument();	
	});
});
