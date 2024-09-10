function factorial(n: number): number {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(5))

interface TreeNode {
  value: number
  left?: TreeNode
  right?: TreeNode
}

function inOrder(node: TreeNode | undefined): number[] {
  if (!node) {
    return []
  }
  return [...inOrder(node.left), node.value, ...inOrder(node.right)]
}

const tree: TreeNode = {
  value: 1,
  left: { value: 2, left: { value: 4 }, right: { value: 5 } },
  right: { value: 3, left: { value: 6 }, right: { value: 7 } },
}

console.log(inOrder(tree))

function factorialTail(n: number, accumulator: number = 1): number {
  if (n <= 1) return accumulator
  return factorialTail(n - 1, n * accumulator)
}

console.log(factorialTail(5)) // Output: 120
