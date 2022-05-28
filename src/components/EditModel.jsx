
import Modal from '@mui/material/Modal'

import { Box, Button, Typography } from "@mui/material"
import InputLabel from "@mui/material/InputLabel";
import { FormControl } from "@mui/material"

import MenuItem from "@mui/material/MenuItem";


import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { celPatchData, getSingleData } from "../redux/celebrities/celAction";
import { Avtar } from "./Avtar";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    bgcolor: 'background.paper',

    borderRadius: 2, boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`
};

export const EditModal = ({single}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const dispatch = useDispatch();

    const navigate = useNavigate();
        
        // const { single } = useSelector((store) => store.celebrities)
        console.log('single', single);
    
        const [data, setData] = useState({});
    
        useEffect(() => {
    
            // getData()
            setData(single);
        }, [])
    
        // const getData = () => {
        //     dispatch(getSingleData(id));
        // }
    
    
        const getformData = (e) => {
    
            let { id, value } = e.target;
    
            setData({ ...data, [id]: value });
    
        };
    
        const handleChangeOption = (e) => {
            setData({ ...data, city: e.target.value });
        }
    
        const handleSubmit = (e) => {
    
    
            e.preventDefault();
    
            dispatch(celPatchData(data.id,data, navigate));
    
        };
    
        const Option = ["Rather not say", "female", "male","Transgender","Other"];
    
        const { first,
            last,
            dob,
            gender,
            country,
            description } = data;
    

    return (
        <div>
          
            <EditIcon onClick={handleOpen} color="secondary" />
            <Modal
                open={open}
                onClose={handleClose}
                disableEnforceFocus

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box component="form" sx={{ width: "95%",p:2, pl: 2, pr: 2, borderRadius: 2, boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px` }}>
                        <Box sx={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", width: "45%", border: 0, alignItems: "center" }}>
                                <Avtar single={data} />
                                <TextField
                                    required
                                    sx={{ borderRadius: "10px", height: "50%" }}
                                    id="first"
                                    onChange={getformData}
                                    value={first }
                                    size="small"

                                />
                                 <TextField
                                    required
                                    sx={{ borderRadius: "10px", height: "50%" }}
                                    id="last"
                                    onChange={getformData}
                                    value={last}
                                    size="small"

                                />
                            </Box>
                            <Box><ExpandMoreIcon /></Box>
                        </Box>
                        <Box sx={{ pt: 1, display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }} >
                            <Box><Typography sx={{ color: 'text.secondary' }}>Age</Typography><TextField
                                required
                                sx={{ borderRadius: "10px" }}
                                id="dob"
                                onChange={getformData}
                                value={dob}
                                size="small"

                            /></Box>
                            <Box><Typography sx={{ color: 'text.secondary' }}>Gender</Typography>
                                <Box sx={{ border: 0, m: 0, height: "fit-content" }}>
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
                                            id="gender"
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
                                    id="country"
                                    onChange={getformData}
                                    value={country}
                                    size="small"
                                />
                            </Box>
                        </Box>

                        <Box sx={{ mt: 4, width: "95%", border: 0, pb: 1 }}>
                            <Typography sx={{ color: 'text.secondary', textAlign: "left" }}>Description</Typography>

                            <TextField
                            id="description"
                                sx={{ width: "100%" }}
                                multiline
                                maxRows={4}
                                value={description}
                                onChange={getformData}
                            />
                        </Box>
                        <Box sx={{ display: "flex", width: "18%", justifyContent: "space-between", pb: 2, alignContent: "", ml: 38 }}>
                            <CancelIcon color="error" onClick={() => navigate("/")} />
                            <CheckCircleIcon color="success" onClick={handleSubmit} />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
