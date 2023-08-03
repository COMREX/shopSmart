import { DropdownWrapper, UList } from "./listDropdown.styles";

const ListDropdown = () => {
  return (
    <DropdownWrapper>
      <UList>
        <li>Delete</li>
        <li>Rename</li>
        <li>Change</li>
      </UList>
    </DropdownWrapper>
  );
};

export default ListDropdown;
