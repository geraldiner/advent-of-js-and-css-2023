const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../src/index");

require("dotenv").configDotenv();

/* Connecting to the database before each test. */
beforeEach(async () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });});

/* Closing database connection after each test. */
afterEach(async () => {
  mongoose.connection.close();
  app.close()
});

describe("GET /", () => {
  it("should get a 'Hello World!' response", async () => {
    const response = await request(app).get("/")

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toContain("Hello World!");
  });
});
