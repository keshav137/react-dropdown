import React from "react";
import MultiSelectDropdown from "./MultiSelectDropdown";
import SingleSelectDropdown from "./SingleSelectDropdown";

const Dropdown = ({ multiSelect, ...props }) => {
  if (multiSelect) {
    return <MultiSelectDropdown {...props}></MultiSelectDropdown>;
  }
  return <SingleSelectDropdown {...props}></SingleSelectDropdown>;
};

export default Dropdown;
