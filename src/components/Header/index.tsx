import logoImg from "/assets/logo.svg";

import "../../styles/header.scss";

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="rocket logo" />
    </header>
  );
}
