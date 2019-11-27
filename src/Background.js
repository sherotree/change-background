import React, { useState } from 'react'
export function Background() {
  const colors = {
    Sea: '#a2ccb6',
    Sand: '#fceeb5',
    Peach: '#ee786e',
  }
  const [color, setColor] = useState('#a2ccb6')
  return (
    <div>
      <selector>
        <option>Sea</option>
        <option>Sand</option>
        <option>Peach</option>
      </selector>
    </div>
  )
}
