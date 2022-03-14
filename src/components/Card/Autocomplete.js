import { useState } from "react";
import "./style.css";
import { Input } from "@chakra-ui/input";
const AutoComplete = ({
  suggestions,
  labelKey = "",
  labelKey1 = "",
  handleChanges = (f) => f,
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion[labelKey].toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    // handleChanges(unLinked);
    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };
  const onClick = (e) => {
    setFilteredSuggestions([]);
    setInput(e.target.innerText);
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="suggestions">
        {filteredSuggestions.map((suggestion, index) => {
          let className;
          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active";
          }
          return (
            <li
              className={className}
              key={suggestion}
              onClick={(e) => {
                onClick(e);
                handleChanges(suggestion);
              }}
            >
              {labelKey
                ? suggestion[labelKey]
                : "" + labelKey1
                ? "(" + suggestion[labelKey1] + ")"
                : ""}
            </li>
          );
        })}
      </ul>
    ) : (
      <div class="no-suggestions">
        <em>No suggestions</em>
      </div>
    );
  };
  return (
    <>
      <Input type="text" type="text" onChange={onChange} value={input} />
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
};
export default AutoComplete;
