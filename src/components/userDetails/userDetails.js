import React from 'react'
import { Box, Typography } from '@mui/material'
import { useGlobalContext } from '../../context'
import Header from '../Header'
import User from './User'

export default function UserDetails() {
    const { selectedUser } = useGlobalContext()

    return (
        <Box>
            <Header text='User Detail' />
            {Object.keys(selectedUser).length === 0 ?
                <Typography color='#202020' align='center' mt='40px' > No user to show </Typography>
                :
                <User {...selectedUser} />
            }
        </Box>
    )
}
