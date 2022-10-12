export const Comment = (props) => {
    const {
        author, body, created,
    } = props;

    return (
        <li className = 'commentBody'>
            <p> { author.name }
                <span>
                    { created }
                </span>
            </p>
            <p>{ body }</p>
        </li>
    );
};
