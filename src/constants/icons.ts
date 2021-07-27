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
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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
  {
    icon: PermPhoneMsgIcon,
    label: "phone",
  },
  {
    icon: MailOutlineIcon,
    label: "email",
  },
  {
    icon: LocationOnIcon,
    label: "address",
  },
  {
    icon: LinkedInIcon,
    label: "linkedin",
  },
  {
    icon: GitHubIcon,
    label: "github",
  },
];

export default icons;
