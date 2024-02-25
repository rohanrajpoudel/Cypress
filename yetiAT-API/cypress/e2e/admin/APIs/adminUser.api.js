import { adminAPI } from "./admin.api";

export const adminUserAPI = (subURL, qs = null) => 
    adminAPI('GET', `/user${subURL}`, null, null, qs);
