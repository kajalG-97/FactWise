import { Avatar, FormControl } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { celPatchData, getSingleData } from "../redux/celebrities/celAction";
import { Avtar } from "./Avtar";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import MenuItem from "@mui/material/MenuItem";


import Select from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router";

export const EditPage = () => {

    const id = 2;

    const dispatch = useDispatch();

const navigate = useNavigate();
    
    const { single } = useSelector((store) => store.celebrities)
    console.log('single', single);

    const [data, setData] = useState({});

    useEffect(() => {

        getData()
        setData(single);
    }, [])

    const getData = () => {
        dispatch(getSingleData(id));
    }


    const getformData = (e) => {

        let { id, value } = e.target;

        setData({ ...data, [id]: value });

    };

    const handleChangeOption = (e) => {
        setData({ ...data, city: e.target.value });
    }

    const handleSubmit = (e) => {


        e.preventDefault();

        dispatch(celPatchData(id,data, navigate));

    };

    const Option = ["Rather not say", "female", "male"];

    const { first,
        last,
        dob,
        gender,
        country,
        description } = data;

    return (
        <Box component="form" sx={{ width: "30%", pl: 2, pr: 2, borderRadius: 2, boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px` }}>
            <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "45%", border: 0, alignItems: "center" }}>
                    <Avtar single={data} />
                    <TextField
                        required
                        sx={{ borderRadius: "10px", height: "50%" }}
                        id="outlined-required"
                        onChange={getformData}
                        value={first + " " + last}
                        size="small"
                    />
                </Box>
                <Box><ExpandMoreIcon /></Box>
            </Box>
            <Box sx={{ pt: 1, display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }} >
                <Box><Typography sx={{ color: 'text.secondary' }}>Age</Typography><TextField
                    required
                    sx={{ borderRadius: "10px" }}
                    id="outlined-required"
                    onChange={getformData}
                    value={dob}
                    size="small"

                /></Box>
                <Box><Typography sx={{ color: 'text.secondary' }}>Gender</Typography>
                    <Box sx={{ border: 1, m: 0, height: "fit-content" }}>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
                            <InputLabel
                                sx={[
                                    {
                                        color: "#202020",
                                    },
                                    () => ({ "&:hover": { color: "#202020", bgcolor: "#474747" } }),
                                ]}
                                id="demo-simple-select-standard-label"
                            >

                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={gender}
                                onChange={handleChangeOption}

                                sx={{
                                    width: "100%",
                                    mt: "-20px",
                                    border: "1px solid #b1b1b1",
                                    borderRadius: "5px",

                                    fontSize: "15px",
                                    color: "#888888",
                                }}
                            >

                                {Option &&
                                    Option.map((e) => {
                                        return (
                                            <MenuItem
                                                key={e}

                                                id={e}
                                                value={e}
                                            >
                                                {e}
                                            </MenuItem>
                                        );

                                    })}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ color: 'text.secondary' }}>Country</Typography>
                    <TextField
                        required
                        sx={{ borderRadius: "60px" }}
                        id="outlined-required"
                        onChange={getformData}
                        value={country}
                        size="small"
                    />
                </Box>
            </Box>

            <Box sx={{ mt: 4, width: "95%", border: 0, pb: 1 }}>
                <Typography sx={{ color: 'text.secondary', textAlign: "left" }}>Description</Typography>

                <TextField
                    sx={{ width: "100%" }}
                    multiline
                    maxRows={4}
                    value={description}
                    onChange={getformData}
                />
            </Box>
            <Box sx={{ display: "flex", width: "18%", justifyContent: "space-between", pb: 2, alignContent: "", ml: 38 }}>
                <CancelIcon color="error"  onClick={()=>navigate("/")}/>
                <CheckCircleIcon color="success" onClick={handleSubmit} />
            </Box>
        </Box>
    )
}