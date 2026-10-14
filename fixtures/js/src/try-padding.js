export function parsePort(rawPort) {
    const fallbackPort = 80;

    console.info(rawPort);
    try {
        return Number.parseInt(rawPort, 10);
    } catch {
        return fallbackPort;
    }
}

export function parseFallback() {

    try {
        return 0;
    } catch {
        return 1;
    }
}
