import React from 'react'
import Biner from './convert/biner'
import Decimal from './convert/decimal'
import Heksa from './convert/heksa'
import Octal from './convert/octal'

function App() {
  return (
    <div>
      <div className='pt-3 pb-3'>
        <Biner />
      </div>
      <div className='pt-3 pb-3'>
        <Decimal />
      </div>
      <div className='pt-3 pb-3'>
        <Octal />
      </div>
      <div className='pt-3 pb-3'>
        <Heksa />
      </div>
    </div>
  )
}

export default App;
