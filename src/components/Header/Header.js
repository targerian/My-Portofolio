import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size='3rem' /> <span> M-Ali</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='/My-Portofolio/#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/My-Portofolio/#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='/My-Portofolio/#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/targerian'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/Goodguycozmo/'>
        <AiFillFacebook size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/muhammed.ali/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
