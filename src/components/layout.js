/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";

import "./layout.css";
import Img from "gatsby-image";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import { WHITE } from "../globalStyles";

const MobileNav = styled.div`
  background: black;
  background-color: black;
  display: flex;
  align-items: center;
  height: 18vh;
`;

const Hamburger = styled.a`
  width: 50px;
  height: 50px;
  flex-grow: 1;
`;

const Logo = styled.span`
  height: 100px;
  flex-grow: 2;
  display: flex;
  justify-content: center;
`;

const MenuOverlay = styled.div`
  height: 82vh;
  background: black;
  color: ${WHITE};
  font-family: lo-res-12;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  width: 100vw;
`;

const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  padding-bottom: 30px;
  text-decoration: none;
  font-family: "tk-lores-12-n7";
  color: ${WHITE} !important;
`;

const DesktopNav = styled.div`
  background-color: black;
  display: flex;
`;

const PagesGroup = styled.span`
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 200px;
`;

const StyledLinkDesktop = styled(Link)`
  display: inline-block;
  color: ${WHITE};
  margin-left: 48px;
  text-decoration: none;
  font-family: "tk-lores-12-n7";
  color: ${WHITE} !important;
`;

const LogoDesktop = styled(Logo)`
  display: block;
  margin: 0 auto;
  flex-grow: 2;
`;

const StyledImg = styled(Img)`
  display: flex !important;
  margin: 0 auto;
`;
const Extra = styled.span`
  flex-grow: 1;
  width: 50px;
`;

const ExtraDesktop = styled.span`
  flex-grow: 1;
  width: 200px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      xButton: file(relativePath: { eq: "STREETFITS_components/x-button.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hamburger: file(relativePath: { eq: "STREETFITS_components/hamburger.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logo: file(relativePath: { eq: "STREETFITS_components/logo.png" }) {
        childImageSharp {
          fixed(height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [showMenu, setShowMenu] = useState(false);
  const hamburgerIcon = showMenu ? data.xButton.childImageSharp.fixed : data.hamburger.childImageSharp.fixed;

  const Nav = () => {
    if (isMobile) {
      return (
        <div>
          <MobileNav>
            <Hamburger onClick={() => setShowMenu(!showMenu)}>
              <Img fixed={hamburgerIcon} />
            </Hamburger>
            <Logo>
              <Img fixed={data.logo.childImageSharp.fixed} />
            </Logo>
            <Extra></Extra>
          </MobileNav>

          {showMenu && (
            <MenuOverlay>
              <StyledLink to="/play">PLAY</StyledLink>
              <StyledLink to="/themes">THEMES</StyledLink>
              <StyledLink to="/about">ABOUT</StyledLink>
            </MenuOverlay>
          )}
        </div>
      );
    } else {
      return (
        <DesktopNav>
          <PagesGroup>
            <StyledLinkDesktop to="/play">PLAY</StyledLinkDesktop>
            <StyledLinkDesktop to="/themes">THEMES</StyledLinkDesktop>
            <StyledLinkDesktop to="/about">ABOUT</StyledLinkDesktop>
          </PagesGroup>
          <LogoDesktop>
            <StyledImg fixed={data.logo.childImageSharp.fixed} />
          </LogoDesktop>
          <ExtraDesktop></ExtraDesktop>
        </DesktopNav>
      );
    }
  };

  return (
    <>
      <Nav></Nav>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {!showMenu && <main>{children}</main>}
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
