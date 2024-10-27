'use client'

import NavBar from "@/app/navbar";
import Footer from "@/app/footer";
import { usePathname } from 'next/navigation';


interface ArticleLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export default function ArticleLayout({ children, currentPath }: ArticleLayoutProps) {
  const pathname = usePathname();
  
  return (
    <>
      <NavBar currentPath={pathname} />
      <div className="flex mt-4 p-8 md:p-12 lg:p-20 items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg w-full min-h-screen markdown-body">
          <div className="p-20">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
