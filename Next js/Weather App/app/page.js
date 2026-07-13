"use client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Page() {

  const [Temperature, setTemperature] = useState("");
  const [Location, setLocation] = useState("");
  const [Feellike, setFeellike] = useState("");
  const [Humidity, setHumidity] = useState("");
  const [Wind, setWind] = useState("");
  const [Rain, setRain] = useState("");
  const [City, setCity] = useState("Karachi");
  const [Time, setTime] = useState("");
  const [Date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  const submitClick = () => {
    const value = inputRef.current.value.trim();
    if (!value) return;

    setCity(value);
    inputRef.current.value = "";
  };

  useEffect(() => {

    const getData = async () => {
      try {
        setLoading(true);

        const res1 = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=118141e8d2b842639a683817260504&q=${City}&aqi=yes`
        );
        const data = await res1.json();

        const temperature = data.current.temp_c + "°C";
        const location = data.location.name;
        const feellike = data.current.feelslike_c + "°C";
        const humidity = data.current.humidity + "%";
        const wind = data.current.wind_kph + " km/h";

        const hour = Number(
          data.location.localtime.split(" ")[1].split(":")[0]
        );

        const time =
          data.location.localtime.split(" ")[1].split(":").slice(0, 2).join(":") +
          " " +
          (hour >= 12 ? "PM" : "AM");

        const date = data.location.localtime
          .split(" ")[0]
          .split("-")
          .reverse()
          .join("-");

        setTemperature(temperature);
        setLocation(location);
        setFeellike(feellike);
        setHumidity(humidity);
        setWind(wind);
        setTime(time);
        setDate(date);

        const res2 = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=118141e8d2b842639a683817260504&q=${City}&days=1&aqi=yes`
        );
        const data2 = await res2.json();

        const rainPrediction =
          data2.forecast.forecastday[0].day.daily_chance_of_rain + "%";

        setRain(rainPrediction);

      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();

  }, [City]);

  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* SEARCH BAR */}
      <div className="flex gap-4 items-center p-3 w-[95%] max-w-xl mx-auto my-6 rounded-full bg-white">

        <input
          ref={inputRef}
          type="search"
          placeholder="Enter a city name"
          className="text-gray-500 border-none focus:outline-none w-full px-2 text-[18px]"
        />

        <button
          onClick={submitClick}
          disabled={loading}
          className="bg-orange-400 text-white text-[16px] px-4 py-2 rounded-full flex items-center justify-center"
        >
          {loading ? (
            <div className="w-5 h-5 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          ) : (
            "Search"
          )}
        </button>

      </div>

      {/* MAIN SECTION */}
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center w-[95%] md:w-[65%] mx-auto gap-6">

        <div className="w-full md:w-1/2 text-center md:text-left">

          <h2 className="text-blue-500 text-4xl md:text-6xl my-4 font-bold">
            {Location}
          </h2>

          <p className="text-gray-600">{Time}</p>
          <p className="text-gray-600">{Date}</p>

          <p className="text-blue-500 text-4xl md:text-6xl my-4">
            {Temperature}
          </p>

        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            className=" w-[200px] sm:w-[250px] md:w-[400px]"
            src="/Weather.png"
            alt="Weather"
            width={400}
            height={400}
          />
        </div>

      </div>

      {/* GRID */}
      <div className="p-3 grid grid-cols-2 w-[95%] md:w-[70%] mx-auto rounded-2xl my-4 bg-white gap-4">

        <div className="flex items-center gap-2">
          <img width="40" src="https://img.icons8.com/stickers/100/temperature.png" />
          <p>Feels like <br /> {Feellike}</p>
        </div>

        <div className="flex items-center gap-2">
          <img width="40" src="https://img.icons8.com/officel/80/water.png" />
          <p>Humidity <br /> {Humidity}</p>
        </div>

        <div className="flex items-center gap-2">
          <img width="40" src="https://img.icons8.com/pastel-glyph/64/wind--v1.png" />
          <p>Wind <br /> {Wind}</p>
        </div>

        <div className="flex items-center gap-2">
          <img width="40" src="https://img.icons8.com/officel/80/rain.png" />
          <p>Rain <br /> {Rain}</p>
        </div>

      </div>

    </div>
  );
}