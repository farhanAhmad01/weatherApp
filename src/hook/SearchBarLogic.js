import { useContext } from "react";
import { useWeatherData } from "./useWeatherData";
import { WeatherDataContext } from "../context/weatherDataContext";

const useSearchBarLogic = () => {
  const { state, dispatch } = useContext(WeatherDataContext);
  const { fetchWeatherData } = useWeatherData(
    `${process.env.REACT_APP_API_LINK}/weather?q=${state.city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  const handleChange = (value) => {
    if (value.length >= 0) {
      dispatch({ type: "SET_CITY", payload: value });
    }
  };
  const fetchDetails = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };
  return { handleChange, fetchDetails };
};

export default useSearchBarLogic;
