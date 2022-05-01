import React from "react";
import Typography from '@mui/material/Typography';
//import { fontFamily } from "@mui/system";


function Title () {
  return (
    <div className="Title" >
      <Typography variant="h1" align="center" color={'green'} > Thank U Next </Typography>        
      <Typography variant="h4" component="h2" align="center" color={'green'}> Find any song you want by typing in the search box below: </Typography>
      </div>
       
    );
}

export default Title;