import { useContext } from 'react';
import cx from 'classnames';
import { LikeIcon } from '../../theme/assets/like';
import { CommentIcon } from '../../theme/assets/comment';
import { CommentsForm } from '../forms/CommentsForm';
import { Comment } from '../Comment';
import { Context } from '../../lib/commentsFormContext';


export const Post = (props) => {
    const {
        body, author, created, hash, comments,
    } = props;

    const commentsJSX = comments.map((comment) => <Comment
        key = { comment.hash }
        { ...comment } />);

    const [selectedPostComment, setSelectedPostComment] = useContext(Context);
    const handleClick = () => {
        setSelectedPostComment(hash);
    };
    const commentClass = cx('comment', {
        'comment-fill': selectedPostComment === hash,
    });

    return (
        <section className = 'post'>
            <img src = { author.avatar } alt = 'avatar' />
            <a href = '#'>{ author.name }</a>
            <time>{ created }</time>
            <p>{ body }</p>
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
                <span
                    className = { commentClass } onClick = {  handleClick  } >
                    <CommentIcon />
                    0 comments
                </span>
            </div>
            { selectedPostComment === hash &&  (
                <>
                    <CommentsForm />
                    <ul>
                        { commentsJSX }
                    </ul>
                </>
            ) }
        </section>
    );
};
