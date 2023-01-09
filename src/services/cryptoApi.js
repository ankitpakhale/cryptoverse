import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "f36ecc1535msh1f59e58e113770ap180445jsne786e0b81931",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  // baseQuery: fetchBaseQuery({ baseUrl }),
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),

  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});
export const { useGetCryptosQuery } = cryptoApi;
