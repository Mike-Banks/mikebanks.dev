import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Titillium_Web } from "next/font/google";
 
const font = Titillium_Web({ subsets: ['latin'], weight: '300' })

const Layout = ({children}) => {
  return (
   	<div className={font.className}>
      <Navbar />
      <main>{children}</main>
			<Footer />
    </div>
  )
};

export default Layout;