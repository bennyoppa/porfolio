import { SvgIconProps } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import StoreIcon from "@material-ui/icons/Store";
import WebIcon from "@material-ui/icons/Web";
import BusinessIcon from "@material-ui/icons/Business";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import TimerIcon from "@material-ui/icons/Timer";
import StarsIcon from "@material-ui/icons/Stars";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import VoiceChatIcon from "@material-ui/icons/VoiceChat";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import FunctionsIcon from "@material-ui/icons/Functions";
import TheatersIcon from "@material-ui/icons/Theaters";

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
  {
    icon: VoiceChatIcon,
    label: "movie",
  },
  {
    icon: SportsBasketballIcon,
    label: "sport",
  },
  {
    icon: LibraryMusicIcon,
    label: "music",
  },
  {
    icon: FastfoodIcon,
    label: "food",
  },
  {
    icon: FunctionsIcon,
    label: "math",
  },
  {
    icon: TheatersIcon,
    label: "theater",
  },
];

export default icons;
