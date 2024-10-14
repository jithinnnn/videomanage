import { BASE_URL } from "./baseurl"
import { commonApi } from "./commonStructure"

//video add
export const addVideoApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/videos`,bodyData)
}

//get all video
export const getVideosApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/videos`,{})
}

//delete video
export const deleteVideoApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/videos/${id}`)
}

// category add
export const addCategoryApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/categories`,bodyData)
}


//get all category
export const getCategoryApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/categories`,{})
}
//DELETE VIDEO
export const deleteCategoryApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/categories/${id}`)
}

//get single video 
export const getVideo=async(id)=>{
    return await  commonApi('GET',`${BASE_URL}/videos/${id}`,{})
}

//update category
export const updateCatApi=async(id,bodyData)=>{
    return await commonApi('PUT',`${BASE_URL}/categories/${id}`,bodyData)
}

//history add
export const addHistoryApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/histories`,bodyData)
}

//history GET
export const getHistoryApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/histories`,{})
}

//history delete
export const deleteHistoryApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/histories/${id}`)
}