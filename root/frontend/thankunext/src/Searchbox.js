import React from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

function Search() {
    return(
        <>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <>
            <Button variant="contained" color="success">Search</Button>
            </>
        </>
    );
}
export default Search;