import { defaultAPI } from "./default.api";

export const defaultRoleAPI = (method, subURL) => 
    defaultAPI(method, `/api/v1/role${subURL}`);