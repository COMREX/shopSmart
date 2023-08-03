import { Link } from "react-router-dom";
import StarsGenerator from "../stars-generator/starsGenerator";
import {
  BackgroundWrapper,
  ContentContainer,
  ImageContainer,
  LiftedGridWrapper,
} from "./liftedGridItem.styles";

const LiftedGridItem = ({
  siteLink,
  target,
  cover,
  heading,
  paragraph,
  numberOfStars,
}) => {
  return (
    <Link to={siteLink} target={target}>
      <LiftedGridWrapper>
        <BackgroundWrapper>
          <ContentContainer>
            <ImageContainer cover={cover} />
            <h4>{heading}</h4>
            <p>{paragraph}</p>
            <StarsGenerator numberOfStars={numberOfStars} />
          </ContentContainer>
        </BackgroundWrapper>
      </LiftedGridWrapper>
    </Link>
  );
};

export default LiftedGridItem;
