import axios from 'axios';

const URL="http://localhost:8000";                                       
 export const addUser=async (data)=>{              //async/await,promises
    try {
        return await axios.post(`${URL}/adduser`,data);
    } catch (error) {
        console.log("Error while calling add user api",error);
    }
    
}

export const getUser= async() =>{
    try {
        return await axios.get(`${URL}/cruduser`)
    } catch (error) {
        console.log("Error while calling getuser api",error);
    }
}

export const getUserDetails=async(id) =>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while calling getuserdetails api",error);
    }
}

export const editUser=async(data,id)=>{
    try {
        return await axios.post(`${URL}/${id}`,data);
    } catch (error) {
        console.log("Error while calling edituser api",error);
    }
}

export const deleteuser=async(id)=>{
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("Error while calling edituser api",error);
    }
}
