export const isObject = (value) => {
    // Type guard using type assertion
    return typeof value === "object" && value !== null && !Array.isArray(value);
};
