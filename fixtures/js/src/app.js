const currentHref = globalThis.location.href;

export function buildMessage(userName) {
    return `Hello ${userName} from ${currentHref}`;
}

export function parsePort(rawPort) {
    const fallbackPort = 80;

    try {
        return Number.parseInt(rawPort, 10);
    } catch {
        return fallbackPort;
    }
}
