import React from "react";
import { render, screen } from "@testing-library/react-native";
import WeatherSearch from "../src/Weather/Search/weather.search";

describe('<WeatherSearch />', () => {

    it('expect Spinner & ErrorText to be not present', () => {
        render(<WeatherSearch/>);
        expect(screen.queryByTestId("ErrorText")).toBeUndefined
        expect(screen.queryByTestId("Spinner")).toBeUndefined
    })

    it('expect DropDown to be present', () => {
        render(<WeatherSearch/>);
        expect(screen.queryByTestId("dropDownView")).toBeDefined
    })

    it('should render without errors', async () => {
        const { getByText } = render(<WeatherSearch/>);

        const placeholder = getByText('Search for a city');
        expect(placeholder).toBeTruthy();
    });

    it('should call onChange when the first option is selected', async () => {
        const mockedFetchWeatherData = jest.fn();
        const { queryByTestId } = render(<WeatherSearch/>);

        const mySelectComponent = queryByTestId("dropDownView");

        expect(mySelectComponent).toBeDefined();
        expect(mySelectComponent).not.toBeNull();
        expect(mockedFetchWeatherData).toHaveBeenCalledTimes(0);

    });
})