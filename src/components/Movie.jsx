function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return (
        <div
            id={id}
            className="border-4 w-72 rounded-lg border-purple-600 overflow-hidden"
        >
            <div className="">
                {poster === "N/A" ? (
                    <img
                        className=""
                        alt={title}
                        src={`https://placehold.co/300x400?text=${title}`}
                    />
                ) : (
                    <img className="overflow-hidden" src={poster} alt={title} />
                )}
                <div className="p-4">
                    <h5 className="mb-2 text-2xl font-bold tracking-tigh">
                        {title}
                    </h5>

                    <p className="">
                        {year} {type}
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Movie };
