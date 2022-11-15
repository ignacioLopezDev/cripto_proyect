const Searcher = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Coin..."
      id="searcher"
      className=" form-control form-control text-dark border-0 text-center "
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searcher;
