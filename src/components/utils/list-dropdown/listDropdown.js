import { DropdownWrapper, UList } from "./listDropdown.styles";

const ListDropdown = ({ handleDelete, id }) => {
  return (
    <DropdownWrapper>
      <UList>
        <li onClick={() => handleDelete(id)}>Delete</li>
        <li>Rename</li>
        <li>Change</li>
      </UList>
    </DropdownWrapper>
  );
};

export default ListDropdown;
