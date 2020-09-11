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
  comments: {
    loading: boolean;
    data: CommentType[] | null;
    error: Error | null;
  };
  comment: {
    loading: boolean;
    data: CommentType[] | null;
    error: Error | null;
  };
  method: 'post' | 'put';
  currentPage: number;
};
