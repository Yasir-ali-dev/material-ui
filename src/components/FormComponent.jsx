import { Button, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const FormComponent = () => {
    const [inputs,setInputs]=useState({
        name:"",
        password:"",
        email:"",
        subscribe:false,
        age:10, 
        gender:"female"
    });
    const [isSubmit, setIsSubmit]=useState(false);

    const handleInputs=(e)=>{
        const {name,value}=e.target;
        setInputs((prevInputs)=>{
            return{
            ...prevInputs,
            [name]:value
            }
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setIsSubmit(true);
    }

  return (
    <>
    <form 
        onSubmit={handleSubmit} 
        style={{
            display:"flex",
            margin:"7px",
            justifyContent:"center", 
            flexDirection:"column"
        }}
    >
        <Stack direction={"row"} gap={2} spacing={2} m={1} justifyContent={"center"}>
            <TextField 
                label="Name" 
                name='name' 
                type='text' 
                onChange={handleInputs} 
                variant="outlined"
                size='small' 
            />
            <TextField 
                label="Email" 
                name='email' 
                type='email' 
                onChange={handleInputs} 
                variant="outlined"
                size='small' 
            />
            <TextField 
                label="Password" 
                name='password' 
                type='password' 
                onChange={handleInputs} 
                variant="outlined"
                size='small' 
            />
        </Stack>
        <Stack gap={2} spacing={2} m={1} direction={"row"} justifyContent={"center"}> 
            <FormGroup>
            <FormControlLabel 
                control={<Checkbox 
                            checked={inputs.subscribe} 
                            name='subscribe'
                            onChange={(e)=> setInputs((prev)=>{
                                const {name,checked}=e.target;
                                return {
                                    ...prev,
                                    [name]:checked
                                }
                            })}  
                        />} 
                label="Subscribe to Newsletter" />
            </FormGroup>
            <FormControl size='small' sx={{ m: 1, minWidth: 80 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={inputs.age}
                    label="Age"
                    name='age'
                    autoWidth
                    onChange={handleInputs}
                >
                    <MenuItem value={10}> Ten </MenuItem>
                    <MenuItem value={20}> Twenty </MenuItem>
                    <MenuItem value={30}> Thirty </MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group" 
                    value={inputs.gender}
                    name="gender"
                    onChange={handleInputs}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>
        </Stack>

        <Button color='secondary' size="small" type='submit'>Submit</Button>
    </form>
    <CardContent>
        {
        isSubmit && 
        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
            {Object.values(inputs)}       
        </Typography>
        }
    </CardContent>
    </>
  )

}

export default FormComponent
