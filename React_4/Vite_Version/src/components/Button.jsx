function Button({ color = 'steelblue', text, onClick }) {
  return <button className="btn" style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
}

export default Button
