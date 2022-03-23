import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from './services/users'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    const [errorMsg, setErrorMsg] = useState('')
    const [selectedUser, setSelectedUser] = useState({})

    const [loading, setLoading] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const getUserData = () => {
        setLoading(true)
        console.log('fetching')
        getUsers((err, res) => {
            if (err) {
                console.log(err)
                setErrorMsg('No data to show')
                return
            }
            setUsers(res.data)
            setLoading(false)
        })
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <AppContext.Provider
            value={{ users, setUsers, loading, selectedUser, setSelectedUser, isModalOpen, setIsModalOpen, errorMsg }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
