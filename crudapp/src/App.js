// import logo from './logo.svg';
import './App.css';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import CRUDforMe from './components/CRUDforMe';
import CrudUsers from './components/CrudUsers';
import EditUser from './components/EditUser';

import {BrowserRouter,Routes,Route} from 'react-router-dom';  //BrowserRouter package used for change data w.r.t change in url.Routes used to wrap which componenets we have to route.Route package is for mention path for each component where to route.


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>     
        <Route path='/' element={<CRUDforMe />} />
      
          <Route path='/adduser' element={<AddUser />} />
          
          <Route path='/cruduser' element={<CrudUsers />} />
          <Route path='/edituser/:id' element={<EditUser />}/>
      
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}


export default App;
