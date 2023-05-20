import Dropdown from "./components/Dropdown";

import "./styles.scss";

const names = [
  {
    id: 0,
    label: "John Doe",
  },
  {
    id: 1,
    label:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
  },
  {
    id: 2,
    label: "John Doe 1",
  },
  {
    id: 3,
    label: "John Doe 2",
  },
  {
    id: 4,
    label: "John Doe 3",
  },
  {
    id: 5,
    label: "John Doe 3",
  },
];

const App = () => {
  const onDropdownChanged = (values) => {
    console.log("Dropdown values changed -", values);
  };
  return (
    <div className="App">
      <div className="dropdown-demo">
        <span className="dropdown-label">Multi Select Dropdown</span>
        <Dropdown
          options={names}
          multiSelect={true}
          onChange={onDropdownChanged}
        />
      </div>
      <div className="dropdown-demo">
        <span className="dropdown-label">Single Select Dropdown</span>
        <Dropdown
          options={names}
          multiSelect={false}
          onChange={onDropdownChanged}
        />
      </div>
    </div>
  );
};

export default App;
