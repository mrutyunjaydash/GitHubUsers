import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import UsersPage from './UsersPage';

const GetUsersAPI = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    const getUsers = async() =>{
        try{
                    
            const response = await fetch("https://api.github.com/users");
            setLoading(false);
            setUsers(await response.json());
        }
        catch(error)
        {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(()=>{
        getUsers();
    },[]);

    if(loading){
        return(
            <Loader />
        )
    }

    return (
       <UsersPage users={users} />
    );
};

export default GetUsersAPI;