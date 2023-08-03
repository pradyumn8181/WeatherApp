import { View, Text, ScrollView } from "react-native";
import React from "react";
import styles from './home.style'
import WeatherSearch from '../Weather/Search/weather.search'
import ErrorBoundary from "../error/error.boundry";

const Home = () =>{
    return(
        <ErrorBoundary>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Welcome USER!</Text>
                </View>
                <ScrollView>
                    <WeatherSearch />
                </ScrollView>
            </View>
        </ErrorBoundary>
    )
}

export default Home
  