export const isObject = (o) => {
  return o === Object(o) && !Array.isArray(o) && typeof o !== "function"
}
