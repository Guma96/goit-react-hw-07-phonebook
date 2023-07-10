import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://639078cc65ff41831114ac0d.mockapi.io',
  }),
  tagTypes: ['Material'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Material'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: '/contacts',
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Material'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Material'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;