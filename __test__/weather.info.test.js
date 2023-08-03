import React from "react";
import { fireEvent, render, screen } from "@testing-library/react-native";
import WeatherInfo from "../src/Weather/Info/weather.info";
import { MockWeatherData } from "./mock_weather_data";

describe('<WeatherInfo />', () => {

    it('expect Modal to be called when button clicked', () => {
        const {getByTestId} = render(<WeatherInfo weatherData={MockWeatherData}/>);

        const button = getByTestId("MoreInfo");
        fireEvent.press(button); // Pressing Button to open the modal

        const modal = getByTestId("SevenDayModal")
        expect(modal).toBeCalled
    })

    it('expect Modal to be closed when button clicked', () => {
        const {getByTestId} = render(<WeatherInfo weatherData={MockWeatherData}/>);

        const button = getByTestId("MoreInfo");
        fireEvent.press(button); // Pressing Button to open the modal

        const Closebutton = getByTestId("CloseModal");
        fireEvent.press(Closebutton); // Pressing Button to close the modal

        const modal = getByTestId("SevenDayModal")
        expect(modal).toBeCalled
    })

    it('expect Modal Info to be present when button clicked', () => {
        const {getByTestId} = render(<WeatherInfo weatherData={MockWeatherData}/>);

        const button = getByTestId("MoreInfo");
        fireEvent.press(button); // Pressing Button to open the modal

        const modal = getByTestId("SevenDayModal")
        expect(modal).toBeCalled

        expect(screen.queryByTestId("ModalInfo")).toBeDefined
    })

    it('expect More Info Button & Today Forecast Info to be present', () => {
        render(<WeatherInfo weatherData={MockWeatherData}/>);

        expect(screen.queryByTestId("TodayForecast")).toBeDefined
        expect(screen.queryByTestId("MoreInfo")).toBeDefined
    })
})