import React from 'react'
import goods from 'db/goods.json'
import List from './List/List'

const App = () => {
  return (
    <div><List goods={goods}/></div>
  )
}

export default App