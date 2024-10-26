import NavBar from "@/app/navbar";
import Footer from "@/app/footer";


export default function ArticleLayout({
  navbar_id,
  children,
}: Readonly<{
  navbar_id: number,
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar currentId={navbar_id} />
      <div className="flex mt-4 p-8 md:p-12 lg:p-16 items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-lg w-full min-h-screen markdown-body">
          <div className="p-12">
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
