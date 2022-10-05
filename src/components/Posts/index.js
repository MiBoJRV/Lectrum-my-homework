import { Post } from '../Post';
import { Composer } from '../forms/Composer';

export const Posts = () => {
    return (
        <div className = { 'posts' }>
            <h1 className = 'title'>
                Стена
            </h1>
            <Composer />
            <div
                className = 'posts-container'
                style = { { position: 'relative' } }>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};
