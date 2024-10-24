import { getPostData, getAllPostIds } from "@/lib/getpost";
import "@/style/github-markdown-light.css";
import ArticleLayout from "@/app/article_layout";

export default function Post({ params }: { params: { id: string } }) {
  const data = getPostData(process.env.POSTS_DIR, params.id);
  return (
    <ArticleLayout navbar_id={process.env.NAVBAR_POSTS}>
      {data.content}
    </ArticleLayout>
  )
}

export function getStaticPaths() {
  const paths = getAllPostIds(process.env.POSTS_DIR);
  return {
    paths,
    fallback: false
  }
}
