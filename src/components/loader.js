
import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function Loader() {
    

    return (
        <Box sx={{position: 'absolute', top: '60px', left: '50%', transform: 'translateX(-50%)' }} >
            <CircularProgress />
        </Box>
    )
}
