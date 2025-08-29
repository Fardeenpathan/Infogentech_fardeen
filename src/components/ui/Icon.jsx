import SvgIconsMap from "./SvgIcon";

const Icons = ({ name, ...props }) => {
  const SvgIcon = SvgIconsMap[name];
  if (!SvgIcon) return null;
  return <SvgIcon {...props} />;
};

export default Icons;
