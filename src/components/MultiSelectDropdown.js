import React, { useState, useEffect, useMemo } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClearIcon from "@mui/icons-material/Clear";

const MultiSelectDropdown = ({ options, onChange }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [checked, setChecked] = useState([]);

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
      onChange(checked);
    }
  }, [checked]);

  const allOptions = useMemo(() => {
    const selectAllOption = {
      id: "selectAll",
      label: "Select All",
    };
    return [selectAllOption, ...options];
  }, [options]);

  const optionLabels = useMemo(() => {
    return new Map(options.map((option) => [option.id, option.label]));
  }, [options]);

  const selectedOptionsDisplayStr = useMemo(() => {
    const selectedOptionLabels = [];
    checked.forEach((optionId) => {
      if (optionId !== "selectAll") {
        selectedOptionLabels.push(optionLabels.get(optionId));
      }
    });
    return selectedOptionLabels.join(", ");
  }, [checked]);

  const toggleCheckbox = (option) => {
    let updatedChecked = [...checked];
    if (option.id == "selectAll") {
      // de-selecting selectAll
      if (checked.includes(option.id)) {
        setChecked([]);
        return;
      } else {
        // selecting all options
        allOptions.forEach(function (option) {
          updatedChecked.push(option.id);
        });
      }
    } else {
      if (updatedChecked.includes(option.id)) {
        updatedChecked = updatedChecked.filter(
          (item) => ![option.id, "selectAll"].includes(item)
        );
      } else {
        updatedChecked.push(option.id);
      }
    }
    setChecked([...updatedChecked]);
  };

  const toggleDisplayOptions = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const handleClear = (event) => {
    event.stopPropagation();
    setChecked([]);
  };

  return (
    <div className={`dropdown ${displayDropdown && "clear-cursor focused"}`}>
      <div onClick={toggleDisplayOptions} className="selected">
        {selectedOptionsDisplayStr.length ? (
          <div className="option-content">{selectedOptionsDisplayStr}</div>
        ) : (
          <div className="placeholder">Select</div>
        )}
        {selectedOptionsDisplayStr.length !== 0 && (
          <ClearIcon
            className="clear"
            onClick={(event) => handleClear(event)}
          />
        )}
        <ArrowDropDownIcon />
      </div>
      {displayDropdown && (
        <ul className="options">
          {allOptions.map((option) => (
            <li
              onClick={() => toggleCheckbox(option)}
              className={
                checked.includes(option.id) ? "option highlighted" : "option"
              }
            >
              <input
                type="checkbox"
                className="option-checkbox"
                checked={checked.includes(option.id)}
              />
              <span className="option-content" title={option.label}>
                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
