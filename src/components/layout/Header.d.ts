import type { MenuType } from './types';
interface Props {
    username?: string;
    menuOptions: MenuType[];
    logout: () => void;
}
export declare const Header: ({ username, menuOptions, logout }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
