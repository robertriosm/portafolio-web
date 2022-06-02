import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './index.sass'
import 'bootstrap/dist/css/bootstrap.min.css'

const myname = 'ROBERTO RIOS...'
ReactDOM.render(<App name={myname} />, document.getElementById('app'))
