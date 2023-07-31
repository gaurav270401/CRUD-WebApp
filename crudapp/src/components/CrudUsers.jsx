import { Button, Table, TableBody, TableCell, TableHead, TableRow,styled } from "@mui/material";
import { getUser,deleteuser } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const StyledTable= styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
`
const THead=styled(TableRow)`
    background:#2471A3;
    &> th{
        color:#fff;
        font-size:20px;
    }
`
const TCell=styled(TableRow)`
    &> td{
        font-size:20px;
    }
`


const CrudUsers = () =>{
    const [users,setUser]=useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers= async ()=>{
        let response=await getUser();
        setUser(response.data);
        // console.log(response.data);

    }

    const deleteUser=async(id)=>{
        await deleteuser(id);
        getAllUsers();
    }
    return(
        <StyledTable>
        <TableHead>
            <THead>
                <TableCell>id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </THead>
        </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TCell>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edituser/${user.userId}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={()=> deleteUser(user.userId)}>Delete</Button>
                            </TableCell>
                        </TCell>
                    ))
                }
            </TableBody>
        </StyledTable>
    );
    
  }
  
  export default CrudUsers;