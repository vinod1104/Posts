import React,{useState} from 'react';

import {Link, useHistory} from'react-router-dom';
import {addUser} from '../api';
const Add=()=>{
    let history=useHistory();
    const[post,setpost]=useState({
       userId:"",
       id:"",
       title:"",
       body:""
    });

    const{userId,id,title,body}=post;
    const onInputChange=e=>{
        setpost({...post,[e.target.name]:e.target.value })
                            };

   
    const addUserDetails=async  ()=>{
       
        await addUser(post)
        history.push("/")
       
    }
    return(
    <div className="container"> <br/><br/><br/>
    <div className=" w-50 mx-auto shadow p-5"
     style={{backgroundColor:"lightsalmon",borderRadius:"100px"}}>
    <h3 className="text-center mb-4" 
    style={{color:"green",fontStyle:"italic"}}>Add New Post</h3>
                
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
       

        <Link type="submit" onClick= {()=>addUserDetails()} className="btn btn-outline-success">Add</Link>
    </form>
    </div>
    </div>

    )
};
export default  Add;