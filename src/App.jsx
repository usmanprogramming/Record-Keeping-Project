import React from "react";
import Header from "./components/Header";
import "./styles/app.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    setData({ name: name, email: email });
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="input-fields">
          <Stack spacing={2} direction="row">
            <TextField
              value={name}
              id="outlined-basic"
              label="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              value={email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button onClick={addData} variant="contained">
              <AddIcon />
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default App;
