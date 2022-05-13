const getThingById = require(".");

describe("Given an getThingByid function", () => {
  describe("When it receive a 6 as a id", () => {
    test("Then it should return status 404", () => {
      const request = {
        params: {
          idThing: "6",
        },
      };
      const expectedStatus = 404;
      const res = {
        status: jest.fn(),
        json: jest.fn(),
      };

      getThingById(request, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    describe("When it receives an id 3", () => {
      test("Then it should return an status 200 with the json body", () => {
        const request = {
          params: {
            idThing: "3",
          },
        };

        const expectedBody = {
          id: "3",
          thing: "Redux-Flux",
        };
        const expectedStatus = 200;
        const res = {
          status: jest.fn(),
          json: jest.fn(),
        };

        getThingById(request, res);

        expect(res.status).toHaveBeenCalledWith(expectedStatus);
        expect(res.json).toHaveBeenCalledWith(expectedBody);
      });
    });
  });
});
