import server from "..";

describe("The status endpoint", () => {
  it("Should GET the status", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/status"
    });

    expect(response.statusCode).toBe(200);
  });
});
