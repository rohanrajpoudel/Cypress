import { sampleApi } from "../../api/sample1/sample.api";
import { sampleSuccessMsg } from "../../message/success/sample/sample.success";

describe("description of api/testing", () => {
  it("test case 1", () => {
    sampleApi().then((response) => {
      // if data
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id", 201);
    });
  });

  it("test case 2", () => {
    sampleApi().then((response) => {
      // if data
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", `${sampleSuccessMsg}`);
    });
  });
});
