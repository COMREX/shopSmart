import {
  CoverImageWrapper,
  DescriptionWrapper,
  GapCotainer,
  ListItemWrapper,
  Para,
} from "./listItem.styles";
import StarsGenerator from "../stars-generator/starsGenerator";
import ListDropdown from "../list-dropdown/listDropdown";

const ListItem = ({
  id,
  cover,
  heading,
  paragraph,
  date,
  numberOfStars,
  svgIcon,
  handleClick,
  handleBlur,
  showDropdown,
}) => {
  return (
    <ListItemWrapper onBlur={handleBlur}>
      <GapCotainer>
        <CoverImageWrapper cover={cover} />
        <DescriptionWrapper>
          <h3>{heading}</h3>
          <Para>{paragraph}</Para>
          <p>{date}</p>
          <StarsGenerator numberOfStars={numberOfStars} />
        </DescriptionWrapper>
      </GapCotainer>

      <img
        tabIndex={0}
        onClick={() => handleClick(id)}
        src={svgIcon}
        alt="menu icon"
      />
      {showDropdown && <ListDropdown />}
    </ListItemWrapper>
  );
};

export default ListItem;
