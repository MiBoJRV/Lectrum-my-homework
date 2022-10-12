// Mock
import comments from '../../mock-data/comments.json';

export const RecentComment = (props) => {
    const {
        author, body, created,
    } = props;

    return (
        <div className = 'comment'>
            <p className = 'name'>
                { author.name }
            </p>
            <time>{ created }</time>
            <p className = 'body'>
                { body }
            </p>
            <a href = '#'>Больше комментариев к посту</a>
        </div>
    );
};

export const RecentComments = () => {
    const commentsJSX = comments.map((comment) => (
        <RecentComment key = { comment.hash } { ...comment } />
    ));

    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>
                Популярные комментарии
            </h1>
            <section>
                { commentsJSX }
            </section>
        </div>
    );
};
