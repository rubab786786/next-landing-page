export const metadata = {
  title: "Home",
  description: "Welcome to the Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="Home" property="og:title" />
        <meta content="Home" property="twitter:title" />
        <meta
          content="width=device-width, initial-scale=1"
          name="viewport"
        />
        <meta content="Webflow" name="generator" />
        <link rel="stylesheet" href="/styles/globals.css" />
        <link href="/styles/normalize.css" rel="stylesheet" />
        <link href="/styles/webflow.css" rel="stylesheet" />
        <link href="/styles/ufund-new-site.webflow.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
        />
        <link href="/images/favicon.jpg" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/webclip.jpg" rel="apple-touch-icon" />
        <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.brix---header-nav-link-demo{\npadding-top: 20px!important;\n}\n"
    }}
  />
      </head>
      <body>{children}</body>
    </html>
  );
}
