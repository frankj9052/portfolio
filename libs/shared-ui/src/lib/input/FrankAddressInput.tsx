import { useCallback, useEffect, useState } from "react";
// import FrankInputUncontrolledBase from "./FrankInputUncontrolledBase";
import { debounce } from '@frankjia9052/shared-utils'

const GOOGLE_API_KEY = 'AIzaSyAkJzQN2ya1n0Dd77ExG8i4nS8wmWUOhss';
const PLACES_API_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json`;

export function FrankAddressInput() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const fetchSuggestions = async (query: string) => {
    if (!query) return;
    const response = await fetch(
      `${PLACES_API_URL}?input=${query}&types=address&components=country:ca&key=${GOOGLE_API_KEY}`
    );
    const data = await response.json();
    setSuggestions(data.predictions || []);
  };

  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), [fetchSuggestions]);

  useEffect(() => {
    console.log("suggestions ===> ", suggestions)
  }, [suggestions])
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          debouncedFetchSuggestions(e.target.value);
        }}
        placeholder="输入地址"
      />
      <ul>
        {suggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  )
}

export default FrankAddressInput;
