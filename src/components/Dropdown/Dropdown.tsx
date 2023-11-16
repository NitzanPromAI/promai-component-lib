import React, { useRef, useState, useEffect, MouseEvent } from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Divider, Grow, Paper, Popper, Typography } from "@mui/material";
import DropdownItem from "./Item";
import "./Dropdown.css";
import { DropdownListProps } from ".";

export default function Dropdown(props: DropdownListProps) {
  const { children, list, setItemOpen, listHeader, handleOnClick } = props;
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const prevOpen = useRef(open);

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setOpen((previousOpen) => !previousOpen);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef?.current?.focus();
    }

    prevOpen.current = open;
    setItemOpen(open);
  }, [open]);

  return (
    <Box sx={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-describedby={id}
        onClick={handleClick}
        onMouseEnter={handleClick}
      >
        {children}
      </div>

      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        placement="right-start"
        transition
        disablePortal
        className="dropdown-wrapper"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                "&:before": {
                  bgcolor: "background.paper",
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <div className="dropdown-menu-item">
                  {listHeader && (
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", paddingX: 3, paddingY: 1 }}
                    >
                      {listHeader}
                    </Typography>
                  )}

                  {list?.map((el, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <Divider className="user-item-divider" />}
                      <DropdownItem
                        id={el.name}
                        name={el.name}
                        icon={el.icon}
                        haschildren={el.haschildren}
                        childlist={el.childlist}
                        handleOnClick={() => handleOnClick && handleOnClick(el)}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}
