import React, { useState } from 'react';
import TextField  from "@mui/material/TextField";
import Button  from "@mui/material/Button";

function Formulario({handleSubmit}) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          name,
          password,
        });
      } }
    >
      <TextField id="name"
        label="User Name"
        variant="outlined"
        fullWidth
        margin="normal">
        onChange={(e) => setName(e.target.value)}
      </TextField>
      <TextField id="password"
        type="password"
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal">
        onChange={(e) => setPassword(e.target.value)}
      </TextField>
      <Button 
        variant="contained"
        align="center"
      > Login</Button>
    </form>
  );
}

export default Formulario 
