import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ imgURL, category, postID, date, title, desc }) {
  return (
    <div className="post">
      <Link to={`/post/${postID}`} className="link">
        <img className="postImg" src={imgURL} alt="" />
      </Link>
      <div className="postInfo">
        <span className="postTitle">{title}</span>
        <hr />
        <span className="postDate">
          {date}
        </span>
      </div>
      <p className="postDesc">{desc}</p>
    </div >
  );
}
