import { useState } from 'react';
import ZipCodeForm from './Zipcodeform'; 

function Weather() {
    const [zipCode, setZipCode] = useState('');

    return ( 
        <div>
            <h1>Weather App</h1>
            <ZipCodeForm zipCode={zipCode} setZipCode={setZipCode} /> {/* Pass down the state and setter */}
            <p>Entered Zip Code: {zipCode}</p>
        </div>
    );
}

export default Weather;
