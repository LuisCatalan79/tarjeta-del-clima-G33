import { useState } from "react"
import './WeatherCard.css'

const WeatherCard = ({ weather, temp }) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const handleChangeTemperture = () => {
        setIsCelsius(!isCelsius)
    }

    return (
        <article className="weather">
            <h1 className="weather__title">Weather App</h1>
            <h2 className="weather__subtitle">{weather?.name},{weather?.sys.country}</h2>
            <section className="weather__body">
                <header className="weather__img">
                    <img
                        className="weather__icon"
                        src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt=""
                    />
                </header>
                <article className="weather__info">
                    <h3 className="weather__info__title">"{weather?.weather[0].description}"</h3>
                    <ul className="weather__list">
                        <li className="weather__item">
                            <span className="weather__lable">Wind Speed:  </span>
                            <span className="weather__value"> {weather?.wind.speed} m/s</span>
                        </li>
                        <li className="weather__item">
                            <span className="weather__lable">Clouds:  </span>
                            <span className="weather__value"> {weather?.clouds.all} %</span>
                        </li>
                        <li className="weather__item">
                            <span className="weather__lable">Pressure:  </span>
                            <span className="weather__value"> {weather?.main.pressure} hPa</span>
                        </li>
                    </ul>
                </article>
            </section>
            <footer className="weather__footer">
                <h2 className="weather__temp">{
                    isCelsius
                        ? `${temp?.celsius} °C`
                        : `${temp?.fahrenheit} °F`
                }</h2>
                <button className="weather__btn" onClick={handleChangeTemperture}>Change Temperture</button>
            </footer>
        </article>
    )
}

export default WeatherCard