import { motion } from "framer-motion";
import styled from "styled-components";

function Slide({ content, index, onFocus }) {
  const onClickSlide = () => {
    onFocus(index);
  };

  return (
    <SlideContainer
      onClick={onClickSlide}
      layout
      layoutId={index + ""}
      whileHover={{
        borderRadius: 0,
        transtiion: {
          duration: 0.1,
        },
      }}
      whileInView={{
        transform: "none",
      }}
    >
      {(content.active) ? <Badge>ongoing</Badge> : null}
      {/* <Badge>ongoing</Badge> */}
      <Image src={require(`/public/assets/events-poster/${content.logo}`)} />
      {/* <ImageWrapper>
        <ImageBackground>
        </ImageBackground>
      </ImageWrapper> */}
      <DescWrapper>
        {/* <Index>{index + 1}</Index> */}
        <Name>{content.name}</Name>
        <Description>
          {content.description}
        </Description>
      </DescWrapper>
    </SlideContainer>
  );
}

export default Slide;

const SlideContainer = styled(motion.div)`
  width: 20vw;
  height: 450px;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  /* align-items: center; */
  border-radius: 10px;
  background-color: black;
  overflow: hidden;
  cursor: pointer;
  padding: 15px;

  position: relative;

  ${({ theme }) => theme.tablet`
    width: 80vw;
  `}
`;

const Badge = styled.div`
  position: absolute;
  top: 25px;
  right: -35px;
  padding: 3px;
  transform: rotate(45deg);
  transform-origin: center center;
  text-align: center;
  width: 150px;
  background-color: #E63131;
  color: ${(props) => props.theme.backgroundColor.white};
`

const ImageWrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  /* justify-content: center;
  align-items: center; */
`;

const ImageBackground = styled.div`
  /* width: 175px;
  height: 175px; */
  width: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center;

  border-radius: 25px; */

  background-color: ${(props) => props.theme.backgroundColor.white};
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 7px;
`;

const DescWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  /* padding: 3% 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4vw; */
`;

const Index = styled.span`
  font-size: 64px;

  color: ${(props) => props.theme.backgroundColor.white};
`;

const Name = styled.span`
  display: inline-block;
  font-size: 26px;
  font-weight: bold;
  line-height: 1.2;
  color: ${(props) => props.theme.backgroundColor.white};
  /* white-space: nowrap; */
  text-overflow: ellipsis;

  margin-bottom: 10px;

  ${({ theme }) => theme.mobile`
    font-size: 24px;
  `}
`;

const Description = styled.span`
  display: -webkit-box;
  text-align: justify;
  margin-bottom: 10px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${(props) => props.theme.backgroundColor.white};
`;
