export const Name = ({ coin, handleClick }) => {
  return (
    <td
      onClick={() => {
        handleClick(coin.name.toLowerCase().replace(" ", "-"));
      }}
    >
      <div>
        <span>{coin.name}</span>
        <div></div>
        <span className="text-muted text-uppercase">{coin.symbol}</span>
      </div>
    </td>
  );
};
