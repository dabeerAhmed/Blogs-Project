import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/dabeer.jpg"
          alt="An image showing dabeer"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, This is Dabeer</h1>
      <p>
        I blog about modern technology such as Web Development and its latest
        frameworks, Blockchain related technologies, Artificial Intelligence and
        more
      </p>
    </section>
  );
}

export default Hero;
