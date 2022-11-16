export const TableHead = () => {
  return (
    <tr className="text-center">
      <th name="FavoritesBookmark" style={{ width: "5%" }}></th>
      <th name="Ranking" style={{ width: "5%" }}></th>
      <th name="Image" style={{ width: "5%" }}></th>
      <th name="Name" style={{ width: "auto" }}>Crypto Coin</th>
      <th name="Price" style={{ width: "20%" }}>Price</th>
      <th name="Percent" style={{ width: "24%" }}>% Percent</th>
    </tr>
  );
};
