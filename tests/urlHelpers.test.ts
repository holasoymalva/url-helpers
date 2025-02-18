import { getQueryParams, addQueryParam, removeQueryParam, normalizeUrl } from '../src/index';

test('getQueryParams should extract query parameters', () => {
    const url = "https://example.com?page=1&sort=asc";
    expect(getQueryParams(url)).toEqual({ page: "1", sort: "asc" });
});

test('addQueryParam should add a parameter to a URL', () => {
    const url = "https://example.com";
    expect(addQueryParam(url, "lang", "en")).toBe("https://example.com/?lang=en");
});

test('removeQueryParam should remove a parameter from a URL', () => {
    const url = "https://example.com?page=1&sort=asc";
    expect(removeQueryParam(url, "sort")).toBe("https://example.com/?page=1");
});

test('normalizeUrl should return a valid URL', () => {
    const url = "https://example.com/test?query=123";
    expect(normalizeUrl(url)).toBe("https://example.com/test?query=123");
});
