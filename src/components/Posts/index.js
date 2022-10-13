import { Post } from '../Post';
import { Composer } from '../forms/Composer';

// Mock
import posts from '../../mock-data/posts.json';


export const Posts = () => {
    const postsJSX = posts.map((post) => (
        <Post key = { post.hash } { ...post } />
    ));

    return (
        <div className = { 'posts' }>
            <h1 className = 'title'>
                Стена
            </h1>
            <Composer />
            <div
                className = 'posts-container'
                style = { { position: 'relative' } }>
                { postsJSX }
            </div>
        </div>
    );
};
