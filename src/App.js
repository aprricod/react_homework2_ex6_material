import {
  AppBar,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import { Button } from "bootstrap";
import React from "react";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "ec508e7558ba821e57493464ce94b92d";

class App extends React.Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined,
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Не указан город",
      });
    }
  };

  render() {
    return (
      <>
        <AppBar position="fixed">
          <Container fixed>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">Погодное приложение</Typography>
              <Box>
                <Button color="inherit" variant="outlined">
                  Войти
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Card mr={10}>
          <Container>
            {/* <Info /> */}
            {/* weatherMethod - это свойство, которое сам создаю */}
            <Form weatherMethod={this.gettingWeather} />
            <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </Container>
        </Card>
      </>
    );
  }
}
export default App;
