import s from './ImageCard.module.css'

const ImageCard = ({ image, alt }) => {
    return (
        <div>
            <img className={s.image} src={image} alt={alt || "Image"} />
        </div>
    );
};

export default ImageCard;