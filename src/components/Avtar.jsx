import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export const Avtar = ({single}) => {
    
    return (
        // <Stack direction="row" spacing={2}>
            <Avatar alt={single.first} src={single.picture} />
        // </Stack>
    );
}