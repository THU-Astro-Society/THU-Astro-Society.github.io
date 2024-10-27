import {PostData, getAllPostData} from '@/lib/getpost';
import ArticleLayout from "@/app/article_layout";

const post_dir = process.env.POSTS_DIR ?? "@/posts";

function createBorder(message: string) {
  return (
    <>
      <div className="flex items-center my-4">
        <div className="flex-1 border-t border-gray-900"></div>
        <span className="mx-4 text-gray-900">{message}</span>
        <div className="flex-1 border-t border-gray-900"></div>
      </div>
    </>
  )
}


export default function Page() {
  const posts = getAllPostData(post_dir)
  const region: PostData[][] = [];
  
  /* 按照时间降序排序 */
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  /* 按照年份分割 */
  posts.forEach((post, index) => {
    if (index == 0 || posts[index - 1].date.getFullYear() != post.date.getFullYear()) {
      region.push([post]); 
    } else {
      region[region.length - 1].push(post);
    }
  });
  return (
    <ArticleLayout currentPath="/posts">
      {posts.length >= 1 ? <></> : createBorder(".")}
      {
        region.map((posts) => (
          <>
            {createBorder(posts[0].date.getFullYear().toString())}
            <ul className="list-disc pl-6 space-y-4">
              {posts.map((post, index) => (
                <li key={index}>
                  <a
                    href={`/posts/${post.id}`}
                    className="text-black hover:underline"
                  >
                    {post.date.toDateString()}: {post.title}
                  </a>
                </li>
              ))}   
            </ul> 
          </>
        ))
      }
    </ArticleLayout>
  );
}
