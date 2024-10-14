// interface KeyValuePair<T, K> {
//     key: T;
//     value: K;
// }
interface KeyValuePair<TKey, TValue> {
  key: TKey
  value: TValue
}
type WithColor = { color: string }
type Config<T extends WithColor, U = {}> = {
  ctx?: T
  data?: U
}
const t: Config<WithColor> = {
  ctx: { color: "red" },
  data: {},
}
if (t.ctx) {
  t.ctx.color = "blue"
}

function testNoInfer<T extends string>(noInferArgs: T, args: T[]): boolean {
  return args.includes(noInferArgs)
}

testNoInfer("somewhre", ["lets", "go"])

testNoInfer("people", ["people", "help"])

function find<T extends string>(heyStack: T[], needle: T): number {
  return heyStack.indexOf(needle)
}
// Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"'
console.log(find(["a", "b", "c"], "d")) 
