import {
  CoverImageWrapper,
  DescriptionWrapper,
  DesktopIcons,
  GapCotainer,
  ListItemWrapper,
  MobileIcon,
  Para,
} from "./listItem.styles";
import StarsGenerator from "../stars-generator/starsGenerator";
import ListDropdown from "../list-dropdown/listDropdown";
import DeleteIcon from "../../../Assets/svgs/delete-icon.svg";
import EditIcon from "../../../Assets/svgs/edit.svg";

const ListItem = ({
  id,
  cover,
  heading,
  paragraph,
  date,
  numberOfStars,
  svgIcon,
  handleClick,
  handleDelete,
  handleBlur,
  showDropdown,
}) => {
  return (
    <>
      <ListItemWrapper>
        <GapCotainer>
          <CoverImageWrapper cover={cover} />
          <DescriptionWrapper>
            <h3>{heading}</h3>
            <Para>{paragraph}</Para>
            <p>{date}</p>
            <StarsGenerator numberOfStars={numberOfStars} />
          </DescriptionWrapper>
        </GapCotainer>

        <DesktopIcons>
          <img src={EditIcon} alt="edit" />
          <img src={DeleteIcon} alt="delete" onClick={() => handleDelete(id)} />
        </DesktopIcons>

        <MobileIcon
          tabIndex={0}
          onClick={() => handleClick(id)}
          src={svgIcon}
          alt="menu icon"
        />
        {showDropdown && <ListDropdown handleDelete={handleDelete} id={id} />}
      </ListItemWrapper>
    </>
  );
};

export default ListItem;
