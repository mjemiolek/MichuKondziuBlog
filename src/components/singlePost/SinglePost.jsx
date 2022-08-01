import "./singlePost.css";


export default function SinglePost({ img, author, date }) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src={img} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          <div className="singlePostEdit">
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: {author}
          </span>
          <span className="singlePostDate">
            date: {date}
          </span>
        </div>
      </div>
    </div>
  );
}
