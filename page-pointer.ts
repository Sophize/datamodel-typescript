import { ResourcePointer } from "./resource-pointer";

export class PagePointer {
  constructor(public projectPtr: ResourcePointer, public pageId: string) {}

  public toString() {
    return this.projectPtr.toString() + "/" + this.pageId;
  }
}
