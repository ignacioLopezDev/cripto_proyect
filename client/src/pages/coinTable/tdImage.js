export const Image = ({ coin, handleClick }) => {
  return (
    <td
      className="tableprop"
      onClick={() => {
        handleClick(coin.name.toLowerCase().replace(" ", "-"));
      }}
    >
      <img src={coin.image} alt={coin.name} style={{ width: "30px" }} />
    </td>
  );
};
