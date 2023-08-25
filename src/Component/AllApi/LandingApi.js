import axios  from "axios";
import { getBaseUrl } from "../Common/Global";
import Cookies from "js-cookie";

export const getAllCountries=async(data)=>{
    let config = {
        method: "get",
        url: getBaseUrl() + "countries",
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        data: data,
      };
    
      try {
        let res = await axios(config);
        return res;
      } catch (error) {
        console.log(error);
        return error.response;
      }

}

export const fetchVisa=async(data)=>{
    let config = {
        method: "get",
        url: getBaseUrl() + `application_forms?from_country=${data.from_countries}&to_country=${data.to_countries}`,
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      };
    
      try {
        let res = await axios(config);
        return res;
      } catch (error) {
        console.log(error);
        return error.response;
      }

}

export const fetchApplication=async(data)=>{
    let config = {
        method: "get",
        url: getBaseUrl() + `application_forms?from_country=${data.from_countries}&to_country=${data.to_countries}&visa_type=${data.visa_type}`,
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      };
    
      try {
        let res = await axios(config);
        return res;
      } catch (error) {
        console.log(error);
        return error.response;
      }

}

export const application_submit_api=async(data)=>{
    let config={
        method:"post",
        url:getBaseUrl()+"applications",
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        data:data
    }
    try {
        let res = await axios(config);
        return res;
      } catch (error) {
        console.log(error);
        return error.response;
      }

}