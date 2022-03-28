import React from 'react'
interface User {
    address: {},
    company: {},
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string,
}
interface Props {
    users: User[],
    handler: Function,
}

function Table({users,handler }: Props) {
    return (
    <table>
        <thead>
            <th onClick={(e) => handler(e)}>Name</th>
            <th onClick={(e) => handler(e)}>Username</th>
            <th onClick={(e) => handler(e)}>Email</th>
            <th onClick={(e) => handler(e)}>Website</th>
        </thead>
        
        {users.map((user: User) => {
            return(
                <tbody>
                    <td key={user.id}>{user.name} </td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                </tbody>
            )
            }
        )}
        

    </table>
    )
}

export default Table