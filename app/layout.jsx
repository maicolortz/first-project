import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Firs project in Next",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <div>
          <Navigation></Navigation>
        </div>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}