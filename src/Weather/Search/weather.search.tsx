import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, Alert } from "react-native"
import React, { useState } from 'react'
import { SelectList } from "react-native-dropdown-select-list";
import { city } from "../../../utils/cityId";
import WeatherInfo from "../Info/weather.info";
import { trackEvent } from "@aptabase/react-native";
import styles from './weather.search.style';
import { API_KEY } from "../../api/keys";
import { GetWeatherResponse } from "../../api/response";

const WeatherSearch = () => {
    const [weatherData, setWeatherData] = useState<GetWeatherResponse | undefined>(undefined);
    const [dataAvailable, setIsDataAvailable] = useState<boolean>(true);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [notCompleted, setNotCompleted] = useState<boolean>(false);
    const data = city;
    let cityId : number = 292223;


    // Function to sort the list of cities in alphabatical order
    data.sort(function(a, b) {
        var textA = a.value.toUpperCase();
        var textB = b.value.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

    // Function to fetch the city id from city name
    function fetchIdFromCity(city: string){
        for(let obj of data){
            if(obj.value == city){
                cityId = obj.key;
                return cityId;
            }
        }
    }

    // Function to make API call and fetch response
    const fetchWeatherData = async (cityName: string) => {
        try{
            fetchIdFromCity(cityName);
            setLoaded(false);
            setNotCompleted(true);
            let response  = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&cnt=40&APPID=${API_KEY}&units=metric`)
            if(response.status == 200){
                const data = await response.json();
                setWeatherData(data);
                setLoaded(true);
            } else {
                // In case response status is not 200, then set weather data as undefined
                console.log("Response from API came as undefined")
                setIsDataAvailable(false)
                setWeatherData(undefined)
            }
            setNotCompleted(false);
        } catch(error : any){
            console.log(error);
            Alert.alert('Error', error.message)
            trackEvent("OpenWeather API", { msg: "API Call failed with some error" });
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.dropDown} testID="dropDownView">
                <SelectList
                    setSelected={(val: string) => {
                        trackEvent("Dropdown menu", { city: val });
                        fetchWeatherData(val)
                    }}
                    data={data}
                    placeholder="Search for a city"
                    save="value"
                    dropdownStyles={styles.dropDownStyle}
                    inputStyles={styles.dropDownStyle}
                    boxStyles={styles.dropDownStyle}
                    dropdownTextStyles={styles.dropDownText}
                />
            </View>
            {
                // If the weather data for a city is loaded then call the WeatherInfo otherwise show a Loading spinner
                loaded 
                    ?   <ScrollView>
                            <WeatherInfo weatherData={weatherData}/>
                        </ScrollView>
                    :         
                        notCompleted
                        &&  <View style={styles.container}>
                                    <ActivityIndicator size='large' color='white' testID="Spinner"/>
                            </View>

            }
            {
                // If data is not returned from the API then display the following message
                !dataAvailable && 
                <View style={styles.errorMessage}>
                    <Text style={styles.headerTitle} testID="ErrorText"> No Data Available for the Selected City!</Text>
                </View>
            }
        </SafeAreaView>
    )
}

export default WeatherSearch