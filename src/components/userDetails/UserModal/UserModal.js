import React from 'react'
import { Box, Modal } from '@mui/material'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useGlobalContext } from '../../../context';
import User from '../User';

//for mobile only
export default function UserModal() {
    const { selectedUser, isModalOpen, setIsModalOpen } = useGlobalContext()
    const handleClose = () => setIsModalOpen(false)

    return (
        <Modal open={isModalOpen} onClose={handleClose}
            sx={{
                minHeight: '100vh',
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
            <Box sx={styles.wrapper} >
                <User {...selectedUser} />
                <CancelRoundedIcon
                    sx={{ position: 'absolute', right: '18px', top: '18px', color: '#515151' }}
                    onClick={handleClose} />
            </Box>

        </Modal>
    )
}


const styles = {

    wrapper: {
        position: 'relative',
        width: { xs: '95%', sm: '90%' },
        minWidth: '250px',
        maxWidth: '650px',
        bgcolor: 'white',
        py: 1,
        borderRadius: 3
    }
}