import axios from "axios";
import React, { useEffect, useState } from "react";

export default function UsersForms({ getUsers, userSelected, deselectUser }) {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        }
    }, [userSelected]);

    const submit = (e) => {
        e.preventDefault();
        const user = {
            first_name: name,
            last_name: lastname,
            email: email,
            password: password,
            birthday: birthday
        };
        if (userSelected !== null) {
            alert("USER UPDATED");
            axios
                .put(
                    `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
                    user
                )
                .then(() => {
                    reset();
                });
        } else {
            alert("USER CREATED");
            axios
                .post("https://users-crud1.herokuapp.com/users/", user)
                .then(() => {
                    getUsers();
                    reset();
                })
                .catch((error) => console.log(error.response));
            console.log(user);
        }
    };

    const reset = () => {
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirthday("");
    };

    return (
        <form onSubmit={submit}>
            <div className="container">
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h1 className="newUserTitle">Create New User</h1>
                            <div className="form-group">
                                <label htmlFor="name">First Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Last Name </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastname}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-check-label" htmlFor="birthday">
                                    birthday
                                </label>
                                <input
                                    type="date"
                                    className="form-check-input"
                                    id="birthday"
                                    onChange={(e) => setBirthday(e.target.value)}
                                    value={birthday}
                                />
                            </div>
                            <div className="buttons">
                                <button className="secundary" type="submit">
                                    {userSelected !== null ? "Update" : "Create"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
