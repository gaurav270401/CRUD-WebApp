
import { useState,useEffect} from "react";
import { FormControl, FormGroup, InputLabel,Input, Typography,styled, Button} from "@mui/material";
import {editUser, getUserDetails} from "../service/api";
import { useNavigate,useParams } from "react-router-dom";


const Header = styled(FormGroup)`
   width:50%;
   margin: 5px auto 0 auto;
   & > div{
    margin-top:20px;
   }
`

const defaultobject={
  
  name:'',
  username:'',
  email:'',
  phone:''
}

const EditUser = () =>{
  const {id} = useParams();
  const [user,setUser] =useState(defaultobject);
  const navigate = useNavigate();

  useEffect(()=>{
   loadUserDetails();
  },[]);

  const loadUserDetails=async()=>{
    const res= await getUserDetails(id);
    console.log(res.data[0]);
    setUser(res.data[0]);

  }

  const onValueChange= (e) =>{
     setUser({...user,[e.target.name] : e.target.value});
  }

  const editUserData =async ()=>{
    await editUser(user,id);
    navigate("/cruduser");
  }
  return(
    <Header>
    <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone No.</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button variant="outlined" onClick={()=>editUserData()}>EditUser</Button>
      </FormControl>
    </Header>
      
  );
  
}

export default EditUser;