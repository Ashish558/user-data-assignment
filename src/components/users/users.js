import { Box, List } from '@mui/material'
import React from 'react'
import { useGlobalContext } from '../../context'
import Loader from '../loader'
import SingleUser from './singleUser'

export default function Users() {

    const { users, loading } = useGlobalContext()
    return (
        <Box>
            <List sx={{ width: '100%', position: 'relative' }} >
                {loading && <Loader />}
                {!loading && users.map(user => {
                    return <SingleUser key={user.id} {...user} />
                })}
            </ List>
        </Box>
    )
}
