import { ResourcePointer as ResourcePointer } from "./resource-pointer";
import { ResourceType } from "./resource-type";

export class PropositionPointer {
  constructor(
    public ptr: ResourcePointer = null,
    public negative: boolean = false
  ) {}

  get datasetId() {
    return this.ptr?.datasetId;
  }

  public static equals(one: PropositionPointer, two: PropositionPointer) {
    if (!one || !two) {
      return !one && !two;
    }
    return one.ptr.equals(two.ptr) && one.negative === two.negative;
  }

  public static fromResourcePointer(
    ptr: ResourcePointer,
    negative: boolean
  ): PropositionPointer {
    return new PropositionPointer(ptr, negative);
  }

  public static isValid(propPtr: PropositionPointer) {
    return (
      ResourcePointer.isValid(propPtr?.ptr) &&
      (propPtr.ptr.resourceType === ResourceType.TERM ||
        (propPtr.negative !== null && propPtr.negative !== undefined))
    );
  }
  
  public static fromStringArr(arr: string[], defaultDatasetId?: string) {
    return arr.map((s) => PropositionPointer.fromString(s, defaultDatasetId));
  }

  public static fromString(s: string, defaultDatasetId?: string) {
    let ptr = null;
    if (s.endsWith(":D") || s.endsWith(":Y") || s.endsWith(":N")) {
      ptr = ResourcePointer.fromString(s.slice(0, -2), defaultDatasetId);
    } else {
      ptr = ResourcePointer.fromString(s, defaultDatasetId);
    }
    if (!ptr) return null;
    if (ptr.resourceType === ResourceType.TERM) {
      return new PropositionPointer(ptr, null);
    }

    if (ptr.resourceType === ResourceType.PROPOSITION) {
      if (s.endsWith(":N")) {
        return new PropositionPointer(ptr, true);
      } else {
        return new PropositionPointer(ptr, false);
      }
    }
    return null;
  }

  public toString(defaultDatasetId?: string) {
    return this.toStringInternal(false, defaultDatasetId);
  }

  public toDisplayString(defaultDatasetId?: string) {
    return this.toStringInternal(true, defaultDatasetId);
  }

  private toStringInternal(stripMachineId: boolean, defaultDatasetId?: string) {
    let suffix = "";
    if (this.ptr.resourceType === ResourceType.TERM) {
      suffix = ":D";
    } else if (this.negative) {
      suffix = ":N";
    } else {
      suffix = ":Y";
    }
    if (!stripMachineId) return this.ptr.toString(defaultDatasetId) + suffix;
    else return this.ptr.toDisplayString(defaultDatasetId) + suffix;
  }
}
