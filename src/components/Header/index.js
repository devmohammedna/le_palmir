import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "../Image";
import Topnav from "./topnav";
import { ReactComponent as Adress } from "../assets/adress.svg";
const DataHeader = [
  { title: "Categories", path: "/", icon: null },
  { title: "About us", path: "/", icon: null },
  { title: "Shops", path: "/", icon: null },
  { title: "Gift Cards", path: "/", icon: null },
];
const DataHeader2 = [
  { title: "Shops", path: "/", icon: <Adress /> },
  { title: "About us", path: "/", icon: null },
  { title: "Shops", path: "/", icon: null },
  { title: "Gift Cards", path: "/", icon: null },
];

export default function Header() {
  return (
    <div>
      <Topnav />
      <Navbar className="navBar" variant="light">
        <Container>
          <Nav>
            {DataHeader.map((item, index) => (
              <Nav.Link key={index} href={item.path}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
          <Image src="/static/logo.png" alt="logo" />
          <Nav>
            {DataHeader2.map((item, index) => (
              <Nav.Link key={index} href={item.path}>
                <span style={{ marginRight: "5px" }}>{item.icon}</span>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
