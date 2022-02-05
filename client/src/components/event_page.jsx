import React, {useState, useEffect,} from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';

function Form(props){
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [author, setAuthor] = useState("");


    //True is logged in false is not
    const [loginStatus,toggleLoginStatus] = useState(props.loginStatus);
    const [error,setError] = useState(false);


    function changeName(e){
        setUsername(e.target.value)
    }
    function changeLocation(e){
        setPassword(e.target.value)
    }
    function changeActivityLevel(e){
        setActivityLevel(e)
    }
    function changeDescription(e){
        setDescription(e)
    }

    export default function StaticTimePickerLandscape() {
        const [time, setTime] = React.useState(new Date());
      
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticTimePicker
              ampm
              orientation="landscape"
              openTo="minutes"
              time={time}
              onChange={(newTime) => {
                setTime(newTime);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        );
      }
    function changeAuthor(e){
        setAuthor(e)
    }

    function onSubmit(e){
        console.log(name + "|" + location + "|" + activityLevel + "|" + description + "|" + time + "|" + author)
        e.preventDefault();
    }

    return(
        <>
            <h1>Enter Details</h1>
            <form onSubmit={onSubmit}>
                <label>Name of Activity: </label>
                <input type="text" name="name" onChange={changeName}></input>
                <label>Location: </label>
                <input type="text" name="location" onChange={changeLocation}></input>
                <label>Activitiy Level
                    <select value={this.state.value} onChange={changeActivityLevel}>
                        <option value="light">Light intensity</option>
                        <option value="moderate">Moderate intensity</option>
                        <option value="vigorous">Vigorous intensity</option>
                    </select>
                </label>
                <label>Enter details to narrow down search</label>
                <input type="text" name="description" onChange={changeDescription}></input>
                <label>Select time</label>
                <input type="text" name="time" onChange={setTime}></input>
                <label>Author: IDK What this is</label>
                <input type="text" name="author" onChange={changeAuthor}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </>
    )
}

export default Login;