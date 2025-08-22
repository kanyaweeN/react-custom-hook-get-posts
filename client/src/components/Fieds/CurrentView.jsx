import { useParams } from "react-router-dom";
import usePosts from "../SentPostsForm";

function CurrentView() {
    const { posts } = usePosts();
    const { id } = useParams();
    const currentPost = posts.find(post => String(post.id) === String(id));

    return (
        <div>
            {currentPost ? (
                <div className="view-post-container">
                    <h2>Post Title : {currentPost.title}</h2>
                    <p>Content</p>
                </div>
            ) : (
                <div>ไม่พบข้อมูลโพสต์นี้</div>
            )}
        </div>
    )

}

export default CurrentView;

