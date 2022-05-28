import { Avatar } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCelData, getSingleData } from "../redux/celebrities/CELAction";
import { Avtar } from "./Avtar";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Acc } from "./Acc";

export const CardItem = () => {

    
    const dispatch = useDispatch();

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        dispatch(getCelData());
    }

    const { celList } = useSelector((store) => store.celebrities)
   

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{m:"auto",width:"40%",border:0}}>
            {celList && celList.map((single, i) => <Acc single={single} i={i} handleChange={handleChange} expanded={expanded} />)}

        </Box>

    )
}