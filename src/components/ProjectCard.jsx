// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, url, image }) => {
    return (
        <div className="max-w-sm mx-auto my-3.5 bg-custom-lighter rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-custom-primary">{title}</h2>
                <p className="text-custom-secondary mt-2">{description}</p>
                <a href={url} className="text-custom-accent hover:underline mt-4 block">View project</a>
            </div>
        </div>
    );
}

export default ProjectCard;