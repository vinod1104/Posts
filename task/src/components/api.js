
import axios from 'axios';

const url="http://localhost:1104/Posts";

export const getUser=async(num)=>{
    return await axios.get(`${url}/${num}`)
};

export const addUser=async(post)=>{
    
    return await axios .post(url,post);
    
    
};

export const editUser=async(num,post)=>{
    return await axios.put(`${url}/${num}`,post)
};