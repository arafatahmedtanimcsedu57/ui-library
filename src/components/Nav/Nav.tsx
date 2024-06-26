import React, { useContext, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import NavItem, { NavItemProps } from "./NavItem";
import {
  useClassNames,
  useEnsuredRef,
  useInternalId,
  useControlled,
} from "../utils";
import { NavbarContext } from "../Navbar/Navbar";
import { WithAsProps, RsRefForwardingComponent } from "../@types/common";
import NavContext, { NavContextProps } from "./NavContext";
import Menubar from "../internals/Menu/Menubar";
import { oneOf } from "../internals/propTypes";
import NavDropdown from "./NavDropdown";
import NavMenu, { NavMenuActionType, NavMenuContext } from "./NavMenu";
import deprecateComponent from "../utils/deprecateComponent";
import NavDropdownItem from "./NavDropdownItem";
import NavDropdownMenu from "./NavDropdownMenu";
import NavbarDropdownItem from "../Navbar/NavbarDropdownItem";
import NavbarItem from "../Navbar/NavbarItem";

export interface NavProps<T = unknown>
  extends WithAsProps,
    Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  /** sets appearance */
  appearance?: "default" | "subtle" | "tabs";

  /** Reverse Direction of tabs/subtle */
  reversed?: boolean;

  /** Justified navigation */
  justified?: boolean;

  /** Vertical navigation */
  vertical?: boolean;

  /** appears on the right. */
  pullRight?: boolean;

  /** Active key, corresponding to eventkey in <Nav.item>. */
  activeKey?: T;

  /** Default active key, corresponding to eventkey in <Nav.item>. */
  defaultActiveKey?: T;

  /** Callback function triggered after selection */
  onSelect?: (eventKey: T | undefined, event: React.SyntheticEvent) => void;
}

interface NavComponent extends RsRefForwardingComponent<"div", NavProps> {
  /**
   * @deprecated Use <Nav.Menu> instead.
   */
  Dropdown: typeof NavDropdown;
  Item: typeof NavItem;
  Menu: typeof NavMenu;
}

const Nav: NavComponent = React.forwardRef(
  (props: NavProps, ref: React.Ref<HTMLElement>) => {
    const {
      as: Component = "div",
      classPrefix = "nav",
      appearance = "default",
      vertical,
      justified,
      reversed,
      pullRight,
      className,
      children,
      activeKey: activeKeyProp,
      defaultActiveKey,
      onSelect: onSelectProp,
      ...rest
    } = props;

    // Whether inside a <Navbar>
    const navbar = useContext(NavbarContext);

    const menubarRef = useEnsuredRef(ref);

    const { withClassPrefix, merge, rootPrefix, prefix } =
      useClassNames(classPrefix);

    const classes = merge(
      className,
      rootPrefix({
        "navbar-nav": navbar,
        "navbar-right": pullRight,
      }),
      withClassPrefix(appearance, {
        horizontal: navbar || !vertical,
        vertical: vertical,
        justified,
        reversed,
      }),
    );

    const [activeKey, setActiveKey] = useControlled(
      activeKeyProp,
      defaultActiveKey,
    );
    const contextValue = useMemo<NavContextProps>(
      () => ({
        activeKey,
        onSelect: (
          eventKey: string | undefined,
          event: React.SyntheticEvent,
        ) => {
          setActiveKey(eventKey);
          onSelectProp?.(eventKey, event);
        },
      }),
      [activeKey, onSelectProp, setActiveKey],
    );

    const hasWaterline = appearance !== "default";

    return (
      <NavContext.Provider value={contextValue}>
        <Component {...rest} ref={menubarRef} className={classes}>
          {children}
          {hasWaterline && <div className={prefix("bar")} />}
        </Component>
      </NavContext.Provider>
    );
  },
) as unknown as NavComponent;

const DeprecatedNavDropdown = deprecateComponent(
  NavDropdown,
  "<Nav.Dropdown> is deprecated, use <Nav.Menu> instead.",
);
DeprecatedNavDropdown.Menu = deprecateComponent(
  NavDropdownMenu,
  "<Nav.Dropdown.Menu> is deprecated, use <Nav.Menu> instead",
);
DeprecatedNavDropdown.Item = deprecateComponent(
  NavDropdownItem,
  "<Nav.Dropdown.Item> is deprecated, use <Nav.Item> instead",
);

Nav.Dropdown = DeprecatedNavDropdown;
/**
 * The <Nav.Item> API
 * When used as direct child of <Nav>, render the NavItem
 * When used within a <Nav.Menu>, render the NavDropdownItem
 */
Nav.Item = React.forwardRef((props: NavItemProps, ref: React.Ref<any>) => {
  const nav = useContext(NavContext);

  if (!nav) {
    throw new Error("<Nav.Item> must be rendered within a <Nav> component.");
  }

  const parentNavMenu = useContext(NavMenuContext);
  const navbar = useContext(NavbarContext);

  const [, dispatch] = parentNavMenu ?? [];
  const _id = useInternalId("Nav.Item");

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: NavMenuActionType.RegisterItem,
        payload: {
          _id,
          eventKey: props.eventKey,
          active: props.active ?? false,
        },
      });

      return () => {
        dispatch({
          type: NavMenuActionType.UnregisterItem,
          payload: {
            _id,
          },
        });
      };
    }
  }, [dispatch, _id, props.eventKey, props.active]);

  if (parentNavMenu) {
    if (navbar) {
      return <NavbarDropdownItem ref={ref} {...props} />;
    }

    return <NavDropdownItem ref={ref} {...props} />;
  }

  if (navbar) {
    return <NavbarItem ref={ref} {...props} />;
  }

  return <NavItem ref={ref} {...props} />;
});
Nav.Item.displayName = "Nav.Item";

Nav.Menu = NavMenu;

Nav.displayName = "Nav";
Nav.propTypes = {
  classPrefix: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  appearance: oneOf(["default", "subtle", "tabs"]),
  // Reverse Direction of tabs/subtle
  reversed: PropTypes.bool,
  justified: PropTypes.bool,
  vertical: PropTypes.bool,
  pullRight: PropTypes.bool,
  activeKey: PropTypes.any,
  onSelect: PropTypes.func,
};

export default Nav;
