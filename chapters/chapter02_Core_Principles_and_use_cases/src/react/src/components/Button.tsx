import { PropsWithChildren } from "react"

export type ButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>
}
export default Button
