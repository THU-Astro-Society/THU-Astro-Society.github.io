import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar";
import Footer from "./footer";
import ArticleLayout from "./article_layout";

export default function Home() {
  return (
    <>
      <ArticleLayout navbar_id={process.env.NAVBAR_HOME}>
        <p> 喵喵喵 </p>
      </ArticleLayout>
    </>
  )
}
