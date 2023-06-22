import { Movie, useEffect } from "./Movie";

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="grid gap-4 grid-cols-movies justify-items-center">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4 className="text-4xl">No movies found</h4>
            )}
        </div>
    );
}

export { Movies };
