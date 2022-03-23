import React from 'react'
import { TextField } from '@mui/material'

export default function UserBio({ value }) {


    return (
        <TextField fullWidth
            value={value}
            variant='standard'
            multiline
            spellCheck={false}
            rows={3}
            sx={{ border: '1px solid #e2e2e2', borderRadius: '8px', px: 1, py: 0.5, bgcolor: '#f4f4f4', mb: 4.5 }}
            InputProps={{
                disableUnderline: true,
                style: { fontSize: '14px',}
            }}
        />
    )
}
