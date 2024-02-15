import { defaultAPI } from "../../default/APIs/default.api";

export const publicAPI = (subURL, qs = null) => 
    defaultAPI('GET', `/api/v1/public${subURL}`, null, null, qs);