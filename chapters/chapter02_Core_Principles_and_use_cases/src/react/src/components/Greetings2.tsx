import React from "react"

interface GreetingProps {
  name: string
}

const Greeting2 = (props: GreetingProps) => {
  const { name = "World" } = props // Destructuring for concise access
  return <h1>Hello, {name}!</h1>
}

export default Greeting2
