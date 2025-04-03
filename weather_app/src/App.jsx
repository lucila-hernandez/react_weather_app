import { useState } from 'react';
import ZipCodeForm from './Zipcodeform';  
import UnitSelect from './UnitSelect';    

function App() {
    const [zipCode, setZipCode] = useState('');
    const [unit, setUnit] = useState('metric');

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
    };

    return (
        <div>
            <h1>Weather App</h1>
            
            <ZipCodeForm zipCode={zipCode} setZipCode={setZipCode} />
            
            <UnitSelect unit={unit} onUnitChange={handleUnitChange} />

            <p>Entered Zip Code: {zipCode}</p>
            <p>Selected Temperature Unit: {unit}</p>
        </div>
    );
}

export default App;
