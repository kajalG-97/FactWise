import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@mui/material"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleData } from "../redux/celebrities/celAction";
import { Avtar } from "./Avtar";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from "@mui/system"

import { DeleteModal } from "./DeleteModel";
import { EditModal } from './EditModel';


export const Acc = ({single,i,handleChange,expanded}) => {
  console.log('sinfghjkgle', single);
  
const dispatch = useDispatch();

const handleEdit = (e)=>{
dispatch(getSingleData(single.id))
}

  return (
    <div>
      <Accordion expanded={expanded === `panel${i}`} sx={{ width: "100%", pl: 2, pr: 2, borderRadius: "10px",m:1, boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px` }} onChange={handleChange(`panel${i}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{flexShrink: 0 , display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", width: "45%", border: 0, alignItems: "center" }}>
              <Avtar single={single} /> <h3>{single.first} {single.last}</h3>
            </Box>
            
          </Box>

        </AccordionSummary>
        <AccordionDetails>
         
          <Box sx={{ pt: 1, display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between" }} >
            <Box><Typography sx={{ color: 'text.secondary' }}>Age</Typography><Typography sx={{}}>{single.dob}</Typography></Box>
            <Box><Typography sx={{ color: 'text.secondary' }}>Gender</Typography><Typography sx={{}}>{single.gender}</Typography></Box>
            <Box><Typography sx={{ color: 'text.secondary' }}>Country</Typography><Typography sx={{}}>{single.country}</Typography></Box>
          </Box>

          <Box sx={{ mt: 4, width: "95%", border: 0, pb: 1 }}>
            <Typography sx={{ color: 'text.secondary', textAlign: "left" }}>Description</Typography>
            <p >{single.description}</p>
          </Box>
          <Box sx={{ display: "flex", width: "18%", justifyContent: "space-between", pb: 2, alignContent: "", ml: 38 }}>
            <DeleteModal id={single.id} />
            <EditModal single={single} onClick={handleEdit}/>
          </Box>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
