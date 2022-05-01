import React from "react";
import { Button } from "@mui/material";
import { Grid, TextField } from "@mui/material";

function Search() {
    return(
        <>
        <TextField id="outlined-basic" label="search" variant="outlined" 
                style={{ margin: "2rem 2rem", display: "inline", fontFamily: "Circular,Helvetica,Arial,sans-serif"}}/>
            <>
                <div style={{ margin: "2rem 2rem", display: "inline", fontFamily:"Circular,Helvetica,Arial,sans-serif"}}>                
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