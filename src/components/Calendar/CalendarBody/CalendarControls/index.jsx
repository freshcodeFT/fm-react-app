import React from 'react'
import Button from '../../../Button'

export default function CalendarControls({openPrevMonth, openNextMonth}) {
  return (
    <div>
      <Button onClick={openPrevMonth}>{'<'}</Button>
      <Button onClick={openNextMonth}>{'>'}</Button>
    </div>
  )
}
