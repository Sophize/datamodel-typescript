import { PointerType, ResourcePointer } from "../resource-pointer";
import { ResourceType } from "../resource-type";

test("My Greeter", () => {
  expect(
    new ResourcePointer(
      "dataset",
      ResourceType.ARGUMENT,
      PointerType.ASSIGNABLE,
      "id"
    ).toString()
  ).toBe("dataset/A_id");
});
