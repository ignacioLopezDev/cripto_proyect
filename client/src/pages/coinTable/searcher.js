const Searcher = ({ setSearch }) => {
  return (
    <input
      id="searcher"
      className=" form-control form-control text-dark border-0 text-center "
      type="text"
      placeholder="Search Coin..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searcher;
