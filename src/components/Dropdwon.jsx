import { useState } from "react";

const Dropdown = () => {
  const [dropdownValue, setDropdownValue] = useState({ 
    dropdown1: "",
    dropdown2: "",
    dropdown3: "",
  });

  const handleDropdownChange = (dropdownName, optionValue) => {
    setDropdownValue((dropdownValue) => ({
        ...dropdownValue,
      [dropdownName]: optionValue,
    }));
  };

  let numberOFDropdown = 10 //dropdown 

  return (
    <>
      <div>
        <h2>Dropdown 1</h2>
        <select
          onChange={(e) => {
            handleDropdownChange("dropdown1", e.target.value);
          }}
          value={dropdownValue.dropdown1}
        >
          <option value="">Select Options</option>
          <option
            value="a"
            disabled={dropdownValue.dropdown2 === "a" || dropdownValue.dropdown3 === "a"}
          >
            Options 1
          </option>
          <option
            value="b"
            disabled={dropdownValue.dropdown2 === "b" || dropdownValue.dropdown3 === "b"}
          >
            Options 2
          </option>
          <option
            value="c"
            disabled={dropdownValue.dropdown2 === "c" || dropdownValue.dropdown3 === "c"}
          >
            Options 3
          </option>
        </select>
      </div>

      <div>
        <h2>Dropdown 2</h2>
        <select
          onChange={(e) => {
            handleDropdownChange("dropdown2", e.target.value);
          }}
          value={dropdownValue.dropdown2}
        >
          <option value="">Select Options</option>
          <option
            value="a"
            disabled={dropdownValue.dropdown1 === "a" || dropdownValue.dropdown3 === "a"}
          >
            Options 1
          </option>
          <option
            value="b"
            disabled={dropdownValue.dropdown1 === "b" || dropdownValue.dropdown3 === "b"}
          >
            Options 2
          </option>
          <option
            value="c"
            disabled={dropdownValue.dropdown1 === "c" || dropdownValue.dropdown3 === "c"}
          >
            Options 3
          </option>
        </select>
      </div>

      <div>
        <h2>Dropdown 3</h2>
        <select
          onChange={(e) => {
            handleDropdownChange("dropdown3", e.target.value);
          }}
          value={dropdownValue.dropdown3}
        >
          <option value="">Select Options</option>
          <option
            value="a"
            disabled={dropdownValue.dropdown1 === "a" || dropdownValue.dropdown2 === "a"}
          >
            Options 1
          </option>
          <option
            value="b"
            disabled={dropdownValue.dropdown1 === "b" || dropdownValue.dropdown2 === "b"}
          >
            Options 2
          </option>
          <option
            value="c"
            disabled={dropdownValue.dropdown1 === "c" || dropdownValue.dropdown2 === "c"}
          >
            Options 3
          </option>
        </select>
      </div>
    </>
  );
};

export default Dropdown;
