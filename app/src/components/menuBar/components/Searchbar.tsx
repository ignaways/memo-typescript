import * as Icon from "react-bootstrap-icons"
import "../../../assets/styles/MenuBar.css"

const SearchBar = () => {
  return (
    <>
    <div className="search__container">
        <Icon.Search className="search__icon" />
        <input type="text" className="search__input"/>
    </div>
    </>
  )
};

export default SearchBar;
