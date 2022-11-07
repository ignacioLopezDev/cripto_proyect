const Searcher = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search a Coin"
      className=" form-control form-control-sm text-dark border-0 text-center "
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searcher;
