import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62cd93d7a43bf780085b2b48.mockapi.io/contacts';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { name, phone } = contact;
    const response = await axios.post('/contacts', { name, phone });
    return response.data;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);
