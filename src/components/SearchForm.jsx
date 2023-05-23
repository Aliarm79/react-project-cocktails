import { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={handleChange}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
