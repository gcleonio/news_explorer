import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        required
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
