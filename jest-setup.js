import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "text-encoding";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "mocked response" }),
  })
);
