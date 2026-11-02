import Button from './Button'

function Header({ title, onAdd }) {
  return <header className="header"><h1>{title}</h1><Button color="green" text="Add" onClick={onAdd} /></header>
}

export default Header
