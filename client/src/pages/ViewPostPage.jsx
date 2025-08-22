import CurrentView from "../components/Fieds/CurrentView";
import PostMap from "../components/Fieds/PostMap";
import IsErrorLoading from "../components/Fieds/Error";
import BackToHome from "../components/Fieds/BackToHome";

function ViewPostPage() {

  return (
    <div>
      <h1>View Post Page</h1>
      <CurrentView />
      <hr />
      <div className="show-all-posts-container">
        <h2>All Posts</h2>
        <PostMap />
        <IsErrorLoading />
      </div>
      <BackToHome />
    </div>
  );
}

export default ViewPostPage;
