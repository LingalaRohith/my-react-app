import React, { useState } from 'react';
import Header from './Header'; 
import './ManageUsers.css'; 

function ManageUsers() {
    const initialUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];

    const [users, setUsers] = useState(initialUsers);
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');

    const addUser = () => {
        const newUser = {
            id: users.length + 1,
            name: newUserName,
            email: newUserEmail,
        };
        setUsers([...users, newUser]);
        setNewUserName('');
        setNewUserEmail('');
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <Header /> {/* Render the Header at the top */}
            <div className="manage-users">
                <h2>Manage Users</h2>
                <div className="add-user-form">
                    <input type="text" placeholder="Name" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                    <input type="email" placeholder="Email" value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)} />
                    <button onClick={addUser}>Add User</button>
                </div>
                <ul className="user-list">
                    {users.map((user) => (
                        <li key={user.id}>
                            <span>{user.name} ({user.email})</span>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ManageUsers;
