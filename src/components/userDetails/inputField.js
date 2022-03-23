import React from 'react'
import { Box, TextField, Typography } from '@mui/material'

export default function InputField({ label, value }) {


    return (
        <Box sx={{ width: '100%' }} >
            <Typography fontSize='14px' color='#717171' mb='4px' > {label} </Typography>
            <TextField fullWidth
                value={value}
                variant='standard'
                spellCheck={false}
                sx={{ border: '1px solid #e2e2e2', borderRadius: '8px', px: 1, py: 0.5, bgcolor: '#f4f4f4', mb: 4 }}
                InputProps={{
                    disableUnderline: true,
                    style: { fontSize: '15px', }
                }}
            />
        </Box>
    )
}
