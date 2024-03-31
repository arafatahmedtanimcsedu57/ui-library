import React from "react";

import NavbarBrand from "./NavbarBrand";

import { useClassNames } from "../utils";
import { WithAsProps, RsRefForwardingComponent } from "../@types/common";

export const NavbarContext = React.createContext<boolean>(false);

type AppearanceType = "default" | "inverse" | "subtle";

export interface NavbarProps extends WithAsProps {
  appearance?: AppearanceType;
  classPrefix?: string;
}

interface NavbarComponent extends RsRefForwardingComponent<"div", NavbarProps> {
  Brand: typeof NavbarBrand;
}

const Navbar: NavbarComponent = React.forwardRef(
  (props: NavbarProps, ref: React.Ref<HTMLElement>) => {
    const {
      className,
      as: Component = "nav",
      classPrefix = "navbar",
      appearance = "default",
      ...rest
    } = props;
    const { withClassPrefix, merge } = useClassNames(classPrefix);
    const classes = merge(className, withClassPrefix(appearance));
    return (
      <NavbarContext.Provider value={true}>
        <Component {...rest} ref={ref} className={classes} />
      </NavbarContext.Provider>
    );
  },
) as unknown as NavbarComponent;

Navbar.Brand = NavbarBrand;

Navbar.displayName = "Navbar";

export default Navbar;
