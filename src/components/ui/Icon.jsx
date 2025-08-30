import SvgIconsMap from "./SvgIcon";

const Icons = ({ name, width, height }) => {
  const SvgIcon = SvgIconsMap[name];
  if (!SvgIcon) return null;
  return <SvgIcon width={width} height={height}/>;
};

export default Icons;
