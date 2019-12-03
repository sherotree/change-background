import React, { useState, useEffect } from 'react'
import './Background.css'
export function Background() {
  const colors = {
    Sea: '#a2ccb6',
    Sand: '#fceeb5',
    Peach: '#ee786e',
  }

  const [value, setValue] = useState('Sea')

  useEffect(() => {
    document.body.style.background = colors.Sea
  }, [])

  function handleChange(e) {
    setValue(e.target.value)
    document.body.style.background = colors[e.target.value]
  }

  return (
    <div className="wrapper">
      <select className="selector" value={value} onChange={handleChange}>
        <option value="Sea">Sea</option>
        <option value="Sand">Sand</option>
        <option value="Peach">Peach</option>
      </select>
      <p className="colorName">{colors[value]}</p>
    </div>
  )
}
