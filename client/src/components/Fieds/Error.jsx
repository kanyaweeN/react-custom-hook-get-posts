import usePosts from "../SentPostsForm";

function IsErrorLoading() {
    const { isError, isLoading } = usePosts();

    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>Request failed</h1>;

    return null;
}

export default IsErrorLoading;