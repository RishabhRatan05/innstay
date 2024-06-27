import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = new createApi({
    reducerPath:"authApi",

    baseQuery: fetchBaseQuery({
        baseUrl:'auth/'
    }),

    endpoints:(builder)=>({
        signUp: builder.mutation({
            query:(body)=>({
                url:'/signUp',
                method:"POST",
                body:body,
            })
        }),
        login: builder.mutation({
        query: (profile) => ({
        url: "/login",
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: profile,
        }),
        
        })
    })
})

export const {useSignUpMutation, useLoginMutation} = authApi