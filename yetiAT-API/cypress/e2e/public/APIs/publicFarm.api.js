import { publicAPI } from "./public.api";

export const publicFarmAPI = (subURL, qs = null) => 
    publicAPI(`/farm${subURL}`, qs);