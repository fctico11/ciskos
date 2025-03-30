import heroBg from "../assets/ciskoHero.webp";
import logo from "../assets/ciskologo.webp";

export default function Home() {
    return (
      <section
        className="w-screen h-screen bg-cover bg-center flex items-start justify-center pt-24 md:pt-32"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <img
          src={logo}
          alt="Ciskos Logo"
          className="w-40 md:w-64 drop-shadow-lg"
        />
      </section>
    );
  }
  

