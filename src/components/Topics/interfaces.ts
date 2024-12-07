export interface Comment {
  id: number;
  author: string;
  content: string;
  postTime: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  postTime: string;
  tags: string[];
  readCount: number;
  voteCount: number;
  comments: Comment[];
}