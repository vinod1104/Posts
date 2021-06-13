import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home=()=>{
  const[posts,setPost]=useState([])
   
  useEffect(()=>{
    loadPost();
    
  },[])


  const loadPost=async()=>{
    const result= await axios.get("http://localhost:1104/Posts")
    setPost(result.data)
    };

    const deleteuser=async id=>{
      await axios.delete(`http://localhost:1104/Posts/${id}`)
      loadPost()
    };
    return(
        <div className="container">
          
      <div className="py-4">
      <h1 style={{textAlign:'center',fontStyle:"italic",color:"peru"}}>Home Page</h1>
     
      <table className="table table-striped table-dark" >
      
        <thead className="thead-light" style={{textAlign:"center"}} >
         <tr>
         <th>#</th>
         <th>USERID</th>
          <th>ID</th>
          <th>TITLE</th>
          <th>BODY</th>
          <th></th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
       {posts.map((post,index)=>(
         <tr  key={post.id} >
           <th scope="row">{index+1}</th>
           <td>{post.userId}</td>
           <td>{post.id}</td>
           <td>{post.title}</td>
           <td>{post.body}</td>
           <td>
             
             <Link className="btn btn-outline-primary" to={`/users/Edit/${post.id}`}>Edit</Link>
             </td>
             <td>
             <Link className="btn btn-danger" onClick={()=>{deleteuser(post.id)}}>Delete</Link>
             
           </td>
         </tr>
       ))}
  </tbody>
</table>
</div>
    </div>
    )
};
export default Home;

       
                 
          
          