import { useState, MouseEvent } from "react";
import { styled } from "@mui/joy/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ProjectItem from "./ProjectItem";
import { ProjectSelectionListProp } from ".";
import "./ProjectSelection.css";

const ProjectSelection = (props: ProjectSelectionListProp) => {
  const { id, list, selected, selectedIcon, leftIcon, addProjectIcon, newProject, theme, handleItemClick } = props;

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: "4px",
      marginTop: 0,
      padding: 0,
      left: 100,
      minWidth: 180,
      maxWidth: 310,
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: 0,
        maxHeight: 260,
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: "12px",
        },
      },
    },
  }));

  const StyledMenuItem = styled((props: MenuItemProps) => <MenuItem {...props} disableRipple />)(() => ({
    "&": {
      padding: "8px",
    },
    "&:hover": {
      background: theme.disabled,
    },
  }));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClick = (e: any) => {
    handleItemClick(e);
    handleClose();
  };

  return (
    <Box id={id} sx={{ position: "relative" }}>
      <Button
        className="project-selection"
        aria-controls="project-selection"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        color="inherit"
        size="medium"
        style={{
          backgroundColor: theme.default,
          color: theme.icons,
          padding: "8px 16px",
          textTransform: "capitalize",
        }}
        disableElevation
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        <ProjectItem
          className="project-item-wrapper no-padding"
          id={selected?.id}
          projectName={selected?.name ?? "No projects"}
          hasOptions={false}
          leftIcon={selectedIcon}
          theme={{ textSecondary: theme.textSecondary }}
        />
      </Button>

      <StyledMenu
        id="project-menu"
        MenuListProps={{ "aria-labelledby": "customized-button" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          width: "100%",
        }}
      >
        {list?.map((el) => (
          <StyledMenuItem key={el.id} onClick={() => handleMenuClick(el)} className="project-view-menuItem">
            <ProjectItem
              className="project-item-wrapper"
              id={el.id}
              projectName={el.name}
              leftIcon={leftIcon}
              hasOptions
              theme={{ textSecondary: theme.textSecondary }}
            />
          </StyledMenuItem>
        ))}

        {newProject && (
          <StyledMenuItem onClick={() => handleMenuClick(newProject)} className="project-view-menuItem" disableRipple>
            <ProjectItem
              id={newProject?.id}
              className="project-item-wrapper"
              projectName={newProject?.name}
              hasOptions={newProject?.hasOptions}
              leftIcon={addProjectIcon}
              theme={{ textSecondary: theme.textSecondary }}
            />
          </StyledMenuItem>
        )}
      </StyledMenu>
    </Box>
  );
};

export default ProjectSelection;
