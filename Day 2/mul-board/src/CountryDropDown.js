import React from "react";

function countryDropDown(props) {
  return (
    <select onChange={props.changeSelectedCountry}>
      {props.countries.map(country => (
        <option key={country.name} value={country.name}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default countryDropDown;
