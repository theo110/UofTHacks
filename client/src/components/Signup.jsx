import React, { useState, useEffect, } from 'react'



function SignUp(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    //True is logged in false is not
    const [loginStatus, toggleLoginStatus] = useState(props.loginStatus);
    const [currAccounts, setCurrAccounts] = useState(null);

    function changeUser(e) {
        setUsername(e.target.value)
    }

    function changeEmail(e) {
        setEmail(e.target.value)
    }

    function changePassword(e) {
        setPassword(e.target.value)
    }

    /*
    const Account = new mongoose.model('Account', new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    info: {
        location: {
            type: String,
            required: true
        },
        preferences: []
    }
    }));
    */

    function onSubmit(e) {
        //Store in database
        for (let i = 0; i < currAccounts.length; i++) {
            if (currAccounts[i].username === username) {
                alert("username taken")
                break;
                //Handle username taken.
            }
        }

        const account = {
            username: username,
            password: password,
            email: email,
            info: {
                location: '',
                preferences: []
            }
        }
        
        const request = {
            method: "POST",
            body: JSON.stringify(account),
            headers: {
                "Content-Type": "application/json"
            }
        };
        
        try{
            fetch("/api/newUser",request).then(console.log("zucc"))
        } catch(e){
            console.log(e)
        }

        e.preventDefault();
    }

    //Fetch accounts data
    useEffect(() => {
        if (loginStatus) {
            alert("already logged in");
            //Redirect
        }
        async function fetchAccountData() {
            try {
                const accounts = await fetch("http://localhost:5000/api/userData");
                const accountData = await accounts.json();
                console.log(accountData)
                return accountData
            } catch (e) {
                console.log(e)
            }
        }
        fetchAccountData().then(accounts => {
            setCurrAccounts(accounts);
            console.log("firstuers")
            console.log(accounts[0].username);
        })
    },[]);

    return (
        <>
            <h1>Sign Up Here</h1>
            <form onSubmit={onSubmit}>
                <label>Username: </label>
                <input type="text" name="username" onChange={changeUser}></input>
                <label>Email: </label>
                <input type="email" name="email" onChange={changeEmail}></input>
                <label>Password: </label>
                <input type="password" name="password" onChange={changePassword}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default SignUp;