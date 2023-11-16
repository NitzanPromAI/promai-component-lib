import RobotArmImage from "./assets/robotic_arm.svg";

import { SIDE_MENU_ITEMS } from "./types/shared.types";

export const ROLES_OPTIONS = [
  //temporal
  { value: "project-manager", optionText: "Project Manager" },
  { value: "project-manager-1", optionText: "Project Manager 1" },
  { value: "project-manager-2", optionText: "Project Manager 2" },
];

export const SIDE_MENU_ITEMS_AS_ARR = [
  { key: 0, type: SIDE_MENU_ITEMS.ACTIONS },
  { key: 1, type: SIDE_MENU_ITEMS.USERS },
  { key: 2, type: SIDE_MENU_ITEMS.PARTS },
  { key: 3, type: SIDE_MENU_ITEMS.IMAGES },
  { key: 4, type: SIDE_MENU_ITEMS.TOOLS },
  { key: 5, type: SIDE_MENU_ITEMS.JIGS },
  { key: 7, type: SIDE_MENU_ITEMS.MATERIALS },
  { key: 6, type: SIDE_MENU_ITEMS.PROCEDURES },
  { key: 8, type: SIDE_MENU_ITEMS.IMAGE_TOOLS },
];

export const APP_ROUTES_INDEX = "/";
export const APP_ROUTES_LOGIN = "/login";
export const APP_ROUTES_HOME = "/home";
export const APP_ROUTES_TEST = "/test";
export const APP_ROUTES_USERS = "/users";
export const APP_ROUTES_CATCH_ALL = "*";

export const PROJECT_LIST = [
  {
    id: "mazor_rami",
    projectName: "MAZOR_RAMI",
    projectIPCI: "MAZ_gh765",
    projectImgUrl: RobotArmImage,
  },
  {
    id: "mazor_crane",
    projectName: "MAZOR_Crane",
    projectIPCI: "MAZ_gh765",
    projectImgUrl: RobotArmImage,
  },
  {
    id: "mazor_robot",
    projectName: "MAZOR_Robot",
    projectIPCI: "MAZ_gh765",
    projectImgUrl: RobotArmImage,
  },
];

export const NEW_PROJECT = {
  id: "new-project",
  name: "New Project",
  projectIPCI: "",
  projectImgUrl: "",
  hasOptions: false,
};

export const loginMockData = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InN3YWdnZXJBYyIsImlhdCI6MTY5ODc0NjU1OCwiZXhwIjoxNjk4ODMyOTU4fQ.NexK8oWc2pY-TuUFBudkWjaiC4xYOdzO2ewTnAmMLF8",
  name: "Malvin",
  permission: "Full Access",
  userName: "malvin",
  id: "fee31918-6449-56f7-adb1-5dc2982047e2",
  role: "admin",
  tempPermissionLevel: null,
  tempExpireAt: null,
  isDisclaimer: null,
  state: "valid",
  createdAt: "2023-10-26T10:18:02.276Z",
  updatedAt: "2023-10-26T10:18:08.008Z",
  isAdmin: true,
  rank: 2,
};
