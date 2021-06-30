import { ResourcePointer } from "./resource-pointer";

export interface TruthStatus {
  beliefsetPtr: ResourcePointer;
  targetPtr: ResourcePointer;

  arguments: ResourcePointer[];
  activatedArgument: ResourcePointer;
  axiomParentList: ResourcePointer[];

  negativeArguments: ResourcePointer[];
  negativeActivatedArgument: ResourcePointer;
  negativeAxiomParentList: ResourcePointer[];
}

export function emptyTruthStatus(
  beliefsetPtr: ResourcePointer,
  targetPtr: ResourcePointer
): TruthStatus {
  return {
    beliefsetPtr,
    targetPtr,
    arguments: [],
    activatedArgument: null,
    axiomParentList: [],
    negativeArguments: [],
    negativeActivatedArgument: null,
    negativeAxiomParentList: [],
  };
}
