import { PropTypes } from "@material-ui/core";

export type ILinks = {
  name: string;
  url: string;
  color?: PropTypes.Color;
};

const links: ILinks[] = [
  {
    name: "About",
    url: "/",
    color: "inherit",
  },
  {
    name: "Temp",
    url: "/temp",
    color: "inherit",
  },
];

export default links;
