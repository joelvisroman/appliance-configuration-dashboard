import status from "./";

describe("The status model", () => {
  it("Should return true if everything is running", async () => {
    const res = await status();
    expect(res).toBe(true);
  });
});
