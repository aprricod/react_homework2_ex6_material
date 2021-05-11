// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import React from "react";

const Form = (props) => (
  <form onSubmit={props.weatherMethod}>
    <p>Узнайте погоду в вашем городе:</p>
    {/* <TextField id="standard-basic" name="city" label="Город" />
    <Button variant="contained" color="primary">
      Получить погоду
    </Button> */}

    <input type="text" name="city" placeholder="Город" />
    <button>Получить погоду</button>
  </form>
);

export default Form;
