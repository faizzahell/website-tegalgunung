import axios from "axios"
import React from "react"
import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudLightning,
  type LucideIcon,
} from "lucide-react"

export interface WeatherData {
  day: "Hari Ini" | "Besok" | "Lusa"
  date: string
  condition: string
  icon: React.JSX.Element
  temp: number
  humidity: number
  windSpeed: number
  precipitation: number
}

const LAT = -7.252461019484249
const LON = 109.89264339200045
const TZ = "Asia/Jakarta"

const URL =
  `https://api.open-meteo.com/v1/forecast` +
  `?latitude=${LAT}&longitude=${LON}` +
  `&forecast_days=3` +
  `&timezone=${encodeURIComponent(TZ)}` +
  `&wind_speed_unit=kmh` +
  `&daily=weather_code,temperature_2m_max,temperature_2m_min,` +
  `relative_humidity_2m_mean,wind_speed_10m_max,precipitation_sum`

const makeIcon = (Icon: LucideIcon, colorClass: string): React.JSX.Element =>
  React.createElement(Icon, {
    size: 24,
    className: `${colorClass} drop-shadow-lg`,
  })

const mapCode = (code: number): { txt: string; ic: React.JSX.Element } => {
  if (code === 0) return { txt: "Cerah", ic: makeIcon(Sun, "text-amber-400") }
  if (code === 1 || code === 2)
    return { txt: "Cerah Berawan", ic: makeIcon(CloudSun, "text-amber-400") }
  if (code === 3) return { txt: "Berawan", ic: makeIcon(Cloud, "text-slate-500") }
  if ([51, 53, 55, 61, 63, 65, 80].includes(code))
    return { txt: "Hujan Ringan", ic: makeIcon(CloudRain, "text-sky-500") }
  if ([81, 82].includes(code))
    return { txt: "Hujan Lebat", ic: makeIcon(CloudRain, "text-sky-700") }
  if ([95, 96, 99].includes(code))
    return { txt: "Badai Petir", ic: makeIcon(CloudLightning, "text-yellow-400") }
  return { txt: "Berawan", ic: makeIcon(Cloud, "text-slate-500") }
}

export const fetchWeather = async (): Promise<WeatherData[]> => {
  const { data } = await axios.get(URL)
  
  const hari = ["Hari Ini", "Besok", "Lusa"] as const
  
  return data.daily.time.map((iso: string, i: number): WeatherData => {
    const { txt, ic } = mapCode(data.daily.weather_code[i])
    const tanggal = new Date(iso).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
    })
    
    return {
      day: hari[i],
      date: tanggal,
      condition: txt,
      icon: ic,
      temp: (
        (data.daily.temperature_2m_max[i] + data.daily.temperature_2m_min[i]) / 2
      ),
      humidity: data.daily.relative_humidity_2m_mean[i],
      windSpeed: data.daily.wind_speed_10m_max[i],
      precipitation: data.daily.precipitation_sum[i],
    }
  })
}