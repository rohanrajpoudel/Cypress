import { publicAPI } from "./public.api";

export const publicFarmVariantAPI = (subURL, qs = null) => 
    publicAPI(`/farm-variant${subURL}`, qs);