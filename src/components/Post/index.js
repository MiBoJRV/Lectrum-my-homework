import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';

export const Post = () => {
    return (
        <section className = 'post'>
            <img src = 'https://placeimg.com/256/256/animals' alt = 'avatar' />
            <a href = '#'>Chuck Norris</a>
            <time>about 2 hours ago</time>
            <p>While a good leader sustains momentum, a great leader increases it.
               ~ John C. Maxwell</p>
            <div className = 'reaction-controls'>
                <section className = 'like'>
                    <div>
                        <span>0</span>
                    </div>
                    <span className = 'icon'>
                        <LikeIcon />
                        Like
                    </span>
                </section>
                <span className = 'comment'>
                    <CommentIcon />
                    0 comments
                </span>
            </div>
        </section>
    );
};
