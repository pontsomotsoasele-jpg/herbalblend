function ServiceCard({ title, description, tag, image, imageAlt, featured = false }) {
    return (
        <article className={`service-card ${featured ? "featured" : ""}`}>
            <div className="card-image-wrapper">
                <img src={image} alt={imageAlt} className="card-image" />
                <span className="card-tag">{tag}</span>
            </div>
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </article>
    );
}

export default ServiceCard;
