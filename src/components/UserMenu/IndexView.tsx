import { useState } from "react";
import { Box, Stack } from "@mui/material";
import UserInfo from "./UserInfo";
import { Dropdown } from "../Dropdown";
import { UserAvatarProps } from ".";

const IndexView = (props: UserAvatarProps) => {
  const { id, children, list, listHead, handleOnClick, colors, userInfo } = props;

  const [open, setOpen] = useState(false);

  const handleSetOpen = (val: boolean) => {
    setOpen(val);
  };

  return (
    <Stack id={id} direction="row" gap={1}>
      <Dropdown setItemOpen={handleSetOpen} list={list} listHeader={listHead} handleOnClick={handleOnClick}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 32,
            height: 32,
            backgroundColor: open ? colors.default : "",
            borderRadius: 1,
            "& > button > svg > path": {
              stroke: open ? colors.main : colors.default,
            },
          }}
        >
          {children}
        </Box>
      </Dropdown>

      <UserInfo id="user-info" info={userInfo} />
    </Stack>
  );
};

export default IndexView;
