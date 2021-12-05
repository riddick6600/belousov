import React from "react";
import Link from "@/utils/ActiveLink";

const NavbarUl = () => {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link href="/development" activeClassName="active">
          <a className="nav-link">Разработка</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/hosting" activeClassName="active">
          <a className="nav-link">Хостинг</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/design" activeClassName="active">
          <a className="nav-link">Дизайн</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/repair" activeClassName="active">
          <a className="nav-link">Ремонт</a>
        </Link>
      </li>
      Дизайн Аудит Телефония Контакты
    </ul>
  );
};

export default NavbarUl;
