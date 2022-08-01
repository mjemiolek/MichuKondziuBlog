import Post from "../post/Post";
import "./posts.css";
import img1 from "../../images/react-1.jpg";
import img2 from "../../images/image-1.jpeg";


export default function Posts({ img, }) {
  return (
    <>
      <div className="leftPosts">
        <Post
          imgURL={img1}
          category="lifestyle"
          postID="M1"
          date="01.08.2022"
          title="Pierwszy post"
          desc="Miałem 10 lat gdy usłyszał o mnie świat. W mej piwnicy był nasz klub. Kumpel radio zniósł i nie mogłem w nocy spać bo cały czas tłukło." />
      </div>
      <div className="middle"></div>
      <div className="rightPosts">
        <Post
          imgURL={img2}
          category="lifestyle"
          postID="K1"
          date="01.08.2022"
          title="Pierwszy post"
          desc="pierwszy opissssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss" />
      </div>
    </>
  );
}
