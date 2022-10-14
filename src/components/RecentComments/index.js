import { useRecentComments } from '../../hooks/useRecentComments';

// Helpers
import { fetchify } from '../../helpers/fetchify';

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
    const { data, isFetched } = useRecentComments();
    const commentsJSX = data.map((comment) => (
        <RecentComment key = { comment.hash } { ...comment } />
    ));

    return (
        <div className = 'most-recent-comments'>
            <h1 className = 'title'>
                Популярные комментарии
            </h1>
            <section>
                { fetchify(isFetched, commentsJSX) }
            </section>
        </div>
    );
};
