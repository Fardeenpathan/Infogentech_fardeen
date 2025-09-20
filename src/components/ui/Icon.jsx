import SvgIconsMap from "./SvgIcon";

const Icons = ({ name, width, height, color , className }) => {
  const SvgIcon = SvgIconsMap[name];
  if (!SvgIcon) return null;
  return <SvgIcon width={width} height={height} color={color} className={className}/>;
};

export default Icons;
