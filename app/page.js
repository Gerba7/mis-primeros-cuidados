import styles from "./page.module.css";
import Contact from "./ui/components/Contact/Contact";
import Cover from "./ui/components/Cover/Cover";
import Experience from "./ui/components/Exprerience/Experience";
import Services from "./ui/components/Services/Services";
import WhoWeAre from "./ui/components/WhoWeAre/WhoWeAre";





export default function Home() {
  return (
    <main className={styles.main}>
      <Cover />
      <WhoWeAre />
      <Services />
      <Experience />
      <Contact />
    </main>
  );
}
