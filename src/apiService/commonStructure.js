import axios from "axios";

export const commonApi = async(method, url, body) => {
    let reqConfig = {
        method,
        url,
        data:body
    }

    return await axios(reqConfig).then(data=>{
        return data
    }).catch(data=>{
        return data
    })
}