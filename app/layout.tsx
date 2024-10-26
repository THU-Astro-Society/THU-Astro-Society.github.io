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
        <meta name="description" content="清华大学学生天文协会" />
        {/*网页关键词*/}
        <meta name="keywords" content="学生天文协会 清华 清华天协 THU天协 TAS Tsinghua Astronomy Society" />
        {/*移动端适配*/}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/*多尺寸icon图标*/}
        <link rel="icon" type="image/x-icon" href="/assets/icons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-chrome-192x192.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
