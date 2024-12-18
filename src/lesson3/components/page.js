import { useEffect, useState } from "react";

function Weather(){
    const[Weather,setWeather]=useState([]);

    useEffect(()=>{
        const fetchWeather=async()=>{
            try{
                const response=await fetch('http://localhost:5099/WeatherForecast');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data=await response.json();
                //console.log(data);
                setWeather(data);
            }
            catch(error){
               console.log('error fetching Weather: ',error);
            }
        };
        fetchWeather();

    },[]
    );
  return(
    <>
    {Weather.map((w,index)=>(
        <p key={index}>
            {JSON.stringify(w)}
        </p>

    ))}
    </>
  );
}
export default Weather;