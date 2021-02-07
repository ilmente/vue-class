import { sessions, labels } from '@src/config';
import { Domain } from '@typings/Domain';
import { Session, SessionItem } from '@typings/Session';

export interface Resource extends SessionItem {
    name: string;
    url: string;
    domain: Domain,
    domainLabel: string,
    external: boolean;
}

export type ResourceMap = {
    [key in Domain]: {
        label: string;
        resources: Resource[];
    };
}

function getResourcesByDomain(domain: Domain): Resource[] {
    return sessions
        .filter((session: Session) => Boolean(session[domain].url))
        .map((session: Session): Resource => ({
            name: session[domain].name || session.name,
            url: session[domain].url,
            domain,
            domainLabel: labels[domain],
            external: domain === Domain.docs,
        }));
}

const docsResources: Resource[] = getResourcesByDomain(Domain.docs);
const codeResources: Resource[] = getResourcesByDomain(Domain.code);
const exerciseResources: Resource[] = getResourcesByDomain(Domain.exercise);

const resources: Resource[] = [
    ...docsResources,
    ...codeResources,
    ...exerciseResources,
];

export function getResourceMap(): ResourceMap {
    return {
        [Domain.docs]: { 
            label: labels[Domain.docs],
            resources: docsResources,
        },
        [Domain.code]: {
            label: labels[Domain.code],
            resources: codeResources,
        },
        [Domain.exercise]: {
            label: labels[Domain.exercise],
            resources: exerciseResources,
        }
    }
}

export function getResourceFromUrl(url: string): Resource | null {
    return resources
        .find((resource: Resource) => resource.url === url) || null;
}
