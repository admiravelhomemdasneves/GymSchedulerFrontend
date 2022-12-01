import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Professor(){
    const PaperStyle = {padding: "50px 20px", width:500, margin: "20px auto"}
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [phoneNumber, setPhoneNumber]=useState('')
    const [professors, setProfessors]=useState([])
    const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const professor={firstName, lastName, phoneNumber}
    console.log(professor)
    fetch("http://localhost:8080/professor",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(professor)
    }).then(()=>{
      console.log("New Professor added!")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8080/professor")
    .then(res=>res.json())
    .then((result)=>{
      setProfessors(result);
    })
  }, [])

  return (
    <Container className='professor'>
      <Paper elevation={3} style={PaperStyle}>
        <h5 style={{color:"blue"}}> <u>Professors List</u> </h5>
        <form className={classes.root} noValidate autoComplete='off'>

        <TextField id="outlined-basic" label="Professor First Name" variant="outlined" fullWidth
        value={firstName}
        onChange={(e)=>setFirstName(e.target.value)}
        /> 
        <TextField id="outlined-basic" label="Professor Last Name" variant="outlined" fullWidth
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}
        /> 
        <TextField id="outlined-basic" label="Professor Phone Number" variant="outlined" fullWidth
        value={phoneNumber}
        onChange={(e)=>setPhoneNumber(e.target.value)}
        /> 

        <Button variant='contained' color="secondary" onClick={handleClick}>
          Submit
        </Button>
        </form>
      </Paper>

        <h1>Professors</h1>

      <Paper elevation={3} style={PaperStyle}>

        {professors.map(professor=>(
          <Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={professor.id}>
            <h5>Id:</h5>{professor.idProfessor}
            <h5>First Name:</h5>{professor.firstName}
            <h5>Last Name:</h5>{professor.lastName}
            <h5>Phone Number:</h5>{professor.phoneNumber}
          </Paper>
        ))}
      </Paper>

    </Container>
  );
}