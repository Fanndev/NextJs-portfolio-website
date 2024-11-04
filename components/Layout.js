// Fonts
import {Sora} from "@next/font/google"

//Font Sora
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

// Components
import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-gradient-to-r from-gray-800 to-black text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
