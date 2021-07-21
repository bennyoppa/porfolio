import { SvgIconProps } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import StoreIcon from "@material-ui/icons/Store";
import WebIcon from "@material-ui/icons/Web";
import BusinessIcon from "@material-ui/icons/Business";

type Icons = {
  icon: (props: SvgIconProps) => JSX.Element;
  label: string;
}[];

const icons: Icons = [
  {
    icon: CreateIcon,
    label: "create",
  },
  {
    icon: StoreIcon,
    label: "store",
  },
  {
    icon: WebIcon,
    label: "web",
  },
  {
    icon: BusinessIcon,
    label: "business",
  },
];

export default icons;
