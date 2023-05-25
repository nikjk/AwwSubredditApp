export interface Post {
  title: string;
  thumbnail: string;
  permalink: string;
  is_video: boolean;
}

export interface RedditResponse {
  kind: string;
  data: {
    children: Array<{ data: Post }>;
  };
}
