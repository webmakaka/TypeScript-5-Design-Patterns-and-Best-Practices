import fetch from "node-fetch"

const pullFromApi = new Promise(async (resolve, reject) => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => resolve(json))
})

;(async () => {
  await pullFromApi
})()

function delay(ms: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
function failAfter(ms: number = 1000) {
  return new Promise((_, reject) => setTimeout(reject, ms))
}
const races = Promise.race([delay(1000), failAfter(500)])
const all = Promise.all([delay(1000), failAfter(1500)])
;(async () => {
  races
    .then((value) => {
      console.log(value)
    })
    .catch((_) => {
      console.log("Error")
    })
})()
;(async () => {
  all
    .then((value) => {
      console.log(value)
    })
    .catch((_) => {
      console.log("Error")
    })
})()

const settled = Promise.allSettled([delay(1000), failAfter(500)])
;(async () => {
  settled
    .then((value) => {
      console.log(value)
    })
    .catch((_) => {
      console.log("Error")
    })
})()
