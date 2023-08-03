import starSVG from "../../../Assets/svgs/star.svg";

const StarsGenerator = ({ numberOfStars }) => {
  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<img key={i} src={starSVG} alt="star" />);
  }
  return <div>{stars}</div>;
};

export default StarsGenerator;
