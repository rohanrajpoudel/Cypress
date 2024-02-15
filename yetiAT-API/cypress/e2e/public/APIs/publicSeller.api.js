import { publicAPI } from "./public.api";

export const publicSellerAPI = (subURL) => 
    publicAPI(`/seller${subURL}`);