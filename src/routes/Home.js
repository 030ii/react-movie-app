import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true, // 로딩중 표시
    movies: [],
  };

  // 비동기 실행 함수 - 영화 데이터
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    ); // movies = data.data.movies
    // const movies = myMovieData;
    this.setState({ movies, isLoading: false }); // == movies: movies, isLoading: false
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

// api가 막혔을 때 테스트용 데이터
const myMovieData = [
  {
    id: 1,
    title: "영화제목1",
    summary: "영화 내용1",
    rating: 4.1,
    year: 2021,
    genres: ["Drama", "Family"],
    medium_cover_image:
      "https://upload.wikimedia.org/wikipedia/ko/d/d8/%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%95%84%EC%9B%83.jpg",
  },
  {
    id: 2,
    title: "영화제목2",
    summary: "영화 내용2",
    rating: 4.9,
    year: 2021,
    genres: ["Drama", "Family"],
    medium_cover_image:
      "https://upload.wikimedia.org/wikipedia/ko/d/d8/%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%95%84%EC%9B%83.jpg",
  },
  {
    id: 3,
    title: "영화제목3",
    summary: "영화 내용3",
    rating: 3.5,
    year: 2021,
    genres: ["Drama", "Family"],
    medium_cover_image:
      "https://upload.wikimedia.org/wikipedia/ko/d/d8/%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C_%EC%95%84%EC%9B%83.jpg",
  },
];

export default Home;
