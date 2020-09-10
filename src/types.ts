export type CommentType = {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
};

export type AsyncState = {
  loading: boolean;
  data: CommentType[] | CommentType | null;
  error: Error | null;
};

export type CommentState = {
  comments: AsyncState;
  comment: AsyncState;
  method: 'post' | 'put';
  currentPage: number;
};
