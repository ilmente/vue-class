export interface NavigationItem {
    title: string;
    subtitle: string;
    domain: string;
    domainLabel: string;
    url: string;
    isExternal: boolean;
    children?: NavigationItem[];
}

export interface Navigation {
    sitemap: NavigationItem[];
    current: NavigationItem;
}
