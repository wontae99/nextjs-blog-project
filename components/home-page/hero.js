import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="Profile image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Wontae</h1>
      <p>
        A blog about web developement - mainly about frontend framework - React
      </p>
    </section>
  );
}

export default Hero;
