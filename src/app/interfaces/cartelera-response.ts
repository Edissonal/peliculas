export interface CarteleraResponse {
    total_results: number;
    dates:         Dates;
    results:       Movie[];
    total_pages:   number;
    page:          number;
}

export interface Dates {
    minimum: Date;
    maximum: Date;
}

export interface Movie {
    vote_average:      number;
    popularity:        number;
    vote_count:        number;
    release_date:      Date;
    adult:             boolean;
    backdrop_path:     string;
    title:             string;
    genre_ids:         number[];
    poster_path:       string;
    original_language: string;
    original_title:    string;
    id:                number;
    overview:          string;
    video:             boolean;
}