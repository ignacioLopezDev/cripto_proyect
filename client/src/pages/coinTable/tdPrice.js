export const Price = ({ coin, handleClick }) => {
  return (
    <td
      className="tableprop text-end"
      onClick={() => {
        handleClick(coin.name.toLowerCase().replace(" ", "-"));
      }}
    >
      {coin.current_price}
    </td>
  );
};
