import { useContent } from "../hooks";

const Browse = () => {
  const { series } = useContent("series");
  console.log(series);
  return <div>Hello from the browse</div>;
};

export default Browse;
