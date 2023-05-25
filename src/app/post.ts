export interface Post {
  title: string;
  thumbnail: string;
  permalink: string;
  is_video: boolean;
  media: { 
    reddit_video: { 
      fallback_url: string } 
    }
}

export interface RedditResponse {
  kind: string;
  data: {
    children: Array<{ data: Post }>;
  };
}
