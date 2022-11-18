import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('fetchingData',async()=>{
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data
})


const productSlice = createSlice({
name : "products",
initialState : {
    products : [],
    loading : false
},
extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending, (state)=>{
 state.products = []
 state.loading = true

    })
    builder.addCase(fetchProducts.fulfilled, (state,action)=>{
state.products = action.payload
state.loading = false

           })


           builder.addCase(fetchProducts.rejected, (state)=>{
            state.products = []
            state.loading = false
            
                       })
}
//     fetching:(state , action)=>{
// state.products.push(action.payload)
//     }

})

export const  {fetching} = productSlice.actions;

export default productSlice.reducer
