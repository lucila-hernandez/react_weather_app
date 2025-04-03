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
                pattern="\d{5}" 
                maxLength={"5"}
                required
            />
        </form>
    );
}

export default ZipCodeForm;
