export type CommentResType = {
  id: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
};

export type CommentReqType = {
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
};
export type AsyncState = {
  loading: boolean;
  data: CommentResType[] | CommentResType | null;
  error: Error | null;
};

export type CommentState = {
  allComments: {
    loading: boolean;
    data: CommentResType[] | null;
    error: Error | null;
  };
  commentPerPage: {
    loading: boolean;
    data: CommentResType[] | null;
    error: Error | null;
  };
  comment: {
    loading: boolean;
    data: CommentResType | null;
    error: Error | null;
  };
  method: 'post' | 'put';
  currentPage: number;
  commentForm: {
    id: number | undefined;
    profile_url: string;
    author: string;
    content: string;
    createdAt: string;
  };
};

export type FormType = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
