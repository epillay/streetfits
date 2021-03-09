import * as React from 'react'
import styled from 'styled-components'
import { WHITE, GOLD } from '../globalStyles'

const MainContainer = styled.div`
`

const ScoreSection = styled.div`
    display: flex;
    flex-direction: row;
`

const Score = styled.span`
    font-family: lo-res-9;
    font-size: 14px;
`

const ScoreTitle = styled.span`
    color: ${GOLD};
`

const ScoreNumber = styled.span`
    color: ${WHITE};
`

const Logo = styled.span``

const StepsContainer = styled.div`
    color: ${WHITE};
    font-family: lo-res-12-bold;
`

const StepWrapper = styled.div``

const Step = styled.span`
    padding-bottom: 5px;
`

const PlayButton = styled.button`
`

const Index = () => {
    return (
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
            <Logo></Logo>
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
    )
}

export default Index


