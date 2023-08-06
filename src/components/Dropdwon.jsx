import { useState } from "react"

const Dropdown = () => { 
  const [selectedOptions, setSelectedOptions] = useState({})

  const handleDropdownChange = (dropdownName, selectedValue) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [dropdownName]: selectedValue,
    }))
  }

  const numberOfDropdowns = 10

  // Options for each dropdown
  const options = ["a", "b", "c"]

  // Dropdown elements
  const dropdownElements = []

  for (let i = 1; i <= numberOfDropdowns; i++) {
    const dropdownName = `dropdown${i}`

    dropdownElements.push(
      <div key={i}>
        <h2>Dropdown {i}</h2>
        <select
          onChange={(e) => {
            handleDropdownChange(dropdownName, e.target.value)
          }}
          value={selectedOptions[dropdownName] || ""}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              disabled={
                Object.values(selectedOptions).includes(option) &&
                selectedOptions[dropdownName] !== option
              }
            >
              Option {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return <>{dropdownElements}</>
}

export default Dropdown
