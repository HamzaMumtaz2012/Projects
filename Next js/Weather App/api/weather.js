  async function getData() {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=118141e8d2b842639a683817260504&q=Karachi&aqi=yes`
      );
      
      const data = await res.json();
      console.log(data);
      const weather = data.current.temp_c;
      console.log(weather)
    } catch (error) {
      console.error(error);
      
    }
  }