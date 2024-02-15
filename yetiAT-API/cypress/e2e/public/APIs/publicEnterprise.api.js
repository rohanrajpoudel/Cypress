import { publicAPI } from "./public.api";

export const publicEnterpriseAPI = (subURL = null, qs = null) => 
    publicAPI(`/enterprise${subURL}`, qs);