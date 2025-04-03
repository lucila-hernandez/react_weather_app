function ZipCodeForm({ zipCode, setZipCode }) {
    const inputChange = (e) => {
        setZipCode(e.target.value); 
    };

    return (
        <form>
            <label htmlFor="zipCode">Enter Zip Code:</label>
            <input
                id="zipCode"
                type="text"
                value={zipCode}  
                onChange={inputChange}  
            />
        </form>
    );
}

export default ZipCodeForm;
