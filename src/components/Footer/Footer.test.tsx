import "@testing-library/jest-dom";
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { Footer } from ".";


const buttonTestId = "footer"


describe("Footer", () => {
  test("Should be able in the screen", () => {
    const { getByTestId } = render(<Footer />)

    expect(getByTestId(buttonTestId)).toBeInTheDocument();
  })
})
