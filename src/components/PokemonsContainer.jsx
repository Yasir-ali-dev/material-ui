import React, { useState } from 'react';
import Form from './Form';
import { useEffect } from 'react';

const ContainerStyle={
    display:"flex",
    justifyContent:"center",
    marginTop:"10px"
}


const PokemonsContainer = () => {
  const [value,setValue]=useState("");
  const [isLoading,setIsLoading]=useState(true);
  const [pokemons,setPokemons]=useState([]);
  useEffect(()=>{
    fetchData()

    setTimeout(()=>{
       setIsLoading(false);
    },1000)
  },[])

  const fetchData= async ()=>{  
    const response= await fetch("https://raw.githubusercontent.com/lucasbento/graphql-pokemon/master/src/pokemons/pokemons.json").res.json();
   console.log(response);     
  }

  const handleChange=(e)=>{
    setValue(e.target.value)
  }

  if(isLoading){
    return <h2 style={{textAlign:"center"}} >Loading ...</h2>
  }

  return (
    <div style={ContainerStyle}>
      <Form value={value} onChange={handleChange}/>
    </div>
  )
}

export default PokemonsContainer;

