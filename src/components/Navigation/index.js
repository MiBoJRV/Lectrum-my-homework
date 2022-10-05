export const Navigation = () => {
    return (
        <div>
            <div className = 'navigation-profile'>
                <div className = 'profile-wrapper'>
                    <img
                        src = 'https://placeimg.com/256/256/animals'
                        alt = 'avatar'
                        className = 'navigation-avatar' />
                    <div className = 'user-status'>
                        <div className = 'status online'>
                            <span></span>
                        </div>
                    </div>
                </div>
                Chuck Norris
            </div>
            <a
                href = '#'
                className = 'navigation-item'>
                Профиль
            </a>
            <a
                href = '#'
                className = { 'navigation-item active' }
                aria-current = 'page'>
                Стена
            </a>
            <button className = 'logout'>
                Выйти
            </button>
        </div>

    );
};
