
import Modal from '@mui/material/Modal'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Box, Button, Typography } from "@mui/material"
import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { celDeleteData } from '../redux/celebrities/celAction';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "40%",
    bgcolor: 'background.paper',

    borderRadius: 2, boxShadow: `rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px`
};

export const DeleteModal = ({id}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
        dispatch(celDeleteData(id));
    };

    return (
        <div>
            <DeleteForeverIcon color="error" onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                disableEnforceFocus

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box >
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "94%", p: 2 }}>

                            <p>Are you sure you want to delete?</p>
                            <CloseIcon onClick={handleClose} />
                        </Box>
                        <Box sx={{ width: "60%", ml: 26, border: 0, pb: 2, mt: 1 }}>
                            <Button
                                sx={[
                                    {
                                        boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                        m: 1,
                                        color: "#151515",
                                        bgcolor: "#e6e5e5",
                                        pl: 4, pr: 4, borderRadius: 3
                                    },
                                    () => ({
                                        "&:hover": {
                                            color: "#050505", bgcolor: "#f3eced"
                                        }
                                    }),
                                ]}
                                value="desc"
                                onClick={handleClose}
                                variant="text"
                            >
                                Cancel
                            </Button>
                            <Button
                                sx={[
                                    {
                                        boxShadow: "0 1px 4px 0 rgba(40, 44, 63, 0.4)",
                                        m: 1,
                                        color: "#ffffff",
                                        bgcolor: "#ef8624",
                                        pl: 4, pr: 4, borderRadius: 3
                                    },
                                    () => ({
                                        "&:hover": {
                                            color: "#fafafa", bgcolor: "#f3a96c"
                                        }
                                    }),
                                ]}
                                value="desc"
                                onClick={handleDelete}
                                variant="text"
                            >
                                Delete
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
