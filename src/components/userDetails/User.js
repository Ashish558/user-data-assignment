import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import InputField from './inputField'
import UserBio from './userBio'

export default function User(props) {
    const { Bio, avatar, jobTitle, profile: { email, firstName, lastName, username } = {} } = props

    const handleLoad = () => {
        console.log('loaded')
    }
    return (
        <Stack alignItems='center' sx={{ py: 3 }} >
            <Avatar src={avatar} sx={{ width: '100px', height: '100px', mb: 2 }}
                imgProps={{
                    onLoad: handleLoad,
                }}
            />
            <Typography mb={4} > @{username} </Typography>
            <Box sx={{ width: '80%' }} >
                <UserBio value={Bio} />
                <InputField label='Full Name' value={`${firstName} ${lastName}`} />
                <InputField label='Job Title' value={jobTitle} />
                <InputField label='Email' value={email} />
            </Box>
        </Stack>
    )
}
