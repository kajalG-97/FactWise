import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Acc } from "./Acc";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "13px",
    backgroundColor: "#f6f2f4c4",
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.10),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'secondary',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',

        [theme.breakpoints.up('sm')]: {
            width: '35ch',
            '&:focus': {
                width: '38ch',
            },
        },
    },
}));

export const SearchBar = () => {

    const [data, setData] = React.useState([]);

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };


    const handleChangee = (value) => {
        if (!value) {
            setData([]);
            return;
        }
        fetch(
            `http://localhost:2400/celebrities?q=${value}`
        )
            .then((res) => res.json())
            .then((json) => setData(json));
    };



    const optimize_function = useCallback(debounce(handleChangee), []);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (

        <Box sx={{ mt: 3, display: { xs: "none", md: "inline-block" }, height: "50px" }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search user"
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => optimize_function(e.target.value)}
                />
            </Search>

            <Box sx={{ mt: 1.4, boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px` }}>

                {data.length > 0 && (
                    <div style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                        textAlign: "left",

                        width: "100%",
                        height: "100px",
                        overflow: "scroll"
                    }} className="autocomplete">
                        <Box sx={{ m: "auto", width: "40%", border: 0 }}>
                            {data && data.map((single, i) => <Acc single={single} i={i} handleChange={handleChange} expanded={expanded} />)}

                        </Box>
                    </div>
                )}
            </Box>
        </Box>

    )
}