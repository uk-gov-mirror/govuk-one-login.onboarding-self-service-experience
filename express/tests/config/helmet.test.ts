import Helmet from "../../src/config/helmet.js";
import {TEST_HELMET_CONFIG} from "../constants.js";

const helmetMock = vi.fn();

vi.mock("helmet", () => helmetMock);

describe("helmet config tests", () => {
    it("applies the expected values when calling the Helmet function", () => {
        Helmet();
        expect(helmetMock).toHaveBeenCalledTimes(1);
        expect(helmetMock).toHaveBeenCalledWith(TEST_HELMET_CONFIG);
    });
});
