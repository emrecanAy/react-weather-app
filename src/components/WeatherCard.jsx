import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;

function WeatherCard() {
  return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img width="20" alt="example" src="https://raw.githubusercontent.com/emrecanAy/react-weather-app/master/public/img/cloudy.png" title="cloud icons"/>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}

export default WeatherCard