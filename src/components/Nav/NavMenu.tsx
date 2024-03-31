import React, { Dispatch, useContext, useReducer } from "react";
import NavDropdown, { NavDropdownProps } from "./NavDropdown";
import NavDropdownMenu, { NavDropdownMenuProps } from "./NavDropdownMenu";
import { NavbarContext } from "../Navbar";
import NavbarDropdown from "../Navbar/NavbarDropdown";
import NavbarDropdownMenu from "../Navbar/NavbarDropdownMenu";

export interface NavMenuProps
  extends NavDropdownProps,
    Omit<NavDropdownMenuProps, "onToggle"> {}

export type NavMenuState = {
  items: {
    _id: unknown;
    eventKey?: unknown;
    active: boolean;
  }[];
};

export type NavMenuContextProps = [NavMenuState, Dispatch<NavMenuAction>];

export const NavMenuContext = React.createContext<NavMenuContextProps | null>(
  null,
);
NavMenuContext.displayName = "NavMenu.Context";

export enum NavMenuActionType {
  RegisterItem,
  UnregisterItem,
}

export type NavMenuAction =
  | {
      type: NavMenuActionType.RegisterItem;
      payload: { _id: unknown; eventKey?: unknown; active: boolean };
    }
  | { type: NavMenuActionType.UnregisterItem; payload: { _id: unknown } };

const initilNavMenuState: NavMenuState = {
  items: [],
};

const reducer = (state: NavMenuState, action: NavMenuAction): NavMenuState => {
  switch (action.type) {
    case NavMenuActionType.RegisterItem:
      return {
        ...state,
        items: [
          ...state.items.filter((item) => item._id !== action.payload._id),
          action.payload,
        ],
      };
    case NavMenuActionType.UnregisterItem:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    default:
      throw new Error("Unrecognizable action type: " + (action as any).type);
  }
};

const NavMenu = React.forwardRef(
  (props: NavMenuProps, ref: React.Ref<unknown>) => {
    const parentNavMenu = useContext(NavMenuContext);

    const navMenuContext = useReducer(reducer, initilNavMenuState);

    const navbar = useContext(NavbarContext);

    if (!parentNavMenu) {
      if (navbar) {
        return (
          <NavMenuContext.Provider value={navMenuContext}>
            <NavbarDropdown ref={ref} {...props} />
          </NavMenuContext.Provider>
        );
      }

      return (
        <NavMenuContext.Provider value={navMenuContext}>
          <NavDropdown ref={ref} {...props} />
        </NavMenuContext.Provider>
      );
    }

    if (navbar) {
      return <NavbarDropdownMenu ref={ref} {...props} />;
    }

    return <NavDropdownMenu ref={ref} {...props} />;
  },
);

NavMenu.displayName = "Nav.Menu";

export default NavMenu;
