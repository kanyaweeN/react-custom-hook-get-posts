import PostMap from "../components/Fieds/PostMap";
import IsErrorLoading from "../components/Fieds/Error";

function HomePage() {

  return (
    <div>
      <div className="app-wrapper">
        <h1 className="app-title">Posts</h1>
        <button>Create Post</button>
      </div>
      <PostMap />
      <IsErrorLoading />
    </div>
  );
}

export default HomePage;
