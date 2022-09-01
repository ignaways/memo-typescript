import IconCardType from "./components/IconCardType";
import SearchBar from "./components/Searchbar";
import IconToggleMode from "./components/IconToggleMode";



const MenuBar = () => {
  return (
    <>
      <div className="container__menubar">
        <SearchBar />
        <div>
        <IconCardType />
        <IconToggleMode />
        </div>
      </div>
    </>
  );
};

export default MenuBar;
