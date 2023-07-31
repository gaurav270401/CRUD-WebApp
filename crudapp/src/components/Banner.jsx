import { Box, Typography, styled } from "@mui/material"
const Image=styled(Box)`
  background:url(https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000) center/55% repeat-x #000;
  width:100%;
  height:50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Heading=styled(Typography)`
    color:#FFFFFF;
    font-size:100px;
    line-height:1;
`;

const Banner = () =>{
  
    return(
        
        <Image>
           <Heading>C R U D</Heading>
        </Image>
       
    );
    
  }

export default Banner;