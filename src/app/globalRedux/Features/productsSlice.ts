import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

type initialStateType = {
    loading: boolean;
    payload: any;
    singleProductPayload: any
    error: any
}

const initialState : initialStateType = {
    loading: false,
    payload: {
        products: []
    },
    singleProductPayload: {},
    error: {}
}

export const getProducts = createAsyncThunk('product/productsData',
    async (data:any) => {
        const { limit=10, skip = 0} = data
        try {
            const response = await axios.get(`https://dummyjson.com/products/?limit=${limit}&skip=${skip}`)
            return response.data
        }catch(err: any){
            throw err;
        }
    }
)

export const getMoreProducts = createAsyncThunk('product/moreProductsData',
    async (data:any) => {
        const { limit=10, skip = 0} = data
        try {
            const response = await axios.get(`https://dummyjson.com/products/?limit=${limit}&skip=${skip}`)
            return response.data
        }catch(err: any){
            throw err;
        }
    }
)

export const getSingleProduct = createAsyncThunk('product/singleProductData',
    async (data:any) => {
        const { id } = data
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`)
            return response.data
        }catch(err: any){
            throw err;
        }
    }
)

export const productsSlice = createSlice({
    name: 'productsData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, state => {
            state.loading = true
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.payload.total = action.payload.total
            state.payload.products = action.payload.products
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false
            state.payload = {}
            state.error = action.error
        });
        builder.addCase(getMoreProducts.pending, state => {
            state.loading = true
        });
        builder.addCase(getMoreProducts.fulfilled, (state, action) => {
            state.loading = false
            state.payload.total = action.payload.total
            state.payload.products = [...state.payload.products, ...action.payload.products]
        });
        builder.addCase(getMoreProducts.rejected, (state, action) => {
            state.loading = false
            state.payload = {}
            state.error = action.error
        });
        builder.addCase(getSingleProduct.pending, state => {
            state.loading = true
        });
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.loading = false
            state.singleProductPayload = action.payload
        });
        builder.addCase(getSingleProduct.rejected, (state, action) => {
            state.loading = false
            state.singleProductPayload = {}
            state.error = action.error
        });
    }
})

export default productsSlice.reducer