import {
  Wrapper,
  SearchInputStyled,
  SearchIconStyled,
} from "./searchInput.styles";
import Svg1 from "../../../Assets/svgs/search-icon.svg";

const SearchInput = ({ placeholder, marginBottom, value, onChange }) => {
  return (
    <Wrapper style={{ marginBottom }}>
      <SearchIconStyled src={Svg1} alt="avg"></SearchIconStyled>
      <SearchInputStyled
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export default SearchInput;
