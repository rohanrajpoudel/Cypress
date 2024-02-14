import { defaultAPI } from "./default.api";

export const defaultAuthAPI = (method, subURL, body=null, headers = null) => 
    defaultAPI(method, `/api/v1/auth${subURL}`, body, headers);