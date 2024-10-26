import ArticleLayout from "./article_layout";

export default function Home() {
  return (
    <>
      <ArticleLayout navbar_id={Number(process.env.NAVBAR_HOME)}>
        <p> 喵喵喵 </p>
        <p> 喵喵喵 </p>
        <p> 喵喵喵 </p>
      </ArticleLayout>
    </>
  )
}
