const initialState = {
  countries: []
};

async function getCountries() {
  let text = await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;flag"
  );
  let body = await text.json();
  return { countries: body };
};

export async function countryReducer(prevState = initialState, action) {
  let nextState;
  switch (action.type) {
    case "INIT":
      nextState = await getCountries();
      break;

    default:
      nextState = prevState;
  }

  console.log("countryReducer", { prevState, action, nextState });
  return nextState;
}
