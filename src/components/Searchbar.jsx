export default function Searchbar({ searchWord, setSearchWord }) {
  // const [searchWord, setSearchWord] = useState("");

  function handleChange(text) {
    setSearchWord(text);
  }
  return (
    <form action="" className="main-form" autoComplete="off">
      <img src={"/assets/icon-search.svg"} alt="search icon" />
      <label htmlFor="main-input"></label>
      <input
        type="text"
        id="main-input"
        name="main-input"
        placeholder="Search for movies or TV series"
        value={searchWord}
        onChange={(e) => handleChange(e.target.value.toLowerCase())}
      />
    </form>
  );
}
