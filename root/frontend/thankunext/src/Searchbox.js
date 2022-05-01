import React from "react";
import { Button } from "@mui/material";
import { Grid, TextField } from "@mui/material";

function Search() {
    return(
        <>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" 
        style={{margin: "2rem 2rem", display: "inline"}}/>
            <>
            <div style={{margin: "2rem 2rem", display: "inline"}}>                
                <Button 
                variant="contained" 
                color="success"
                size="medium"                       
                >Search
                </Button>
            </div>                              
            </>
        </>   
    );
}
export default Search;