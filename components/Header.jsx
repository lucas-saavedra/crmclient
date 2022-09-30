import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { GET_USER } from '../graphql/queries/user.queries'
const Header = () => {
    const router = useRouter()
    const { data, loading, error } = useQuery(GET_USER);

    if (loading) return <p>Loading...</p>
    if (!data.getUser) {
        router.push('/login')
    }
    const { name, lastname } = data.getUser;
    const logOut = () => {
        localStorage.removeItem('token');
        router.push('/login')
    }

    return (
        <div className='sm:flex justify-between mb-6'>
            <p className='mr-2 mb-5 lg:mb0'>Hello {name} {lastname}  </p>
            <button
                onClick={() => logOut()}
                className='bg-blue-800 w-full sm:w-auto font-bold uppercase text-xs text-white rounded py-1 px-2 shadow-md' type='button' >Logout</button>
        </div>

    )
}

export default Header