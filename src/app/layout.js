import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./componentes/navbar";
import Image from "next/image";
import whatsCard from '../../public/layout_imgs/Carousel_whtas.jpeg'
import searchContext from "./searchContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Grife Chic",
  description: "Moda Masculina",
};

let links = ['Camisetas Nacionais', 'Importadas Malha Peruana', 'Importadas fio 40.1', 'Camisetas Polo', 'Plus Size', 'Bermudas e Shorts', 'Moda Íntima'];

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar logo="Grife Chic" title="Moda Masculina" links={links} keys={links} ></Navbar>
          {/* <a href='#' className="main_card container-fluid mt-3"><Image className="main_card_img" src={whatsCard} width={750} height={320} alt="CardWhats"></Image></a> */}
          {children}
      </body>
    </html>
  );
}
