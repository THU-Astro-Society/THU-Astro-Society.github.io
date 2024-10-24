import fs from 'fs';
import * as production from "react/jsx-runtime";
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypeReact from 'rehype-react'
import matter from 'gray-matter';
import "highlight.js/styles/tokyo-night-dark.css"; // import css file for code highlight theme.
import "katex/dist/katex.css"; // import css file for formula blocks.

export interface PostData {
  id: string,
  content: JSX.Element,
  title: string,
  date: Date,
};

/* 得到所有post的id（.md前面的文件名） */
export function getAllPostIds(directory: string) {
  const fileNames = fs.readdirSync(directory);
  return fileNames.map((fileName) => {
    return {
      id: fileName.replace(/\.md$/, ''),
    }
  });
}

/* 得到id的post的data */
export function getPostData(directory: string, id: string): PostData {
  const fileContents = fs.readFileSync(`${directory}/${id}.md`, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = remark()
                          // Entry Plugin, string to mdast
                          .use(remarkParse)
                          // Add remark-gfm to recognize table syntax
                          .use(remarkGfm)
                          // Add remark-math to recognize the formula-block syntax
                          .use(remarkMath)
                          // Syntax convert plugin, mdast to hast
                          .use(remarkRehype)
                          // Use rehype-katex to add formula styles to formula block.
                          .use(rehypeKatex)
                          // Use rehype-highlight to add css classes for elements in code block to make them stylified.
                          .use(rehypeHighlight, { detect: true })
                          // Output plugin, hast to React JSX Element
                          .use(rehypeReact, production)
                          .processSync(matterResult.content);
  const content = processedContent.result;
  return {
    id,
    content,
    title: matterResult.data.title ?? "invalid",
    date: new Date(matterResult.data.date ?? "1970-1-1"),
  };
}

/* 得到所有post的data */
export function getAllPostData(directory: string): PostData[] {
  const post_ids = getAllPostIds(directory);
  const posts = post_ids.map((post) => {
    return getPostData(directory, post.id);
  });
  return posts;
}