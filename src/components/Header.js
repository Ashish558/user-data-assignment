import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Header({ text }) {

    return (
        <Box sx={{ py: { xs: 1, lg: 2, backgroundColor: '#C1CEFE' } }} >
            <Typography variant='h5' align='center' >
                {text}
            </Typography>
        </Box>
    )
}
