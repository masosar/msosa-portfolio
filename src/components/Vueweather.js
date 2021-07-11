import React from 'react'
import { VueWrapper } from 'vuera'
import WeatherApp from '../App.vue'

function Vueweather() {
    return (
        <div>
            <VueWrapper>
                component={WeatherApp}
            </VueWrapper>
        </div>
    )
}

export default Vueweather
