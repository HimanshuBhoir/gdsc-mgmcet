import React from 'react';
import styled, {keyframes} from 'styled-components';
import Card from './Card';
import {ReactComponent as ChromeIcon} from '../../../../../assets/images/icons/chrome.svg';
import { CoreTeamData } from '../../../../../constants/Team/data';

const cardData = [
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  { id: 1, text: 'Card 1' },
  { id: 2, text: 'Card 2' },
  { id: 3, text: 'Card 3' },
  // Add more card objects as needed
];

function Core() {

  return (
    <Container data-scroll>
      <TopSection>
        <LetterContainer data-scroll data-scroll-speed="12">
          <LetterC color="red"> C </LetterC>
        </LetterContainer>
         <LetterContainer data-scroll data-scroll-speed="12">
          <LetterO color="blue"> O </LetterO>
        </LetterContainer>
        <LetterContainer data-scroll data-scroll-speed="12">
          <LetterR color="green"> R </LetterR>
        </LetterContainer>
        <LetterContainer data-scroll data-scroll-speed="12">
          <LetterE color="yellow"> E </LetterE>
        </LetterContainer>
      </TopSection>
      <BottomSection>
        <CardGrid>
          {CoreTeamData.map((core) => (
            <Card key={core.id} name={core.name} profile={core.profile} position={core.position} department={core.department} gender={core.gender} linkedin={core.linkedin} />
          ))}
        </CardGrid>
      </BottomSection>
    </Container>
  );
}

export default Core;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 250vh;
  width: 100vw;
`;

const TopSection = styled.div`
  flex: 1; /* Take up the first 100vh */
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.mobile`
    font-size: 5px;
  `}
`;

const BottomSection = styled.div`
  flex: 2; /* Take up the next 200vh */
  display: flex;
  justify-content: center;
  aligh-items: center;
  width: 100%;
`;

const LetterContainer = styled.div`
  padding: 5px;
  margin: 10px;
`;

const LetterC = styled.div`
font-size: 15em;
color: ${(props) => props.color || 'red'};
display: inline-block;
font-weight: 1000;
position: relative; /* Add relative positioning */

&:hover {
  /* Apply the flicker animation on hover */
  text-shadow: -7px -7px 0 ${(props) => props.color || 'red'},
               7px -7px 0 ${(props) => props.color || 'red'},
               -7px 7px 0 ${(props) => props.color || 'red'},
               7px 7px 0 ${(props) => props.color || 'red'};
  color: white;
}
`;

const LetterO = styled.div`
  font-size: 15em;
  color: ${(props) => props.color || 'red'};
  transition: text-shadow 0.3s;
  display: inline-block;
  font-weight: 1000;

  &:hover {
    text-shadow: -7px -7px 0 ${(props) => props.color || 'red'},
                 7px -7px 0 ${(props) => props.color || 'red'},
                 -7px 7px 0 ${(props) => props.color || 'red'},
                 7px 7px 0 ${(props) => props.color || 'red'};
    color: white;
  }
`;

const LetterR = styled.div`
  font-size: 15em;
  color: ${(props) => props.color || 'red'};
  transition: text-shadow 0.3s;
  display: inline-block;
  font-weight: 1000;

  &:hover {
    text-shadow: -7px -7px 0 ${(props) => props.color || 'red'},
                 7px -7px 0 ${(props) => props.color || 'red'},
                 -7px 7px 0 ${(props) => props.color || 'red'},
                 7px 7px 0 ${(props) => props.color || 'red'};
    color: white;
  }
`;

const LetterE = styled.div`
  font-size: 15em;
  color: ${(props) => props.color || 'red'};
  transition: text-shadow 0.3s;
  display: inline-block;
  font-weight: 1000;

  &:hover {
    text-shadow: -7px -7px 0 ${(props) => props.color || 'red'},
                 7px -7px 0 ${(props) => props.color || 'red'},
                 -7px 7px 0 ${(props) => props.color || 'red'},
                 7px 7px 0 ${(props) => props.color || 'red'};
    color: white;
  }
`;

const CardGrid = styled.div`
  margin: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Show 4 cards in a row by default */
  gap: 15px; /* Adjust the gap between cards as needed */

  ${({ theme }) => theme.mobile`
    grid-template-columns: 1fr;
  `}

  ${({ theme }) => theme.tablet`
    grid-template-columns: repeat(2, 1fr); /* Show 2 cards in a row for tablets */
  `}
`;