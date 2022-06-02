import propTypes from 'prop-types'
import React from 'react'

function Tecla({ Tvalue, handleClick }) {
  return (
    <div className="tecla">
      <input type="button" id={Tvalue} onClick={handleClick} value={Tvalue} />
    </div>
  )
}

Tecla.propTypes = {
  Tvalue: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired,
}

export default Tecla
