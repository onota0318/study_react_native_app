/**
 * navigation definition
 * react-navigationのprops型
 * 
 * @package Types
 */
import { NavigationScreenProp, NavigationRoute } from "react-navigation";

/**
 * Navigation
 */
export type Navigation = NavigationScreenProp<NavigationRoute<any>, any>;

/**
 * NavigationProps
 */
export interface NavigationProps {
    navigation: Navigation;
}
