import { type ReactElement } from "react";
import {
  render as tlrRender,
  type RenderOptions,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): ReturnType<typeof tlrRender> =>
  tlrRender(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { render };
