import SvgIconsMap from "./SvgIcon";

const Icons = ({ name, width, height, color }) => {
  const SvgIcon = SvgIconsMap[name];
  if (!SvgIcon) return null;
  return <SvgIcon width={width} height={height} color={color}/>;
};

export default Icons;
