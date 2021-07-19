import { PropTypes } from "@material-ui/core";

export type ILinks = {
  name: string;
  url: string;
  color?: PropTypes.Color;
};

const links: ILinks[] = [
  {
    name: "Home",
    url: "/",
    color: "inherit",
  },
  {
    name: "About",
    url: "/about",
    color: "inherit",
  },
];

export default links;
