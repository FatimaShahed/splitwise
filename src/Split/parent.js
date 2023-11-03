import React, { useEffect, useState } from "react";

function Parent() {
    const [users, setUsers] = useState([
        { id: 1, name: 'User 1' },
        { id: 2, name: 'User 2' },
        { id: 3, name: 'User 3' },
        { id: 4, name: 'User 4' },
        { id: 5, name: 'User 5' },
    ]);

    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleUserClick = (userId) => {
        if (selectedUsers.includes(userId)) {
            setSelectedUsers(selectedUsers.filter((id) => id !== userId));
        } else {
            setSelectedUsers([...selectedUsers, userId]);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Selected Users: ', selectedUsers);
    };

    return (
        <div>
            <h2>Select Users</h2>

            <form onSubmit={handleFormSubmit}>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedUsers.includes(user.id)}
                                    onChange={() => handleUserClick(user.id)}
                                />
                                {user.name}
                            </label>
                        </li>
                    ))}
                </ul>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Parent;
