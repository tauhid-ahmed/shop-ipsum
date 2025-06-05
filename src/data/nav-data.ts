import * as paths from "@/constants/paths";

export const navItems = [
  {
    name: "Home",
    href: paths.homePath(),
  },
  {
    name: "Men",
    href: paths.categoryPath("men"),
  },
  {
    name: "Women",
    href: paths.categoryPath("women"),
  },
  {
    name: "Children",
    href: paths.categoryPath("children"),
  },
  {
    name: "Gift",
    href: paths.giftPath(),
  },
];
