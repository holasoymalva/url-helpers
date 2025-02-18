
# 🌍 URL Helpers  
**A lightweight, high-performance URL utility library for modern web development.**  

[![npm version](https://img.shields.io/npm/v/url-helpers?color=blue&style=flat-square)](https://www.npmjs.com/package/url-helpers)
[![Build Status](https://img.shields.io/github/actions/workflow/status/holasoymalva/url-helpers/test.yml?label=build&logo=github&style=flat-square)](https://github.com/holasoymalva/url-helpers/actions)
[![MIT License](https://img.shields.io/github/license/holasoymalva/url-helpers?style=flat-square)](LICENSE)

---

### 🚀 **Why `url-helpers`?**  
URLs are at the core of every web application. `url-helpers` provides an **elegant, minimal, and efficient** API to manipulate URLs, making your code cleaner and more readable.  

Forget about messy string manipulations – this library leverages the **modern `URL` API** while offering intuitive helpers for query parameters, normalization, and modification.  

🔹 **Zero dependencies**  
🔹 **Built for TypeScript & JavaScript**  
🔹 **Fully tested**  
🔹 **Small & fast**  

---

## 📦 **Installation**  
```bash
npm install url-helpers
# or
yarn add url-helpers
```

---

## 🔧 **Usage**  

```ts
import { getQueryParams, addQueryParam, removeQueryParam, normalizeUrl } from "url-helpers";

const url = "https://example.com?page=1&sort=asc";

// Extract query parameters
console.log(getQueryParams(url));  
// Output: { page: "1", sort: "asc" }

// Add a query parameter
console.log(addQueryParam(url, "lang", "en"));  
// Output: "https://example.com?page=1&sort=asc&lang=en"

// Remove a query parameter
console.log(removeQueryParam(url, "sort"));  
// Output: "https://example.com?page=1"

// Normalize URLs
console.log(normalizeUrl("https://example.com/test?query=123#section"));  
// Output: "https://example.com/test?query=123#section"
```

---

## ⚙️ **API Reference**  

### `getQueryParams(url: string): Record<string, string>`  
Extracts query parameters from a URL as a key-value object.  

```ts
getQueryParams("https://example.com?foo=bar&baz=qux");
// Returns: { foo: "bar", baz: "qux" }
```

### `addQueryParam(url: string, key: string, value: string): string`  
Adds a query parameter to the URL.  

```ts
addQueryParam("https://example.com", "token", "123");
// Returns: "https://example.com/?token=123"
```

### `removeQueryParam(url: string, key: string): string`  
Removes a query parameter from the URL.  

```ts
removeQueryParam("https://example.com?page=1&lang=en", "lang");
// Returns: "https://example.com?page=1"
```

### `normalizeUrl(url: string): string`  
Ensures a valid, standardized URL.  

```ts
normalizeUrl("https://example.com/test?foo=bar#hash");
// Returns: "https://example.com/test?foo=bar#hash"
```

---

## 🛠️ **How It Works**  
Under the hood, `url-helpers` uses the **native `URL` API** for maximum efficiency and compatibility. Unlike traditional regex-based solutions, it ensures:  
✅ **Correct parsing of query parameters**  
✅ **Support for relative & absolute URLs**  
✅ **Automatic encoding**  

---

## ✅ **Tests & Reliability**  
This library is **100% test-covered** using Jest. Run tests locally:  

```bash
npm test
```

---

## 📜 **License**  
`url-helpers` is licensed under the **MIT License** – free to use, modify, and distribute.  

---

## 🌟 **Contribute & Support**  
We’re just getting started! 🚀 If you find this library useful, consider:  
- ⭐ **Starring the repo**: [https://github.com/holasoymalva/url-helpers](https://github.com/holasoymalva/url-helpers)  
- 📢 **Sharing it with your network**  
- 🛠️ **Contributing!** Feel free to open an issue or PR.  

👨‍💻 Created with ❤️ by [@holasoymalva](https://github.com/holasoymalva)  
