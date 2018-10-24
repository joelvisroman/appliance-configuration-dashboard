import request from "supertest";
import app from "../app";
import supertest = require("supertest");

describe("The status route", () => {
  it("should respond ok", async () => {
    const response = await request(app).get("/status");
    expect(response.status).toBe(200);
  });
});
