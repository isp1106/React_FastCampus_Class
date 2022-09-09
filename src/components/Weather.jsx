import useAsync from "../hooks/useAsync"
import getWeather from "../utils/getWeather"
function Weather() {
  const state = useAsync(getWeather)
  const {loading, data: weather, error} = state
  if(loading) return<>로딩중</>
  if(error) return<>{error}</>
  return (
    <div>
      {
        weather && weather.map((element, index) => {
          return (
            <p key={index}>
              {element.category},
              {element.fcstDate},
              {element.fcstTime},
              {element.fcstValue}
            </p>
          )
        })
      }
    </div>
  )
}

export default Weather