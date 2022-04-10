import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.scss";
import { BlackButton, WhiteButton } from "./Buttons";

const Header = (props) => {
  return (
    <header className={props.className}>
      <HeaderNavigation />
      <div className="content-box block auto">{props.children}</div>
    </header>
  );
};

const HeaderNavigation = () => (
  <nav>
    <Link href="/">Home</Link>
    <Link href="/projects">Projects</Link>
    <Link href="/developer">Developer</Link>
  </nav>
);

export const DefaultHeader = (props) => {
  return <Header className={styles.default}>{props.children}</Header>;
};

export const HomeHeader = () => {
  const keyArray = ["website", "web app", "mobile app", "desktop app"];
  const [keyword, setKeyword] = useState(keyArray[0]);

  useEffect(() => {
    let count = 1;
    let intId = setInterval(() => {
      if (count < keyArray.length) {
        setKeyword(keyArray[count]);
        count++;
      } else {
        count = 0;
      }
    }, 2500);

    return () => clearInterval(intId);
  }, []);

  return (
    <Header className={styles.home}>
      <h1>
        <span className={styles.keyword}>{keyword} Building</span>
        <br />
        {/* Website and Web Application Building <br /> */}
        Perfected For You
      </h1>
      <p className={styles.info}>
        Get a custom website or web application that suits your <br /> business
        needs
      </p>
      <div className={styles["button-grid-two"]}>
        <BlackButton>Get Your Website Now</BlackButton>
        <WhiteButton>Not Why I'm Here</WhiteButton>
      </div>
    </Header>
  );
};

export const DeveloperHeader = () => {
  return (
    <Header className={styles.developer}>
      <h1>
        Miracle Kelechi <br /> Samuel
      </h1>
    </Header>
  );
};

export const ProjectsHeader = () => {
  return (
    <Header className={styles.projects}>
      <h1>
        Awesome websites and <br /> Applications we have built
      </h1>
    </Header>
  );
};
