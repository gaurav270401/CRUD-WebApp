
import {AppBar,Toolbar,styled} from '@mui/material';

import { NavLink } from 'react-router-dom'; //Navlink is used for provide navigation to any text to go to that link/url page.

const Header=styled(AppBar)`
    background:#2471A3;
`
const Tab = styled(NavLink)`
      font-size: 20px;
      margin-right: 20px;
      text-decoration: none;
      color: inherit;
`
const NavBar = () =>{
    return(
        <Header position='static'>
            <Toolbar>
               <Tab to="/">CRUD for Me</Tab>
               <Tab to="/cruduser">CRUD Users</Tab>
               <Tab to="/adduser">New to CRUD</Tab>
            </Toolbar>
        </Header>
    );
}
export default NavBar;