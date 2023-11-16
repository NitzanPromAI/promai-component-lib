import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

interface ProjectProps {
  id?: string;
  className: string;
  projectName?: string;
  hasOptions: boolean;
  leftIcon?: React.ReactNode;
  theme: {
    textSecondary: string;
  };
}

const ProjectItem = ({ id, className, projectName, hasOptions, leftIcon, theme }: ProjectProps) => {
  return (
    <div id={id} className={className}>
      <Stack direction="row" gap={1}>
        {leftIcon}
        <Typography variant="body1" color={theme.textSecondary}>
          {projectName}
        </Typography>
      </Stack>

      {hasOptions && (
        <IconButton size="small" sx={{ padding: 0 }}>
          <MoreVertRoundedIcon />
        </IconButton>
      )}
    </div>
  );
};

export default ProjectItem;
