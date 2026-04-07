import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_PRODUCTS_URL;

export const productApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({ url: baseUrl }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),
    }),
});

export const {useGetProductsQuery} = productApi;