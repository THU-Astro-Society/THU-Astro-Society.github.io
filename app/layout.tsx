import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <title>THU天协</title>
      <head>
        {/*网页描述*/}
        <meta name="description" content="tas's blog" />
        {/*网页关键词*/}
        <meta name="keywords" content="学生天文协会 清华 清华天协 THU天协 TAS Tsinghua Astronomy Society" />
        {/*移动端适配*/}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*网站的icon图标*/}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
