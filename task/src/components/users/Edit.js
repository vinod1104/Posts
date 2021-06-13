import React,{useEffect, useState} from 'react';
import {useHistory,useParams,Link} from'react-router-dom';
import { getUser } from '../api';
import { editUser } from '../api';
const Edit=()=>{
    let history=useHistory();
    const{num}=useParams();
    const[post,setPost]=useState({
       userId:"",
       id:"",
       title:"",
       body:""
    });

    const{userId,id,title,body}=post;
    const onInputChange=e=>{
        setPost({ ...post,[e.target.name]:e.target.value})
    }  ; 
        
    useEffect(()=>{
        loadPost()
    },[]);

    const editUserDetails=async ()=>{
        await editUser(num,post)
       history.push("/")
    }

    
    const loadPost=async()=>{
         const res=await getUser(num);
         setPost(res.data)
    }
    
    return(
    <div className="container">
        <br/><br/><br/>
        
    <div className=" w-50 mx-auto shadow p-5" 
    style={{backgroundColor:"mediumslateblue",borderRadius:"150px"}}>
    <h3 className="text-center mb-4" 
    style={{color:"gold",fontStyle:"italic"}}>Edit Post</h3>
            
    <form>
        <div className="form-group">
        <input className="form-control" 
        type="text"
        placeholder="USERID" 
        name="userId"
        value={userId}
        onChange={e=>onInputChange(e)}>
        </input>  
        </div>
        
        <div className="form-group">
        <input className="form-control"
        type="text" 
        placeholder="ID" 
        name="id" 
        value={id} 
        onChange={e=>onInputChange(e)}></input> 
        </div>
        
        <div className="form-group">
        <input className="form-control" 
        type="text" 
        placeholder="TITLE"
        name="title" 
        value={title}  
        onChange={e=>onInputChange(e)}></input>
        </div>

        <div className="form-group">
        <input className="form-control" 
        type="text" 
        placeholder="BODY" 
        name="body" 
        value={body} 
        onChange={e=>onInputChange(e)}></input>
        </div>

        <Link className="btn btn-outline-dark"
        onClick={()=>editUserDetails()}>Update</Link>
    </form>
    </div>
    </div>

    )
};
export default Edit;