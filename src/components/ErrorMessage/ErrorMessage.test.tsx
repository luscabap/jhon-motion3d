import "@testing-library/jest-dom";
import { render } from "@testing-library/react"
import { describe, test } from "vitest"
import { ErrorMessage } from ".";

const textMessage = "This is a test";
const styles = "font-bold text-red-600";

describe("Error Message", () => {
  test("Should be have text content", () => {
    const { getByRole } = render (<ErrorMessage text={textMessage}/>)

    expect(getByRole("paragraph")).toHaveTextContent(textMessage);
  });

  test("Should be have styles", () => {
    const { getByRole } = render (<ErrorMessage text={textMessage}/>)

    expect(getByRole("paragraph")).toHaveClass(styles);
  })
})