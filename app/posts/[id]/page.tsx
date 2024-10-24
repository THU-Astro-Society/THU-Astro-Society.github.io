import { getPostData, getAllPostIds } from "@/lib/getpost";
import "@/style/github-markdown-light.css";
import ArticleLayout from "@/app/article_layout";

const post_dir = process.env.POSTS_DIR ?? "@/posts";

export default function Post({ params }: { params: { id: string } }) {
  const data = getPostData(post_dir, params.id);
  return (
    <ArticleLayout navbar_id={Number(process.env.NAVBAR_POSTS)}>
      {data.content}
    </ArticleLayout>
  )
}


export function generateStaticParams() {
  const ids = getAllPostIds(post_dir);
  return ids;
}