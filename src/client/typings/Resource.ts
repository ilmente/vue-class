export interface ResourceMeta {
    title: string;
    subtitle: string;
}

export interface Resource {
    domain: string;
    domainLabel: string;
    path: string;
    fullPath: string;
    name: string;
    entry: string;
    url: string;
    meta: ResourceMeta,
    data: Record<string, unknown>;
    isMarkdown: boolean;
    content: string;
}
