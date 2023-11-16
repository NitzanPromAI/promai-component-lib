import { HeaderDropdownItemProp } from "../Header";

export interface UserAvatarProps {
  id?: string;
  children: React.ReactNode;
  list?: HeaderDropdownItemProp[];
  listHead?: string;
  handleOnClick?: (item: HeaderDropdownItemProp) => void;
  colors: {
    main: string;
    default: string;
  };
  userInfo: IUserInfoProps;
}

export interface IUserInfoProps {
  id?: string;
  name?: string;
  role?: string;
}
