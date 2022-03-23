import { Grid } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import UserDetails from '../components/userDetails/userDetails'
import UserModal from '../components/userDetails/UserModal/UserModal'
import Users from '../components/users/users'

export default function Home() {


    return (
        <Grid container sx={{ minHeight: '80vh', px: { lg: 1 }, pt: { lg: 7 } }} >
            <Grid item xs={12} lg={6}
                sx={{
                    px: { lg: 3 },
                    minHeight: '500px'
                }} >
                <Header text='Users' />
                <Users />
            </Grid>
            <Grid item xs={12} lg={6}
                sx={{
                    px: { lg: 3 },
                    display: {xs: 'none', lg: 'block'}
                }}>
                    <UserDetails />
                    <UserModal />
            </Grid>
        </Grid>
    )
}
