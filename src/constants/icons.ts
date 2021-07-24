import { SvgIconProps } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import StoreIcon from "@material-ui/icons/Store";
import WebIcon from "@material-ui/icons/Web";
import BusinessIcon from "@material-ui/icons/Business";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TimerIcon from "@material-ui/icons/Timer";
import StarsIcon from "@material-ui/icons/Stars";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

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
  {
    icon: FavoriteBorderIcon,
    label: "heart",
  },
  {
    icon: TimerIcon,
    label: "time",
  },
  {
    icon: StarsIcon,
    label: "star",
  },
  {
    icon: FreeBreakfastIcon,
    label: "coffee",
  },
];

export default icons;
