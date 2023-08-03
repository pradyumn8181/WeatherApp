import { View, Text, SafeAreaView, Image, Pressable, Modal, Alert, ScrollView } from "react-native"
import React, { useState } from 'react'
import { GetWeatherMetaData, GetWeatherResponse } from "../../api/response";
import moment from "moment";
import styles from './weather.info.style'
import { trackEvent } from "@aptabase/react-native";
import { IDisplayForecast } from "../../types";

const WeatherInfo = ({weatherData} : any) => {

    const [modalVisible, setModalVisible] = useState(false);
    let responseData: GetWeatherResponse = weatherData;
    let responseMetaData: GetWeatherMetaData[] = responseData.list;

    // Generic method to display the weather forecast
    function DisplayForecast(props: IDisplayForecast){
        return(
            <View style={styles.futureInfo}>
                <View style={styles.futureTemp}>
                    <Text style={styles.futureText}>{moment().add(props.day, 'days').format('dddd')}</Text>
                        <Image 
                            style={styles.smallIcon}
                            source={{uri: `http://openweathermap.org/img/wn/${responseMetaData[props.id].weather[0].icon}.png`}}
                        />
                        <Text style = {styles.highLowTemp}>
                            H: {responseMetaData[props.id].main.temp_max} °
                        </Text>
                        <Text style = {styles.highLowTemp}>
                            L: {responseMetaData[props.id].main.temp_min} °
                        </Text>
                </View>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style ={{alignItems: 'center'}}>
                <Text style={styles.title}>{responseData.city.name}</Text>
            </View>
            <View style={styles.todayTemp} testID="TodayForecast">
                <Text style = {styles.currentTemp}>
                    {responseMetaData[0].main.temp}°
                </Text>
                <View style={styles.iconAndDes}>
                    <Image 
                        style={styles.mediumSmallIcon}
                        source={{uri: `http://openweathermap.org/img/wn/${responseMetaData[0].weather[0].icon}.png`}}
                    />
                    <Text style={styles.description}>{responseMetaData[0].weather[0].description}</Text>
                </View>

                <View style = {styles.maxMinTemp}>
                    <Text style = {styles.todayHighLowtemp}>
                        H: {responseMetaData[0].main.temp_max} °
                    </Text>
                    <Text style = {styles.todayHighLowtemp}>
                        L: {responseMetaData[0].main.temp_min} °
                    </Text>
                </View>
            </View>
            
            <DisplayForecast id={7}  day={1} />
            <DisplayForecast id={15} day={2}/>

            <View style={styles.buttonInfo}>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                    }}
                    testID="SevenDayModal"
                >
                    <ScrollView style={styles.modalView} testID="ModalInfo">
                    <View style={styles.centeredView}>
                        <View style ={{alignItems: 'center', flexDirection: 'row', marginLeft: 17, marginTop: 10}}>
                            <Image
                                style={styles.extraSmallIcon}
                                source={require('../../../assets/Calender.png')}
                            />
                            <Text style={styles.headerTitle}>7-DAY FORECAST</Text>
                        </View>
                        <DisplayForecast id={7}  day={1} />
                        <DisplayForecast id={15} day={2}/>
                        <DisplayForecast id={23} day={3}/>
                        <DisplayForecast id={31} day={4}/>
                        <DisplayForecast id={39} day={5}/>
                        <DisplayForecast id={39} day={6}/>
                        <View style={styles.futureInfo}>
                            <View style={styles.futureTemp}>
                                <Text style={styles.futureText}>{moment().add(7, 'days').format('dddd')}</Text>
                                <Image 
                                    style={styles.smallIcon}
                                    source={{uri: `http://openweathermap.org/img/wn/${responseMetaData[39].weather[0].icon}.png`}}
                                />
                                <Text style = {styles.highLowTemp}>
                                    H: {responseMetaData[39].main.temp_max} °
                                </Text>
                                <Text style = {styles.highLowTemp}>
                                    L: {responseMetaData[39].main.temp_min} °
                                </Text>
                            </View>
                        </View>
                        <View style ={{alignItems: 'center', marginTop: 10}}>
                            <Pressable
                                style={[styles.roundButton]}
                                onPress={() => setModalVisible(!modalVisible)}
                                testID="CloseModal"
                            >
                                <Text style={styles.buttonTextStyle}>X</Text>
                            </Pressable>
                        </View>
                    </View>
                    </ScrollView>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => {
                        trackEvent("More info button click", { name: "User requested to see 7 day data" });
                        setModalVisible(true)
                    }}
                    testID="MoreInfo"
                >
                    <Text style={styles.buttonTextStyle}>More info!</Text>
                </Pressable>
            </View>

        </SafeAreaView>

    ) 
}

export default WeatherInfo