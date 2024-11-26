/* eslint-disable react/prop-types */
function Button ({ label, bg, handleClick }) {
  return (
    <button style={{ backgroundColor: bg }} onClick={handleClick}>
      {label}
    </button>
  )
}

export default Button
