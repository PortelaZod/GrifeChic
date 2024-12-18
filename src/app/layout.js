import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./componentes/navbar";
import Image from "next/image";
import whatsCard from '../../public/layout_imgs/Carousel_whtas.jpeg'
import { ContextoProverdor } from "./contextos/contexto";
import {ProvedorItemContext} from '@/app/contextos/contextoItem'

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

let links = [
  {
    link: 'Camisetas Nacionais',
    id: 0
  },
  {
    link: 'Importadas Malha Peruana',
    id: 1
  },
  {
    link: 'Importadas fio 40.1',
    id: 2
  },
  {
    link: 'Camisetas Polo',
    id: 3
  },
  {
    link: 'Plus Size',
    id: 4
  },
  {
    link: 'Bermudas e Shorts',
    id: 5
  },
  {
    link: 'Moda Íntima',
    id: 6
  }

]

export default function RootLayout({ children }) {
  return (

    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ContextoProverdor>
          <ProvedorItemContext>
          <div className="w-100">
            <Navbar logo="Grife Chic" title="Moda Masculina" links={links} keys={links} ></Navbar>
            {children}
          </div>
          </ProvedorItemContext>
        </ContextoProverdor>
      </body>
    </html>
  );
}
