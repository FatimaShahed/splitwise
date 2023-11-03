import React, {useState} from 'react';
import {Navigate, useNavigate} from "react-router-dom";

function LogIn() {
    const [user, setUser] = useState({
        email: '123@gmail.com',
        password: '',
    });
    // const [showLogin, setShowLogin] = useState(true)
    const navigate = useNavigate();
    const [UserArr, setUserArr] = useState([
        {
            id: 1,
            name: 'User1',
            email: '123@gmail.com',
            password: 'abcd'
        },
        {
            id: 2,
            name: 'User2',
            email: '123@gmail.com',
            password: 'abcd'
        },
        {
            id: 3,
            name: 'User3',
            email: '123@gmail.com',
            password: 'abcd'
        },
        {
            id: 4,
            name: 'User4',
            email: '123@gmail.com',
            password: 'abcd'
        },
        {
            id: 5,
            name: 'User5',
            email: '123@gmail.com',
            password: 'abcd'
        },
    ]);
    const handleEmail = (event) => {
        const {value} = event.target;
        setUser({
            ...user,
            email: value,
        });
    };

    const handlePassword = (event) => {
        const {value} = event.target;
        setUser({
            ...user,
            password: value,
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const result = UserArr.filter((item) => {
            return item.email === user.email;
        });

        if (result.length > 0) {
            alert('Successfully Logged In');
            navigate("/main")
            // setShowLogin(false)
            // return handleView();
            // navigate('/productsList', {
            //     state: {
            //         // Your props here
            //         setShowLogin: setShowLogin,
            //         showLogin: showLogin
            //         // You can pass any data as props
            //     },
            // });

        }
        else {
            // setShowLogin(true)

            alert('Incorrect Email or Password');
        }
    };

    const renderLogin = () =>

        (<div style={{display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', }}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={handleEmail}
                    />
                </div>
                <br/>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={user.password}
                        onChange={handlePassword}
                    />
                </div>
                <br/>
                <div>
                    <input type="submit" value="LogIn"/>
                </div>
                <br/>
            </form>

        </div>);

    return (<div>
            {renderLogin()}
        </div>
    );
}

export default LogIn;
