import React from "react";
import Header from "./components/Header";
import "./styles/app.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const App = () => {
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  // functions
  const addItem = () => {
    if (name === "" || email === "") {
      alert("Name and email are required.");
    } else {
      setData([...data, { name: name, email: email }]);
      setName("");
      setEmail("");
    }
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        {/* form */}
        <div className="form">
          <Stack spacing={2} direction="row">
            <TextField
              value={name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              inputProps={{ maxLength: 30 }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              inputProps={{ maxLength: 30 }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={addItem} variant="contained">
              <AddIcon />
            </Button>
          </Stack>
        </div>

        {/* Data */}
        <div className="data">
          <div className="data-heading">
            <h1>Name</h1>
            <h1>Email</h1>
            <h1>Remove</h1>
          </div>

          {data.map((element, index) => {
            return (
              <div key={index} className="data-val">
                <p>{element.name}</p>
                <p>{element.email}</p>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeItem(index)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
