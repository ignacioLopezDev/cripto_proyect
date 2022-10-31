import { useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// const api = () => {

// //     // SELECTOR
//     const selector = useSelector((state) => state.id)
// console.log("YAMIII", selector)

//     return (
//         console.log("que es esto")
//     )
// }

// export const apiCoinSlice = createSlice({
//     name:"apiCoin",
//     initialState: [],
//     reducers:{
//         apiGet: (state, action) => {

//             const apiCoin = `https://api.coingecko.com/api/v3/coins/${id}`

//             const dataCoin = async () => {
//                 const res = await axios.get(apiCoin);
//                 state = (res.data);
//               }

//         }
//     }
// })

// export default apiCoinSlice.reducer