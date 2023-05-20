import Dropdown from "./components/Dropdown";

import "./styles.scss";

const names = [
  {
    id: 0,
    label: "John Doe",
  },
  {
    id: 1,
    label: "Van Henry",
  },
  {
    id: 2,
    label: "Hello World",
  },
  {
    id: 3,
    label:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
  },
  {
    id: 4,
    label: "April Tucker",
  },
  {
    id: 5,
    label: "Ralph Hubbard",
  },
  {
    id: 6,
    label: "Test String",
  },
  {
    id: 7,
    label: "Twenty",
  },
  {
    id: 8,
    label: "Twenty one",
  },
  {
    id: 9,
    label: "Twenty one and a half",
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
