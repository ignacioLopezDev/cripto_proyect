const Searcher = ({ setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search a Coin"
      className="mt-60px form-control text-dark mt-4 border-0 text-center "
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Searcher;
