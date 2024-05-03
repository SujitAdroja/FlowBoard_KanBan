import { React, useEffect, useState } from "react";
import { Container, TextField, Stack, Button, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useDispatch } from "react-redux";
import { Login } from "../feature/login";
const initForm = {
  email: "",
  password: "",
};

function AauthScreen() {
  useEffect(() => {
    localStorage.setItem("login", false);
    window.addEventListener("online", function () {
      console.log("online");
    });
  });
  const [login, setLogin] = useState(true);
  const [form, setForm] = useState(initForm);
  const authText = login ? "Do not have account?" : "Already have an account?";

  const dispatch = useDispatch();

  const handleChange = function (event) {
    setForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 10,
      }}
    >
      <Stack mb={6} spacing={6} alignItems={"center"} textAlign={"center"}>
        <AcUnitIcon />
        <Typography>
          Visualize Workflow With Increased Productivity. <br />
          Access your work anywhere AnyTime
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <TextField
          value={form.email}
          name="email"
          onChange={handleChange}
          label="Email"
        />
        <TextField
          value={form.password}
          name="password"
          onChange={handleChange}
          label="Password"
          type="password"
        />
        <Button
          disabled={!form.email.trim() || !form.password.trim()}
          sx={{ color: "white" }}
          size="large"
          variant="contained"
          onClick={() => {
            dispatch(Login());
          }}
        >
          {login ? "Login" : "Register"}
        </Button>
      </Stack>
      <Typography
        sx={{
          cursor: "pointer",
        }}
        textAlign={"center"}
        mt={3}
        onClick={() => setLogin(!login)}
      >
        {authText}
      </Typography>
    </Container>
  );
}

export default AauthScreen;
