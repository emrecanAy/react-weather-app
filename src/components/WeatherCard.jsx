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
    cover={<img alt="example" src="D:\Patika\react\weather-app\public\cloudy.png" title="cloud icons"/>}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  )
}

export default WeatherCard