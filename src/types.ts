// To parse this data:
//
//   import { Convert, Types } from "./file";
//
//   const types = Convert.toTypes(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Types {
    argument?:         Argument;
    article?:          Article;
    beliefset?:        Beliefset;
    dataset?:          Dataset;
    machine?:          Machine;
    page?:             Page;
    project?:          Project;
    proofRequest?:     ProofRequest;
    proofResponse?:    ProofResponse;
    proposition?:      Proposition;
    resource?:         Resource;
    resourceValidity?: ResourceValidity;
    term?:             Term;
}

export interface Argument {
    argumentText?:    string;
    conclusion?:      string;
    language?:        Language;
    lookupTerms?:     string[];
    metaLanguage?:    MetaLanguage;
    premiseMachine?:  string;
    premises?:        string[];
    assignablePtr?:   string;
    citations?:       Citation[];
    contributor?:     User;
    ephemeralPtr?:    string;
    indexable?:       boolean;
    names?:           string[];
    notPermanentPtr?: string;
    permanentPtr?:    string;
    tags?:            string[];
}

export interface Citation {
    textCitation?: string;
}

export interface User {
    handle?:    string;
    userEmail?: string;
    userLink?:  string;
    userName?:  string;
    userPic?:   string;
}

export enum Language {
    Informal = "INFORMAL",
    MetamathSetMm = "METAMATH_SET_MM",
}

export enum MetaLanguage {
    Informal = "INFORMAL",
    Metamath = "METAMATH",
}

export interface Article {
    abstractText?:    string;
    authors?:         Author[];
    beliefset?:       string;
    content?:         string;
    title?:           string;
    assignablePtr?:   string;
    citations?:       Citation[];
    contributor?:     User;
    ephemeralPtr?:    string;
    indexable?:       boolean;
    names?:           string[];
    notPermanentPtr?: string;
    permanentPtr?:    string;
    tags?:            string[];
}

export interface Author {
    user?: User;
}

export interface Beliefset {
    description?:                string;
    subBeliefsetPtrs?:           string[];
    unsupportedMachinePtrs?:     string[];
    unsupportedPropositionPtrs?: string[];
    assignablePtr?:              string;
    citations?:                  Citation[];
    contributor?:                User;
    ephemeralPtr?:               string;
    indexable?:                  boolean;
    names?:                      string[];
    notPermanentPtr?:            string;
    permanentPtr?:               string;
    tags?:                       string[];
}

export interface Dataset {
    bannerUrl?:          string;
    customHomeArticle?:  boolean;
    description?:        string;
    iconUrl?:            string;
    licenses?:           License[];
    name?:               string;
    openAcls?:           AccessType[];
    subscribedDatasets?: string[];
    tags?:               string[];
}

export interface License {
    licenseText?:   string;
    licenseType?:   LicenseType;
    linkToLicense?: string;
}

export enum LicenseType {
    Cc0 = "CC0",
    CcBy = "CC_BY",
    CcByNc = "CC_BY_NC",
    CcByNcNd = "CC_BY_NC_ND",
    CcByNcSa = "CC_BY_NC_SA",
    CcByNd = "CC_BY_ND",
    CcBySa = "CC_BY_SA",
    GNUGPL = "GNU_GPL",
    MIT = "MIT",
    Unknown = "UNKNOWN",
}

export enum AccessType {
    AddNewData = "ADD_NEW_DATA",
    ApproveDataUpdates = "APPROVE_DATA_UPDATES",
    ApproveUserUpdates = "APPROVE_USER_UPDATES",
    ApproveValidity = "APPROVE_VALIDITY",
    Comment = "COMMENT",
    DatasetPropertyUpdate = "DATASET_PROPERTY_UPDATE",
    EditDeleteData = "EDIT_DELETE_DATA",
    GlobalApproveValidity = "GLOBAL_APPROVE_VALIDITY",
    ModerateComments = "MODERATE_COMMENTS",
    ReadData = "READ_DATA",
    SuggestDataUpdates = "SUGGEST_DATA_UPDATES",
    SuggestUserUpdates = "SUGGEST_USER_UPDATES",
    Unknown = "UNKNOWN",
    UpdateUser = "UPDATE_USER",
}

export interface Machine {
    defaultLanguage?:           Language;
    defaultLenientStatement?:   string;
    defaultMaterializeDataset?: string;
    defaultStrictStatement?:    string;
    description?:               string;
    premiseMachines?:           string[];
    premisePropositions?:       string[];
    serverName?:                string;
    assignablePtr?:             string;
    citations?:                 Citation[];
    contributor?:               User;
    ephemeralPtr?:              string;
    indexable?:                 boolean;
    names?:                     string[];
    notPermanentPtr?:           string;
    permanentPtr?:              string;
    tags?:                      string[];
}

export interface Page {
    citations?:    Citation[];
    contributor?:  User;
    description?:  string;
    pageId?:       string;
    parentPageId?: string;
    sortHint?:     number;
    title?:        string;
}

export interface Project {
    abstractText?:    string;
    description?:     string;
    assignablePtr?:   string;
    citations?:       Citation[];
    contributor?:     User;
    ephemeralPtr?:    string;
    indexable?:       boolean;
    names?:           string[];
    notPermanentPtr?: string;
    permanentPtr?:    string;
    tags?:            string[];
}

export interface ProofRequest {
    fetchProof?:              boolean;
    fetchUpdatedProposition?: boolean;
    machinePtr?:              string;
    parseLenient?:            boolean;
    proposition?:             Proposition;
}

export interface Proposition {
    language?:          Language;
    lookupTerms?:       string[];
    metaLanguage?:      MetaLanguage;
    negativeStatement?: string;
    remarks?:           string;
    statement?:         string;
    assignablePtr?:     string;
    citations?:         Citation[];
    contributor?:       User;
    ephemeralPtr?:      string;
    indexable?:         boolean;
    names?:             string[];
    notPermanentPtr?:   string;
    permanentPtr?:      string;
    tags?:              string[];
}

export interface ProofResponse {
    existingPropositionPtr?: string;
    message?:                string;
    proofArguments?:         Argument[];
    proofPropositions?:      Proposition[];
    resolvedProposition?:    Proposition;
    truthValue?:             TruthValue;
}

export enum TruthValue {
    Contradiction = "CONTRADICTION",
    False = "FALSE",
    True = "TRUE",
    Unknown = "UNKNOWN",
}

export interface Resource {
    assignablePtr?:   string;
    citations?:       Citation[];
    contributor?:     User;
    ephemeralPtr?:    string;
    indexable?:       boolean;
    names?:           string[];
    notPermanentPtr?: string;
    permanentPtr?:    string;
    tags?:            string[];
}

export interface ResourceValidity {
    globalValidity?: ValidityUpdate;
    localValidity?:  ValidityUpdate;
}

export interface ValidityUpdate {
    justification?:  string;
    updater?:        User;
    validityStatus?: ValidityStatus;
}

export enum ValidityStatus {
    AutoApproved = "AUTO_APPROVED",
    MachineApproved = "MACHINE_APPROVED",
    MachineDenied = "MACHINE_DENIED",
    ManualApproved = "MANUAL_APPROVED",
    ManualDenied = "MANUAL_DENIED",
    RequestedApproval = "REQUESTED_APPROVAL",
    Unapproved = "UNAPPROVED",
    Unknown = "UNKNOWN",
}

export interface Term {
    alternatePhrases?: string[];
    definition?:       string;
    language?:         Language;
    lookupTerms?:      string[];
    metaLanguage?:     MetaLanguage;
    phrase?:           string;
    primitive?:        boolean;
    remarks?:          string;
    assignablePtr?:    string;
    citations?:        Citation[];
    contributor?:      User;
    ephemeralPtr?:     string;
    indexable?:        boolean;
    names?:            string[];
    notPermanentPtr?:  string;
    permanentPtr?:     string;
    tags?:             string[];
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toTypes(json: string): Types {
        return cast(JSON.parse(json), r("Types"));
    }

    public static typesToJson(value: Types): string {
        return JSON.stringify(uncast(value, r("Types")), null, 2);
    }

    public static toArgument(json: string): Argument {
        return cast(JSON.parse(json), r("Argument"));
    }

    public static argumentToJson(value: Argument): string {
        return JSON.stringify(uncast(value, r("Argument")), null, 2);
    }

    public static toCitation(json: string): Citation {
        return cast(JSON.parse(json), r("Citation"));
    }

    public static citationToJson(value: Citation): string {
        return JSON.stringify(uncast(value, r("Citation")), null, 2);
    }

    public static toUser(json: string): User {
        return cast(JSON.parse(json), r("User"));
    }

    public static userToJson(value: User): string {
        return JSON.stringify(uncast(value, r("User")), null, 2);
    }

    public static toArticle(json: string): Article {
        return cast(JSON.parse(json), r("Article"));
    }

    public static articleToJson(value: Article): string {
        return JSON.stringify(uncast(value, r("Article")), null, 2);
    }

    public static toAuthor(json: string): Author {
        return cast(JSON.parse(json), r("Author"));
    }

    public static authorToJson(value: Author): string {
        return JSON.stringify(uncast(value, r("Author")), null, 2);
    }

    public static toBeliefset(json: string): Beliefset {
        return cast(JSON.parse(json), r("Beliefset"));
    }

    public static beliefsetToJson(value: Beliefset): string {
        return JSON.stringify(uncast(value, r("Beliefset")), null, 2);
    }

    public static toDataset(json: string): Dataset {
        return cast(JSON.parse(json), r("Dataset"));
    }

    public static datasetToJson(value: Dataset): string {
        return JSON.stringify(uncast(value, r("Dataset")), null, 2);
    }

    public static toLicense(json: string): License {
        return cast(JSON.parse(json), r("License"));
    }

    public static licenseToJson(value: License): string {
        return JSON.stringify(uncast(value, r("License")), null, 2);
    }

    public static toMachine(json: string): Machine {
        return cast(JSON.parse(json), r("Machine"));
    }

    public static machineToJson(value: Machine): string {
        return JSON.stringify(uncast(value, r("Machine")), null, 2);
    }

    public static toPage(json: string): Page {
        return cast(JSON.parse(json), r("Page"));
    }

    public static pageToJson(value: Page): string {
        return JSON.stringify(uncast(value, r("Page")), null, 2);
    }

    public static toProject(json: string): Project {
        return cast(JSON.parse(json), r("Project"));
    }

    public static projectToJson(value: Project): string {
        return JSON.stringify(uncast(value, r("Project")), null, 2);
    }

    public static toProofRequest(json: string): ProofRequest {
        return cast(JSON.parse(json), r("ProofRequest"));
    }

    public static proofRequestToJson(value: ProofRequest): string {
        return JSON.stringify(uncast(value, r("ProofRequest")), null, 2);
    }

    public static toProposition(json: string): Proposition {
        return cast(JSON.parse(json), r("Proposition"));
    }

    public static propositionToJson(value: Proposition): string {
        return JSON.stringify(uncast(value, r("Proposition")), null, 2);
    }

    public static toProofResponse(json: string): ProofResponse {
        return cast(JSON.parse(json), r("ProofResponse"));
    }

    public static proofResponseToJson(value: ProofResponse): string {
        return JSON.stringify(uncast(value, r("ProofResponse")), null, 2);
    }

    public static toResource(json: string): Resource {
        return cast(JSON.parse(json), r("Resource"));
    }

    public static resourceToJson(value: Resource): string {
        return JSON.stringify(uncast(value, r("Resource")), null, 2);
    }

    public static toResourceValidity(json: string): ResourceValidity {
        return cast(JSON.parse(json), r("ResourceValidity"));
    }

    public static resourceValidityToJson(value: ResourceValidity): string {
        return JSON.stringify(uncast(value, r("ResourceValidity")), null, 2);
    }

    public static toValidityUpdate(json: string): ValidityUpdate {
        return cast(JSON.parse(json), r("ValidityUpdate"));
    }

    public static validityUpdateToJson(value: ValidityUpdate): string {
        return JSON.stringify(uncast(value, r("ValidityUpdate")), null, 2);
    }

    public static toTerm(json: string): Term {
        return cast(JSON.parse(json), r("Term"));
    }

    public static termToJson(value: Term): string {
        return JSON.stringify(uncast(value, r("Term")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [] as any[], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Types": o([
        { json: "argument", js: "argument", typ: u(undefined, r("Argument")) },
        { json: "article", js: "article", typ: u(undefined, r("Article")) },
        { json: "beliefset", js: "beliefset", typ: u(undefined, r("Beliefset")) },
        { json: "dataset", js: "dataset", typ: u(undefined, r("Dataset")) },
        { json: "machine", js: "machine", typ: u(undefined, r("Machine")) },
        { json: "page", js: "page", typ: u(undefined, r("Page")) },
        { json: "project", js: "project", typ: u(undefined, r("Project")) },
        { json: "proofRequest", js: "proofRequest", typ: u(undefined, r("ProofRequest")) },
        { json: "proofResponse", js: "proofResponse", typ: u(undefined, r("ProofResponse")) },
        { json: "proposition", js: "proposition", typ: u(undefined, r("Proposition")) },
        { json: "resource", js: "resource", typ: u(undefined, r("Resource")) },
        { json: "resourceValidity", js: "resourceValidity", typ: u(undefined, r("ResourceValidity")) },
        { json: "term", js: "term", typ: u(undefined, r("Term")) },
    ], "any"),
    "Argument": o([
        { json: "argumentText", js: "argumentText", typ: u(undefined, "") },
        { json: "conclusion", js: "conclusion", typ: u(undefined, "") },
        { json: "language", js: "language", typ: u(undefined, r("Language")) },
        { json: "lookupTerms", js: "lookupTerms", typ: u(undefined, a("")) },
        { json: "metaLanguage", js: "metaLanguage", typ: u(undefined, r("MetaLanguage")) },
        { json: "premiseMachine", js: "premiseMachine", typ: u(undefined, "") },
        { json: "premises", js: "premises", typ: u(undefined, a("")) },
        { json: "assignablePtr", js: "assignablePtr", typ: u(undefined, "") },
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "ephemeralPtr", js: "ephemeralPtr", typ: u(undefined, "") },
        { json: "indexable", js: "indexable", typ: u(undefined, true) },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "notPermanentPtr", js: "notPermanentPtr", typ: u(undefined, "") },
        { json: "permanentPtr", js: "permanentPtr", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], "any"),
    "Citation": o([
        { json: "textCitation", js: "textCitation", typ: u(undefined, "") },
    ], false),
    "User": o([
        { json: "handle", js: "handle", typ: u(undefined, "") },
        { json: "userEmail", js: "userEmail", typ: u(undefined, "") },
        { json: "userLink", js: "userLink", typ: u(undefined, "") },
        { json: "userName", js: "userName", typ: u(undefined, "") },
        { json: "userPic", js: "userPic", typ: u(undefined, "") },
    ], false),
    "Article": o([
        { json: "abstractText", js: "abstractText", typ: u(undefined, "") },
        { json: "authors", js: "authors", typ: u(undefined, a(r("Author"))) },
        { json: "beliefset", js: "beliefset", typ: u(undefined, "") },
        { json: "content", js: "content", typ: u(undefined, "") },
        { json: "title", js: "title", typ: u(undefined, "") },
        { json: "assignablePtr", js: "assignablePtr", typ: u(undefined, "") },
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "ephemeralPtr", js: "ephemeralPtr", typ: u(undefined, "") },
        { json: "indexable", js: "indexable", typ: u(undefined, true) },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "notPermanentPtr", js: "notPermanentPtr", typ: u(undefined, "") },
        { json: "permanentPtr", js: "permanentPtr", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], "any"),
    "Author": o([
        { json: "user", js: "user", typ: u(undefined, r("User")) },
    ], false),
    "Beliefset": o([
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "subBeliefsetPtrs", js: "subBeliefsetPtrs", typ: u(undefined, a("")) },
        { json: "unsupportedMachinePtrs", js: "unsupportedMachinePtrs", typ: u(undefined, a("")) },
        { json: "unsupportedPropositionPtrs", js: "unsupportedPropositionPtrs", typ: u(undefined, a("")) },
        { json: "assignablePtr", js: "assignablePtr", typ: u(undefined, "") },
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "ephemeralPtr", js: "ephemeralPtr", typ: u(undefined, "") },
        { json: "indexable", js: "indexable", typ: u(undefined, true) },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "notPermanentPtr", js: "notPermanentPtr", typ: u(undefined, "") },
        { json: "permanentPtr", js: "permanentPtr", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], "any"),
    "Dataset": o([
        { json: "bannerUrl", js: "bannerUrl", typ: u(undefined, "") },
        { json: "customHomeArticle", js: "customHomeArticle", typ: u(undefined, true) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "iconUrl", js: "iconUrl", typ: u(undefined, "") },
        { json: "licenses", js: "licenses", typ: u(undefined, a(r("License"))) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "openAcls", js: "openAcls", typ: u(undefined, a(r("AccessType"))) },
        { json: "subscribedDatasets", js: "subscribedDatasets", typ: u(undefined, a("")) },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], false),
    "License": o([
        { json: "licenseText", js: "licenseText", typ: u(undefined, "") },
        { json: "licenseType", js: "licenseType", typ: u(undefined, r("LicenseType")) },
        { json: "linkToLicense", js: "linkToLicense", typ: u(undefined, "") },
    ], false),
    "Machine": o([
        { json: "defaultLanguage", js: "defaultLanguage", typ: u(undefined, r("Language")) },
        { json: "defaultLenientStatement", js: "defaultLenientStatement", typ: u(undefined, "") },
        { json: "defaultMaterializeDataset", js: "defaultMaterializeDataset", typ: u(undefined, "") },
        { json: "defaultStrictStatement", js: "defaultStrictStatement", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "premiseMachines", js: "premiseMachines", typ: u(undefined, a("")) },
        { json: "premisePropositions", js: "premisePropositions", typ: u(undefined, a("")) },
        { json: "serverName", js: "serverName", typ: u(undefined, "") },
        { json: "assignablePtr", js: "assignablePtr", typ: u(undefined, "") },
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "ephemeralPtr", js: "ephemeralPtr", typ: u(undefined, "") },
        { json: "indexable", js: "indexable", typ: u(undefined, true) },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "notPermanentPtr", js: "notPermanentPtr", typ: u(undefined, "") },
        { json: "permanentPtr", js: "permanentPtr", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], "any"),
    "Page": o([
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "pageId", js: "pageId", typ: u(undefined, "") },
        { json: "parentPageId", js: "parentPageId", typ: u(undefined, "") },
        { json: "sortHint", js: "sortHint", typ: u(undefined, 3.14) },
        { json: "title", js: "title", typ: u(undefined, "") },
    ], "any"),
    "Project": o([
        { json: "abstractText", js: "abstractText", typ: u(undefined, "") },
        { json: "description", js: "description", typ: u(undefined, "") },
        { json: "assignablePtr", js: "assignablePtr", typ: u(undefined, "") },
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "ephemeralPtr", js: "ephemeralPtr", typ: u(undefined, "") },
        { json: "indexable", js: "indexable", typ: u(undefined, true) },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "notPermanentPtr", js: "notPermanentPtr", typ: u(undefined, "") },
        { json: "permanentPtr", js: "permanentPtr", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], "any"),
    "ProofRequest": o([
        { json: "fetchProof", js: "fetchProof", typ: u(undefined, true) },
        { json: "fetchUpdatedProposition", js: "fetchUpdatedProposition", typ: u(undefined, true) },
        { json: "machinePtr", js: "machinePtr", typ: u(undefined, "") },
        { json: "parseLenient", js: "parseLenient", typ: u(undefined, true) },
        { json: "proposition", js: "proposition", typ: u(undefined, r("Proposition")) },
    ], false),
    "Proposition": o([
        { json: "language", js: "language", typ: u(undefined, r("Language")) },
        { json: "lookupTerms", js: "lookupTerms", typ: u(undefined, a("")) },
        { json: "metaLanguage", js: "metaLanguage", typ: u(undefined, r("MetaLanguage")) },
        { json: "negativeStatement", js: "negativeStatement", typ: u(undefined, "") },
        { json: "remarks", js: "remarks", typ: u(undefined, "") },
        { json: "statement", js: "statement", typ: u(undefined, "") },
        { json: "assignablePtr", js: "assignablePtr", typ: u(undefined, "") },
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "ephemeralPtr", js: "ephemeralPtr", typ: u(undefined, "") },
        { json: "indexable", js: "indexable", typ: u(undefined, true) },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "notPermanentPtr", js: "notPermanentPtr", typ: u(undefined, "") },
        { json: "permanentPtr", js: "permanentPtr", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], "any"),
    "ProofResponse": o([
        { json: "existingPropositionPtr", js: "existingPropositionPtr", typ: u(undefined, "") },
        { json: "message", js: "message", typ: u(undefined, "") },
        { json: "proofArguments", js: "proofArguments", typ: u(undefined, a(r("Argument"))) },
        { json: "proofPropositions", js: "proofPropositions", typ: u(undefined, a(r("Proposition"))) },
        { json: "resolvedProposition", js: "resolvedProposition", typ: u(undefined, r("Proposition")) },
        { json: "truthValue", js: "truthValue", typ: u(undefined, r("TruthValue")) },
    ], false),
    "Resource": o([
        { json: "assignablePtr", js: "assignablePtr", typ: u(undefined, "") },
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "ephemeralPtr", js: "ephemeralPtr", typ: u(undefined, "") },
        { json: "indexable", js: "indexable", typ: u(undefined, true) },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "notPermanentPtr", js: "notPermanentPtr", typ: u(undefined, "") },
        { json: "permanentPtr", js: "permanentPtr", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], "any"),
    "ResourceValidity": o([
        { json: "globalValidity", js: "globalValidity", typ: u(undefined, r("ValidityUpdate")) },
        { json: "localValidity", js: "localValidity", typ: u(undefined, r("ValidityUpdate")) },
    ], false),
    "ValidityUpdate": o([
        { json: "justification", js: "justification", typ: u(undefined, "") },
        { json: "updater", js: "updater", typ: u(undefined, r("User")) },
        { json: "validityStatus", js: "validityStatus", typ: u(undefined, r("ValidityStatus")) },
    ], false),
    "Term": o([
        { json: "alternatePhrases", js: "alternatePhrases", typ: u(undefined, a("")) },
        { json: "definition", js: "definition", typ: u(undefined, "") },
        { json: "language", js: "language", typ: u(undefined, r("Language")) },
        { json: "lookupTerms", js: "lookupTerms", typ: u(undefined, a("")) },
        { json: "metaLanguage", js: "metaLanguage", typ: u(undefined, r("MetaLanguage")) },
        { json: "phrase", js: "phrase", typ: u(undefined, "") },
        { json: "primitive", js: "primitive", typ: u(undefined, true) },
        { json: "remarks", js: "remarks", typ: u(undefined, "") },
        { json: "assignablePtr", js: "assignablePtr", typ: u(undefined, "") },
        { json: "citations", js: "citations", typ: u(undefined, a(r("Citation"))) },
        { json: "contributor", js: "contributor", typ: u(undefined, r("User")) },
        { json: "ephemeralPtr", js: "ephemeralPtr", typ: u(undefined, "") },
        { json: "indexable", js: "indexable", typ: u(undefined, true) },
        { json: "names", js: "names", typ: u(undefined, a("")) },
        { json: "notPermanentPtr", js: "notPermanentPtr", typ: u(undefined, "") },
        { json: "permanentPtr", js: "permanentPtr", typ: u(undefined, "") },
        { json: "tags", js: "tags", typ: u(undefined, a("")) },
    ], "any"),
    "Language": [
        "INFORMAL",
        "METAMATH_SET_MM",
    ],
    "MetaLanguage": [
        "INFORMAL",
        "METAMATH",
    ],
    "LicenseType": [
        "CC0",
        "CC_BY",
        "CC_BY_NC",
        "CC_BY_NC_ND",
        "CC_BY_NC_SA",
        "CC_BY_ND",
        "CC_BY_SA",
        "GNU_GPL",
        "MIT",
        "UNKNOWN",
    ],
    "AccessType": [
        "ADD_NEW_DATA",
        "APPROVE_DATA_UPDATES",
        "APPROVE_USER_UPDATES",
        "APPROVE_VALIDITY",
        "COMMENT",
        "DATASET_PROPERTY_UPDATE",
        "EDIT_DELETE_DATA",
        "GLOBAL_APPROVE_VALIDITY",
        "MODERATE_COMMENTS",
        "READ_DATA",
        "SUGGEST_DATA_UPDATES",
        "SUGGEST_USER_UPDATES",
        "UNKNOWN",
        "UPDATE_USER",
    ],
    "TruthValue": [
        "CONTRADICTION",
        "FALSE",
        "TRUE",
        "UNKNOWN",
    ],
    "ValidityStatus": [
        "AUTO_APPROVED",
        "MACHINE_APPROVED",
        "MACHINE_DENIED",
        "MANUAL_APPROVED",
        "MANUAL_DENIED",
        "REQUESTED_APPROVAL",
        "UNAPPROVED",
        "UNKNOWN",
    ],
};
