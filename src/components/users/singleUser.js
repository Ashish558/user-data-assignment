import { Avatar,  ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React from 'react'
import { useGlobalContext } from '../../context'
import useWindowDimensions from '../../hooks/useWindowDimensions'

export default function SingleUser({ id, Bio, avatar, jobTitle, profile }) {

    const { setSelectedUser, setIsModalOpen } = useGlobalContext()
    const { width } = useWindowDimensions()

    const { firstName, lastName } = profile

    const handleClick = () => {
        setSelectedUser({ Bio, avatar, jobTitle, profile })
        if(width < 970 ) return setIsModalOpen(true)
    }

    return (
        <ListItem sx={{
            background: '#f3f3f324', mb: '8px',
            '&:hover': { backgroundColor: '#f3f3f3' },
        }}
            onClick={handleClick}
        >
            <ListItemAvatar>
                <Avatar src={avatar} 
                  imgProps={{
                    onLoad: ()=> console.log('lo')
                }} />
            </ListItemAvatar>
            <ListItemText primary={`${firstName} ${lastName}`} />
        </ListItem>
    )
}
