import request from "supertest";
import { createApp } from "../../app";
import { db } from "../../db";
import { StatusCodes } from "http-status-codes";

const app = createApp(db);
app.listen(3004);

describe("GET /company", () => {
  it("should return status code 200", () => {
    return request(app)
      .get("/")
      .expect(200)
  });

  // it('should return all company listed in database')
});

describe("POST /company", () => {
  it("empty body will return status code 500", () => {
    return request(app).post("/company").expect(500);
  });

  it("empty body will return status code 500", () => {
    return request(app).post("/company").expect(500);
  });

  // it('can post new company to database')
});
