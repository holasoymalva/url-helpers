/**
 * Extracts query parameters from a URL as a key-value object.
 * @param url - The URL string to parse.
 * @returns An object with query parameters as key-value pairs.
 */
export function getQueryParams(url: string): Record<string, string> {
    const params = new URL(url).searchParams;
    return Object.fromEntries(params.entries());
}

/**
 * Adds a query parameter to a URL.
 * @param url - The base URL.
 * @param key - The parameter name.
 * @param value - The parameter value.
 * @returns The updated URL string.
 */
export function addQueryParam(url: string, key: string, value: string): string {
    const urlObj = new URL(url);
    urlObj.searchParams.set(key, value);
    return urlObj.toString();
}

/**
 * Removes a query parameter from a URL.
 * @param url - The URL string.
 * @param key - The parameter name to remove.
 * @returns The updated URL string.
 */
export function removeQueryParam(url: string, key: string): string {
    const urlObj = new URL(url);
    urlObj.searchParams.delete(key);
    return urlObj.toString();
}

/**
 * Normalizes a URL by ensuring it is properly formatted.
 * @param url - The URL string to normalize.
 * @returns The normalized URL string.
 */
export function normalizeUrl(url: string): string {
    return new URL(url).toString();
}
