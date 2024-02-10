import { sampleLoginApi } from "../../api/sample1/sample.api";
import { sampleApi2 } from "../../api/sample2/sample2.api";
import { sampleErrorMsg } from "../../message/error/sample/sample.error";
import { sampleSuccessMsg } from "../../message/success/sample/sample.success";

let token;

describe("description of api/testing", () => {
  // precondition
  before(() => {
    sampleLoginApi("sample@email.com", "dummyPassword").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        `${sampleSuccessMsg.login}`
      );
      expect(response.body.data.admin.roles).to.have.length(1);
      token = response.body.data.bearerToken;
    });
  });

  it("test case 1 for getting api inside of auth", () => {
    sampleApi2(token).then((response) => {
      // if data
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property(
        "message",
        `${sampleSuccessMsg.created}`
      );
    });
  });

  it("test case 2 for getting api inside of auth", () => {
    const data = {
      key1: "sampleValue1",
      // key2: 'missingValue1',
    };

    sampleApi2(data, token).then((response) => {
      // if data
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property(
        "message",
        `${sampleErrorMsg.notOk}`
      );
    });
  });
});
