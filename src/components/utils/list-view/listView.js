import { ListViewWrapper } from "./listView.styles";

const ListView = ({ children, height }) => {
  return <ListViewWrapper height={height}>{children}</ListViewWrapper>;
};

export default ListView;
