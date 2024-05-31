import { Link } from "react-router-dom";
import lightPageNotFoundImg from "../imgs/404.png";
import darkPageNotFoundImg from "../imgs/404-dark.png";
import { useContext } from "react";
import { ThemeContext } from "../App";

const PageNotFound = () => {
  let { theme } = useContext(ThemeContext);
  return (
    <section className="h-cover relative p-10 flex flex-col items-center gap-20 text-center">
      <img
        src={theme == "light" ? lightPageNotFoundImg : darkPageNotFoundImg}
        alt="not-found-img"
        className="select-none border-2 border-grey w-72 aspect-square object-cover rounded"
      />

      <h1 className="text-4xl font-gelasio leading-7">Page not Found</h1>

      <p className="text-dark-grey text-xl leading-7 -mt-8">
        The page you are looking for does not exsists. Head back to the{" "}
        <Link to={"/"} className="text-black underline">
          homepage
        </Link>
      </p>
    </section>
  );
};

export default PageNotFound;
