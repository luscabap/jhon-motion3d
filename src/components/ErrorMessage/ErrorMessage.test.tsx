import "@testing-library/jest-dom";
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { ErrorMessage } from ".";

const textMessage = "This is a test"

describe("Error Message", () => {
  test("Shoul be have text content", () => {
    const { getByRole } = render (<ErrorMessage text={textMessage}/>)

    expect(getByRole("paragraph")).toHaveTextContent(textMessage);
  })
})