import React from "react";
import Link from "@utils/ActiveLink";

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
        <Link href="/phone" activeClassName="active">
          <a className="nav-link">Телефония</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/design" activeClassName="active">
          <a className="nav-link">Дизайн</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/audit" activeClassName="active">
          <a className="nav-link">Аудит</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/repair" activeClassName="active">
          <a className="nav-link">Ремонт</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/contact" activeClassName="active">
          <a className="nav-link">Контакты</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarUl;
