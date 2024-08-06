import "@testing-library/jest-dom";
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { MemoryRouter } from "react-router-dom";
import { TitleSection } from ".";

describe("Testing HomePage", () => {
  test("Should be able to see initial text on screen", () => {
    const text = "Text typed"
    const { getByText } = render(<MemoryRouter><TitleSection text={text}/></MemoryRouter>);
    
    expect(getByText(text)).toBeInTheDocument()
  })
})