  // API Response structure
  export type GetWeatherResponse = {
    cod: string;
    message: number;
    cnt: number;
    list: GetWeatherMetaData[],
    city: {
      id: number;
      name: string;
      coord: {
        lon: number;
        lat: number;
      };
      country: string;
      population: number;
      timezone: number;
      sunrise: number;
      sunset: number;
    }
  };

  // Meta data for API Response
  export type GetWeatherMetaData = {
      dt: number;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;    
        temp_kf: number;
      };
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      clouds: {
        all: number;
      };
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
      visibility: number;
      pop: number;
      sys: {
        pod: string;
      };
      dt_txt: string;
  };
  