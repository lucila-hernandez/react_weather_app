function UnitSelect({ unit, onUnitChange }) {
    return (
        <div>
            <label htmlFor="unit">Select Temperature Unit:</label>
            <select id="unit" value={unit} onChange={onUnitChange}>
                <option value="metric">Celsius</option>
                <option value="imperial">Fahrenheit</option>
                <option value="standard">Kelvin</option>
            </select>
        </div>
    );
}

export default UnitSelect;
