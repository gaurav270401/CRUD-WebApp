import { Box, Typography, styled } from "@mui/material"
import Banner from "./Banner";

const Container=styled(Box)`
   padding:20px
`

const SubHeading=styled(Typography)`
 font-size:50px;
 font-weight:200;
`
const Containt=styled(Typography)`
    text-align:justify;
`
const Crud=styled(Typography)`
 padding:10px;
  text-align:left;
`
const CRUDforMe = () =>{
    return(
        <>
            <Banner/>
            <Container>
                <SubHeading>What is CRUD?</SubHeading>
                <Containt>CRUD stands for Create, Read, Update, and Delete. In ReactJS everything is aligned in a form of a component and every component has its own way and feature to do so.

React js is one of the most used JavaScript libraries for frontend development. It’s very important to have the basic functionality of CRUD operations in with react-js. In this article, we don’t use any JSON-server or Axios for performing the CRUD operation. We will use a simple JavaScript object to do so. </Containt>

<Crud>Create: Creating a post or adding the table row, adding data into the webpage, or creating content.</Crud>
<Crud>Read: Reading or retrieving data from web-page</Crud>
<Crud>Update: Updating or editing existing content in the webpage</Crud>
<Crud>Deleting: Deleting and removing the entry or content/post from the webpage</Crud>

            </Container>
        </>
        
            
    );
    
  }
  
  export default CRUDforMe;