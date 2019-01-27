import React from "react";
import CountryFlag from "./CountryFlag";

function countryDropDown(props) {
  return (
    <select onChange={props.changeSelectedCountry}>
      {props.countries.map(country => {
        console.log(country.flag);
        return (
          <option key={country.name} value={country.name}>
            {country.name} <CountryFlag flagUrl={country.flag} />
          </option>
        );
      })}
    </select>
  );
}

export default countryDropDown;
