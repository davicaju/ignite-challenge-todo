import logoImg from "../../../public/assets/logo.svg";
import { useTodo } from "../../hooks/useTodo";

import "../../styles/header.scss";

export function Header() {
  const { value } = useTodo();

  console.log(value);
  return (
    <header>
      <img src={logoImg} alt="rocket logo" />
    </header>
  );
}
