import { Box, Stack, Typography } from "@mui/material";
import { NotificationIcon, UserAvatarIcon } from "../Icon";
import theme from "../../themes/theme";

import { Button } from "../Button";
import { UserMenu } from "../UserMenu";
import { HeaderProps } from ".";

const Header = (props: HeaderProps) => {
  const {
    children,
    name,
    role,
    isAuthenticated,
    menuList,
    moreNavLinks,
    handleSelected,
    showDateTime = true,
    showNotification = true,
    ...rest
  } = props;

  const getTime = (type: string) => {
    switch (type) {
      case "seconds":
        return new Date().getSeconds();
      case "minutes":
        return new Date().getMinutes();
      case "hours":
        return new Date().getHours();
      case "date":
        return new Date().getDate();
      case "month":
        return new Date().getMonth() + 1;
      case "year":
        return new Date().getFullYear();

      default:
        return "";
    }
  };

  return (
    <Box component="header" className={rest?.className} sx={{ ...rest?.style }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
        }}
      >
        <Stack component="div" direction="row" gap="34px" paddingRight="7px">
          {rest?.leftLogo}
          {children}
        </Stack>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {isAuthenticated && (
            <Stack direction="row" gap="24px">
              {showNotification && <NotificationIcon />}

              <UserMenu
                list={menuList}
                listHead={rest?.listHead}
                handleOnClick={handleSelected}
                userInfo={{ name, role }}
                colors={{
                  main: theme.palette.primary.main,
                  default: theme.palette.background.default,
                }}
              >
                <Button
                  size="small"
                  variant="text"
                  style={{ padding: 0, minWidth: 32 }}
                >
                  <UserAvatarIcon />
                </Button>
              </UserMenu>
            </Stack>
          )}

          {showDateTime && (
            <Stack direction="row" gap={2} mx={4}>
              <Typography variant="body8">
                {getTime("hours")}:{getTime("minutes")}
              </Typography>
              <Typography variant="body8">
                {getTime("date")}.{getTime("month")}.{getTime("year")}
              </Typography>
            </Stack>
          )}

          <Stack direction="row" gap={2}>
            {rest?.promAiLogo}
            {rest?.rightLogo}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
