import styles from "./page.module.css";
import Contact from "./ui/components/Contact/Contact";
import Cover from "./ui/components/Cover/Cover";
import Services from "./ui/components/Services/Services";
import { Titan_One } from "next/font/google";
import WhoWeAre from "./ui/components/WhoWeAre/WhoWeAre";


export const titan = Titan_One({ subsets: ["latin"], display: 'swap', weight: ['400']});


export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <WhoWeAre />
      <Services />
      <Contact />
    </main>
  );
}
