import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onNextPage }) => {
    return (
        <button className={s.button} onClick={onNextPage}>
            Load more
        </button>
    );
};

export default LoadMoreBtn;