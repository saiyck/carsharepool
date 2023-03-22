import { Api } from "../../common/Api/ApiCall"
import { APIURLS, BASE_URL } from "../../common/Api/ApiUrls"

export const loginUser= async(data:any)=> {
 let url = BASE_URL + APIURLS.LOGIN_USER;  
 let response = await Api(url,'POST',data);
 console.log('loginResponse',response)
 return response;
}