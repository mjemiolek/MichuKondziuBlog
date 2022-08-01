import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="homeNames">
        <span className="homeName">Michu</span>
        <span className="homeName">Kondziu</span>
      </div>
      <div className="home">
        <Posts />
      </div>
    </>
  );
}
