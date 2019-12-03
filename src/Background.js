import React, { useState } from 'react'
export function Background() {
  const colors = {
    Sea: '#a2ccb6',
    Sand: '#fceeb5',
    Peach: '#ee786e',
  }
  // document.body.style.background = colors.Sea
  const [color, setColor] = useState(colors.Sea)
  const [value, setValue] = useState('Sea')

  function handleChange(e) {
    setValue(e.target.value)
    setColor(colors[value])
    document.body.style.background = color
  }

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option value="Sea">Sea</option>
        <option value="Sand">Sand</option>
        <option value="Peach">Peach</option>
      </select>
      <p>{color}</p>
    </div>
  )
}
