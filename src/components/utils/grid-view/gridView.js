import { GridContainer } from "./gridView.styles";

const GridView = ({ children, height }) => {
  return <GridContainer height={height}>{children}</GridContainer>;
};

export default GridView;
