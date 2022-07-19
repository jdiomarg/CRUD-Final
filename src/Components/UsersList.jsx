import React from "react";

const UsersList = ({ users, selectedUser, deleteUser }) => {

    return (
        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">
                        <ul className="userBoxes" style={{ textDecorationStyle: "none" }}>
                            {users.map((user) => (
                                <li className="userCards" key={user.id}>
                                    <h3 className="titleUser">
                                        {user.first_name} {user.last_name}
                                    </h3>
                                    <p>Email: <b>{user.email}</b></p>
                                    <p> Birthday: <b>{user.birthday}</b></p>
                                    <div className="button_list">
                                        <button
                                            className="edit_button"
                                            onClick={() => selectedUser(user)}
                                        >
                                            {" "}
                                            Edit{" "}
                                        </button>
                                        <button
                                            className="clear_button"
                                            onClick={() => deleteUser(user)}
                                        >Trash
                                        </button>
                                        <p>User Id: <b>{user.id}</b></p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersList;
