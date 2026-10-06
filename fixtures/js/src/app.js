const currentHref = globalThis.location.href;

export function buildMessage(userName) {
    return `Hello ${userName} from ${currentHref}`;
}
