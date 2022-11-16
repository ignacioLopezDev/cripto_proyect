import { useSelector, useDispatch } from "react-redux";

// REDUX SLICE
import {
  favoriteDelete,
  favoritePost,
} from "../../service/favoriteSelectedSlice";
import { favoriteGet, favoriteList } from "../../service/favoriteListSlice";
import { userSelector } from "../../service/loginUserSlice";

// IMAGES
import favoriteLogo from "../../assets/images/favorite0.png";
import favoriteLogoHover from "../../assets/images/favorite1.png";
import favoriteLogoOk from "../../assets/images/favorite2.png";

export const FavoritesBookmark = ({ coin }) => {
  // DISPATCH
  const dispatch = useDispatch();

  // USE SELECTOR
  const userLoggued = useSelector(userSelector);
  let favoriteArray = useSelector(favoriteList);

  // HANDLEFAVORITE
  const handleFavorite = async (e) => {
    if (!userLoggued) alert("resgistre señor");

    favoriteArray.includes(e.cryptoId)
      ? await dispatch(favoriteDelete(e))
      : await dispatch(favoritePost(e));

    await dispatch(favoriteGet(userLoggued));
  };

  return (
    <td className="Fav-logo">
      {favoriteArray.includes(coin.id) ? (
        <img
          className="favorite-Logo"
          src={favoriteLogoOk}
          alt="favoriteLogo"
        />
      ) : (
        <img className="favorite-Logo" src={favoriteLogo} alt="favoriteLogo" />
      )}

      <img
        className="favorite-Logo-Hover"
        onClick={() => {
          handleFavorite({
            cryptoId: coin.id,
            userId: userLoggued,
          });
        }}
        src={favoriteLogoHover}
        alt="favoriteLogo"
      />
    </td>
  );
};
