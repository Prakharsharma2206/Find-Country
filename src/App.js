
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import axios from 'axios';
import './App.css';
import SearchData from './SearchData';

function App() {
  const [input, setInput] = useState("");
  const [country, setCountry] = useState([]);

  const defaultcountry = ()=>{
    axios.get(`https://restcountries.com/v3.1/name/india?fullText=true`).then(response=>{

        setCountry(response.data[0])

  })
   }

 const handleClick = ()=>{
  axios.get(`https://restcountries.com/v3.1/name/${input}?fullText=true`).then(response=>{

    if(response.data[0].region=="Asia"){
      setCountry(response.data[0])
    }else{
      if(response.data[0].region){
        alert("Not an ASIAN Country");
      }
      setCountry("")
    }
  }).catch(()=>{
    alert("Please Enter a VALID country name!");
  })
 }

 const check= (event) =>{
   if(event.key==="Enter")
   {
     event.preventDefault();
   }
 }
  

  return (
    <div className="App">
      <header className="App-header">
      <form>
      <FormControl>
        <InputLabel>Country</InputLabel>
        <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
      </FormControl>
      <Button
          disabled={!input}
           onClick={handleClick}
          variant="contained"
          color="primary"
          onKeyPress={check}
        >
          Find
        </Button>
      </form>
      <SearchData country={country} />
      </header>
    

    </div>
  );
}

export default App;
