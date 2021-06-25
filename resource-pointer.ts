import { ResourceType } from "./resource-type";

export enum PointerType {
  EPHEMERAL = "EPHEMERAL",
  PERMANENT = "PERMANENT",
  ASSIGNABLE = "ASSIGNABLE",
}

const ALPHANUMERIC = /^[a-zA-Z0-9._\~\-]+$/;
export class ResourcePointer {
  constructor(
    public datasetId: string = "",
    public resourceType: ResourceType = null,
    public pointerType: PointerType = null,
    public id: string = ""
  ) {}

  get resourceShowId() {
    return (
      ResourcePointer.toResourceTypeCode(this.resourceType) +
      ResourcePointer.toPointerTypeCode(this.pointerType) +
      this.id
    );
  }

  public static assignablePtr(
    datasetId: string,
    resourceType: ResourceType,
    id: string
  ) {
    return new ResourcePointer(
      datasetId,
      resourceType,
      PointerType.EPHEMERAL,
      id
    );
  }

  public static permanentPtr(
    datasetId: string,
    resourceType: ResourceType,
    id: string
  ) {
    return new ResourcePointer(
      datasetId,
      resourceType,
      PointerType.PERMANENT,
      id
    );
  }

  public static equals(one: ResourcePointer, two: ResourcePointer) {
    if (!one || !two) return !one && !two;

    return one.equals(two);
  }

  public static listEquals(one: ResourcePointer[], two: ResourcePointer[]) {
    if (!one || !two) return !one && !two;

    if (one.length !== two.length) return false;
    for (let i = 0; i < one.length; i++)
      if (!ResourcePointer.equals(one[i], two[i])) return false;
    return true;
  }

  public static fromStringArr(arr: string[], defaultDatasetId?: string) {
    return arr.map((s) => ResourcePointer.fromString(s, defaultDatasetId));
  }

  public static fromString(s: string, defaultDatasetId?: string) {
    if(!s) return null;
    s = s.trim();
    if (s.startsWith("#")) s = s.substring(1);
    const parts = s.split("/");
    if (parts.length < 1 || parts.length > 2) return null;
    const datasetIdPart = parts.length === 1 ? defaultDatasetId : parts[0];
    const resourceIdPart = parts[parts.length - 1];

    if (
      !datasetIdPart ||
      !resourceIdPart ||
      datasetIdPart.length < 3 ||
      resourceIdPart.length < 3
    ) {
      return null;
    }
    if (
      !ALPHANUMERIC.test(datasetIdPart) ||
      !ALPHANUMERIC.test(resourceIdPart)
    ) {
      return null;
    }

    const rType = ResourcePointer.toResourceType(resourceIdPart.charAt(0));
    if (!rType) return null;

    const pType = ResourcePointer.toPointerType(resourceIdPart.charAt(1));
    if (!pType) return null;

    return new ResourcePointer(
      datasetIdPart,
      rType,
      pType,
      resourceIdPart.substr(2)
    );
  }

  public static isValid(ptr: ResourcePointer): boolean {
    return !!(
      ptr &&
      ptr.datasetId &&
      ptr.pointerType &&
      ptr.resourceType &&
      ptr.id
    );
  }

  private static toResourceType(char: string) {
    switch (char) {
      case "T":
        return ResourceType.TERM;
      case "P":
        return ResourceType.PROPOSITION;
      case "A":
        return ResourceType.ARGUMENT;
      case "B":
        return ResourceType.BELIEFSET;
      case "R":
        return ResourceType.ARTICLE;
      case "J":
        return ResourceType.PROJECT;
      case "M":
        return ResourceType.MACHINE;
    }
    return null;
  }

  private static toPointerType(char: string) {
    switch (char) {
      case ".":
        return PointerType.PERMANENT;
      case "_":
        return PointerType.ASSIGNABLE;
      case "~":
        return PointerType.EPHEMERAL;
    }
    return null;
  }

  private static toPointerTypeCode(type: PointerType) {
    switch (type) {
      case PointerType.PERMANENT:
        return ".";
      case PointerType.ASSIGNABLE:
        return "_";
      case PointerType.EPHEMERAL:
        return "~";
    }
    return null;
  }

  private static toResourceTypeCode(type: ResourceType) {
    switch (type) {
      case ResourceType.TERM:
        return "T";
      case ResourceType.PROPOSITION:
        return "P";
      case ResourceType.ARGUMENT:
        return "A";
      case ResourceType.BELIEFSET:
        return "B";
      case ResourceType.ARTICLE:
        return "R";
      case ResourceType.PROJECT:
        return "J";
      case ResourceType.MACHINE:
        return "M";
    }
    return null;
  }

  public toString(defaultDatasetId?: string) {
    if (!ResourcePointer.isValid(this)) return "";
    if (defaultDatasetId === this.datasetId) return this.resourceShowId;
    return this.datasetId + "/" + this.resourceShowId;
  }

  public toDisplayString(defaultDatasetId?: string) {
    if (!ResourcePointer.isValid(this)) return "";
    const strippedResourceShowId = this.resourceShowId.replace(
      /^(\w~)[^~]+~(.+)$/,
      "$1$2"
    );
    if (defaultDatasetId === this.datasetId) return strippedResourceShowId;
    return this.datasetId + "/" + strippedResourceShowId;
  }

  public equals(that: ResourcePointer) {
    if (!that) {
      return false;
    }
    return (
      this.datasetId === that.datasetId &&
      this.resourceType === that.resourceType &&
      this.pointerType === that.pointerType &&
      this.id === that.id
    );
  }

  public isPermanentPtr() {
    return this.pointerType === PointerType.PERMANENT;
  }

  public isAssignablePtr() {
    return this.pointerType === PointerType.ASSIGNABLE;
  }

  public isEphemeralPtr() {
    return this.pointerType === PointerType.EPHEMERAL;
  }
}
