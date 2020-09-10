import axios from 'axios';
import { CommentType } from '../types';

export const getComments = (_page = 1) => {
  return axios.get(`http://localhost:4000/comments`, {
    params: {
      _page,
      _limit: 4,
      _order: 'desc',
      _sort: 'id',
    },
  });
};

export const getComment = (id: number) => {
  return axios.get(`http://localhost:4000/comments/${id}`);
};

export const getAllComments = () => axios.get(`http://localhost:4000/comments`);

export const addComment = (data: CommentType) =>
  axios.post(`http://localhost:4000/comments`, data);

export const updateComment = (data: CommentType) =>
  axios.put(`http://localhost:4000/comments/${data.id}`, data);

export const removeComment = (id: number) =>
  axios.delete(`http://localhost:4000/comments/${id}`);
