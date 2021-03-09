import * as React from "react";
import styled from "styled-components";
import { WHITE, GOLD, device } from "../globalStyles";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";

const MainContainer = styled.div`
  background-color: pink;

  ${device.mobile} {
    background-color: black;
    padding: 30px 50px;
  }
`;

const ScoreSection = styled.div`
  display: flex;
  flex-direction: row;

  ${device.mobile} {
    justify-content: space-between;
    margin-bottom: 48px;
  }
`;

const Score = styled.span`
  font-family: "tk-lores-9-wide-n7";
  font-size: 14px;
`;

const ScoreTitle = styled.span`
  color: ${GOLD};
  display: block;
`;

const ScoreNumber = styled.span`
  color: ${WHITE};
  display: block;
`;

const Logo = styled.span`
  width: 300px;
`;

const StepsContainer = styled.div`
  color: ${WHITE};
  font-family: lo-res-12-bold;
`;

const StepWrapper = styled.div``;

const Step = styled.span`
  padding-bottom: 5px;
`;

const PlayButton = styled.button``;

const Index = ({ data }) => {
  return (
    <Layout>
      <MainContainer>
        <ScoreSection>
          <Score>
            <ScoreTitle>SCORE</ScoreTitle>
            <ScoreNumber>0000001</ScoreNumber>
          </Score>
          <Score>
            <ScoreTitle>HIGH SCORE</ScoreTitle>
            <ScoreNumber>0000001</ScoreNumber>
          </Score>
        </ScoreSection>
        <Logo>
          <Img fixed={data.logo.childImageSharp.fixed} />
        </Logo>
        <StepsContainer>
          <Step>HOW TO PLAY</Step>
          <StepWrapper>
            <Step>001 CHOOSE YOUR THEME</Step>
            <Step>002 PICK YOUR STYLE</Step>
            <Step>003 CUSTOMIZE YOUR PLAYER</Step>
            <Step>004 GENERATE OUTCOME</Step>
            <Step>005 PLAY AGAIN</Step>
          </StepWrapper>
          <Step>PRESS PLAY TO START</Step>
        </StepsContainer>
        <PlayButton></PlayButton>
      </MainContainer>
    </Layout>
  );
};

export default Index;

export const IndexPageQuery = graphql`
  query indexPageQuery {
    logo: file(relativePath: { eq: "STREETFITS_components/logo.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
