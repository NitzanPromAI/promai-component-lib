import { useState, MouseEvent } from "react";
import { Box, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { DropdownItemProp } from ".";

const UserItem = (props: DropdownItemProp) => {
  const { id, icon, name, haschildren, childlist, handleOnClick } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setOpen((previousOpen) => !previousOpen);
    setAnchorEl(event ? event.currentTarget : null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <MenuItem
      id={id}
      sx={{
        display: "flex",
        padding: "6px 4px",
      }}
    >
      <Box component="div" sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Stack direction="row" gap={1} flex="display" alignItems="center" onClick={handleOnClick}>
          {icon}
          <Typography variant="body5">{name}</Typography>
        </Stack>

        {haschildren && (
          <div>
            <IconButton
              size="small"
              sx={{ padding: 0 }}
              id={name}
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <ArrowForwardIosRoundedIcon color="primary" sx={{ marginRight: "0px !important" }} />
            </IconButton>
            <Menu
              id={name}
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                ml: "6px",
              }}
            >
              {childlist?.map((item, _idx) => (
                <MenuItem
                  key={_idx}
                  id={item.name}
                  sx={{
                    display: "flex",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    padding: "6px 0px 6px 4px",
                    minWidth: "100px",
                  }}
                  onClick={item.onClick}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Stack direction="row" gap={1} flex="display" alignItems="center">
                      {item.icon}
                      <Typography variant="body5">{item.name}</Typography>
                    </Stack>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
      </Box>
    </MenuItem>
  );
};

export default UserItem;
