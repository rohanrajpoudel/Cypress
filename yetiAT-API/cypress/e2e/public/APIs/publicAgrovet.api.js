import { publicAPI } from "./public.api";

export const publicAgrovetAPI = (subURL, qs = null) => 
    publicAPI(`/agrovet${subURL}`, qs);