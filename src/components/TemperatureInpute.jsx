import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit',
};

export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
        <fieldset>
            <legend>Enter temperature is in {scaleNames[scale]}:</legend>
            <input
                type="number"
                name="temperature"
                id=""
                value={temperature}
                onChange={(e) => {
                    onTemperatureChange(e, scale);
                }}
            />
        </fieldset>
    );
}
