import { collection, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebaseConfig';

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const usersData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        setUsers(usersData)

    }
    useEffect(() => { getUsers() }, [])



    return (
        <>
        <h1>Users Screen (Admin Only)</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Email</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((e) => {
                        return (
                            <tr key={e.id}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.id}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.email}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.selValue}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>
        </>
    )
}
export default Users