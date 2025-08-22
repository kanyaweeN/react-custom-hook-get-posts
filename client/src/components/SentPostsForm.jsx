import { useState, useEffect } from "react";
import axios from "axios";

function usePosts() {
    const [posts, setPosts] = useState([]);
    const [isError, setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        let ignore = false;
        const getData = async () => {
            try {
                setIsError(false);
                setIsLoading(null);
                const results = await axios.get("http://localhost:4000/posts");
                if (!ignore) setPosts(results.data.data);
            } catch (error) {
                if (!ignore) setIsError(true);
            } finally {
                if (!ignore) setIsLoading(false);
            }
        }
        getData();
        return () => { ignore = true; };
    }, []);
    return { posts, isError, isLoading };
};

export default usePosts;