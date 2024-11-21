import React from "react"

interface GreetingProps {
  name: string
}

const Greeting: React.FC<GreetingProps> = ({ name = "World" }) => {
  return <h4>Hello, {name}!</h4>
}

export default Greeting
