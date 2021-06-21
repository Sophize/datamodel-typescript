export enum ResourceType {
  UNKNOWN = "UNKNOWN",
  DATASET = "DATASET",
  TERM = "TERM",
  PROPOSITION = "PROPOSITION",
  ARGUMENT = "ARGUMENT",
  BELIEFSET = "BELIEFSET",
  ARTICLE = "ARTICLE",
  PROJECT = "PROJECT",
  MACHINE = "MACHINE",
}

export const ALL_TYPES = [
  ResourceType.TERM,
  ResourceType.PROPOSITION,
  ResourceType.ARGUMENT,
  ResourceType.BELIEFSET,
  ResourceType.ARTICLE,
  ResourceType.PROJECT,
  ResourceType.MACHINE,
];
