import { useNavigate } from "react-router-dom";
import usePosts from "../SentPostsForm";

function PostMap() {
    const navigate = useNavigate();
    const { posts } = usePosts();

    return (
        <div className="board">
            {posts.map((post) => {
                return (
                    <div key={post.id} className="post">
                        <h1>{post.title}</h1>
                        <div className="post-actions">
                            <button
                                className="view-button"
                                onClick={() => navigate(`/post/view/${post.id}`)}
                            >
                                View post
                            </button>
                            <button className="edit-button">Edit post</button>
                        </div>

                        <button className="delete-button">x</button>
                    </div>
                );
            })
            }
        </div>
    )
}

export default PostMap;


// {
//     posts.map((post) => {
//         return (
//             <div key={post.id} className="post">
//                 <h1>{post.title}</h1>
//                 <div className="post-actions">
//                     <button
//                         className="view-button"
//                         onClick={() => navigate(`/post/view/${post.id}`)}
//                     >
//                         View post
//                     </button>
//                 </div>
//             </div>
//         );
//     })
// }