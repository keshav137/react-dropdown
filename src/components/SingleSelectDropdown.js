import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";

const SingleSelectDropdown = ({ options, onChange }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const onMouseClick = (e) => {
      if (e.target.closest(".dropdown")) return;
      setDisplayDropdown(false);
    };

    document.addEventListener("click", onMouseClick);
    return () => {
      document.removeEventListener("click", onMouseClick);
    };
  }, []);

  useEffect(() => {
    if (typeof onChange === "function") {
      onChange(selectedOption);
    }
  }, [selectedOption]);

  const toggleDisplayOptions = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const handleSelect = (option) => {
    if (selectedOption && selectedOption.id == option.id) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
    toggleDisplayOptions();
  };

  const handleClear = (event) => {
    event.stopPropagation();
    setSelectedOption(null);
  };

  return (
    <div className={`dropdown ${displayDropdown && "clear-cursor focused"}`}>
      <div onClick={toggleDisplayOptions} className="selected">
        {selectedOption ? (
          <div className="option-content">{selectedOption.label}</div>
        ) : (
          <div className="placeholder">Select</div>
        )}
        {selectedOption !== null && (
          <ClearIcon
            className="clear"
            onClick={(event) => handleClear(event)}
          />
        )}
        <ArrowDropDownIcon />
      </div>

      {displayDropdown && (
        <ul className="options">
          {options.map((option) => (
            <li
              onClick={() => handleSelect(option)}
              className={
                selectedOption && selectedOption.id == option.id
                  ? "option highlighted"
                  : "option"
              }
            >
              <span className="option-content">{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SingleSelectDropdown;
