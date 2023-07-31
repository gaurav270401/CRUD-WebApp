
import { useState } from "react";
import { FormControl, FormGroup, InputLabel,Input, Typography,styled, Button} from "@mui/material";
import {addUser} from "../service/api";
import { useNavigate } from "react-router-dom";


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

const AddUser = () =>{
  const [user,setUser] =useState(defaultobject);
  const navigate = useNavigate();

  const onValueChange= (e) =>{
     setUser({...user,[e.target.name] : e.target.value});
  }

  const addUserData =async ()=>{
    await addUser(user);
    navigate("/cruduser");
  }
  return(
    <Header>
    <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="name" />
      </FormControl>
      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone No.</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="outlined" onClick={()=>addUserData()}>AddUser</Button>
      </FormControl>
    </Header>
      
  );
  
}

export default AddUser;