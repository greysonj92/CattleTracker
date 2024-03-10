import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useState } from 'react'

const FilterBar = () => {
  const [selections, setSelections] = useState(() => ['Rams', 'Ewes', 'Lambs']);
  const handleSelection = (event, newSelections) => {
    setSelections(newSelections)
  }
  return (
    <div className="FilterBar">
      <br/>
      <br/>
      <h1>Filter by Type</h1>
      <ToggleButtonGroup value={selections}
      onChange={handleSelection}
      aria-label='Filter Selection'
      >
        <ToggleButton value="Rams" size='large'>Rams</ToggleButton>
        <ToggleButton value="Ewes" size='large'>Ewes</ToggleButton>
        <ToggleButton value="Lambs" size='large'>Lambs</ToggleButton>
      </ToggleButtonGroup>

    </div>
  )
}
export default FilterBar