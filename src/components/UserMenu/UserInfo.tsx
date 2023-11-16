import { Stack, Typography } from "@mui/material";
import { IUserInfoProps } from "./Usermenu.types";

const UserInfo = ({ id, info }: { id: string; info: IUserInfoProps }) => {
  const { name, role } = info;
  return (
    <Stack id={id} direction="column" gap="2px">
      <Typography variant="body3">{name}</Typography>
      <Typography variant="body5">{role}</Typography>
    </Stack>
  );
};

export default UserInfo;
