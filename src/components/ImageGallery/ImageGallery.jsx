import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'

const ImageGallery = ({ gallery }) => {
    return (
        <ul className={s.gallery}>
            {gallery.map(image => (
                <li key={image.id}>
                    <ImageCard image={image.urls.small} alt={image.alt_description} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;