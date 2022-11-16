export const Ranking = ({ coin, handleClick }) => {
  return (
    <td
      className="text-muted text-center tableprop"
      onClick={() => {
        handleClick(coin.name.toLowerCase().replace(" ", "-"));
      }}
    >
      {coin.market_cap_rank}
    </td>
  );
};
