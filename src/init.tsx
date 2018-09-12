import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Application } from './components/application'

export default (elem: any) => {
  ReactDOM.render(
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  , elem)
}
