import React, { useState, useEffect } from 'react';
import Header from './Header';
import './landingpage.css';
import { useNavigate } from 'react-router-dom';


const MovieModal = ({ movie, onClose }) => {
  const navigate = useNavigate();
  
  const handleNavigation = () => {
    navigate('/movie-info', { state: { movie: movie } });
  };

  if (!movie) return null; 



  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{movie.title}</h2>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(movie.trailer).search).get('v')}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        <div class="bttns">
            <button onClick={onClose}>Close</button>
            <button onClick={handleNavigation}>More Info</button>
        </div>
      </div>
    </div>
  );
};

const currentlyRunningMovies = [
    { title: 'Bob Marley: One Love', review: '42%', dayOne: 'TODAY', dayTwo: 'TOMORROW', dayOneTime1: '6:00PM', dayTwoTime1: '7:00PM', dayTwoTime2: '7:50PM', director: 'Reinaldo Marcus Green', cast: 'Kingsley Ben-Adir, Lashana Lynch, James Norton', producer: 'Robert Teital, Dede Gardner, Jeremy Kleiner, Ziggy Marley, Rita Marley, Cedella Marley', rating: 'PG-13', genre: 'Musical/Drama', synopsis: 'BOB MARLEY: ONE LOVE celebrates the life and music of an icon who inspired generations through his message of love and unity. On the big screen for the first time, discover Bob’s powerful story of overcoming adversity and the journey behind his revolutionary music. Produced in partnership with the Marley family and starring Kingsley Ben-Adir as the legendary musician and Lashana Lynch as his wife Rita.', date: '2024-02-14', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Bob_Marley_One_Love.jpg/220px-Bob_Marley_One_Love.jpg', trailer: 'https://www.youtube.com/watch?v=ajw425Kuvtw'},
    { title: 'Madame Web', review: '13%', dayOne: 'TODAY', dayTwo: 'TOMORROW', dayOneTime1: '6:50PM', dayOneTime2: '9:25PM', director: 'S.J. Clarkson', cast: 'Dakota Johnson, Sydney Sweeney, Isabela Merced, Celeste O`Connor, Tahar Rahim, Mike Epps, Emma Roberts, Adam Scott', producer: 'Lorenzo di Bonaventura', rating: 'PG-13', genre: 'Action/Sci-Fi', synopsis: 'Cassandra Webb is a New York City paramedic who starts to show signs of clairvoyance. Forced to confront revelations about her past, she must protect three young women from a mysterious adversary who wants them dead.', date: '2024-02-14', img: 'https://shorturl.at/ruvL2', trailer: 'https://www.youtube.com/watch?v=s_76M4c4LTo'},
    // Add more movie objects here...
  ];
  
  const comingSoonMovies = [
    { title: 'Dune: Part Two', review: '97%', dayOne: 'FRI: MAR 1', dayTwo: 'SAT: MAR 2', dayOneTime1: '11:30AM', dayOneTime2: '2:00PM', dayOneTime3: '7:00PM', director: 'Denis Villeneuve', cast: 'Timothee Chalamet, Zendaya, Rebecca Ferguson, Josh Brolin, Austin Butler, Florence Pugh', producer: 'Mary Parent, Cale Boyter, Denis Villeneuve, Tanya Lapointe, Patric McCormick', rating: 'PG-13', genre: 'Sci-Fi/Adventure', synopsis: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.', date: '2024-03-01', img: 'https://shorturl.at/BGVX2', trailer: 'https://www.youtube.com/watch?v=_YUzQa_1RCE'},
    { title: 'Kung Fu Panda 4', review: 'N/A', dayOne: 'FRI: MAR 8', dayTwo: 'SAT: MAR 9', dayOneTime1: '10:00AM', dayTwoTime1: '1:00PM', dayTwoTime2: '5:30PM', director: 'Mike Mitchell', cast: 'Jack Black, Awkafina, Viola Davis, Dustin Hoffman, James Jong, Bryan Cranston, Ian McShane, Ke Huy Quan', producer: 'Rebecca Huntley', rating: 'PG', genre: 'Comedy/Adventure', synopsis: 'Po must train a new warrior when he is chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he is going to need some help. Teaming up with a quick-witted corsac fox, Po soon discovers that heroes can be found in the most unexpected places', date: '2024-03-08', img: 'https://shorturl.at/fyP09', trailer: 'https://www.youtube.com/watch?v=_inKs4eeHiI'},
  ];

function LandingPage({isLoggedIn, setLoggedIn}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const [filteredCurrentlyRunningMovies, setFilteredCurrentlyRunningMovies] = useState(currentlyRunningMovies);
  const [filteredComingSoonMovies, setFilteredComingSoonMovies] = useState(comingSoonMovies);
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null); 
  const [selectedMovieListType, setSelectedMovieListType] = useState('');


  const handleSearch = () => {
    if (!searchBy || !searchQuery) {
        alert('Please select a search category and enter a query.');
        return;
      }
  
      const filteredCurrently = currentlyRunningMovies.filter((movie) => {
        const value = movie[searchBy].toString().toLowerCase();
        return value.includes(searchQuery.toLowerCase());
      });
  
      const filteredSoon = comingSoonMovies.filter((movie) => {
        const value = movie[searchBy].toString().toLowerCase();
        return value.includes(searchQuery.toLowerCase());
      });
  
      setFilteredCurrentlyRunningMovies(filteredCurrently);
      setFilteredComingSoonMovies(filteredSoon);
  };

  const openModalWithMovie = (movie, index, listType) => {
    setSelectedMovie(movie);
    setSelectedMovieIndex(index);
    setSelectedMovieListType(listType);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setSelectedMovieIndex(null);
    setSelectedMovieListType('');
  };

  const renderMoviesList = (movies, listType) => {
    return movies.map((movie, index) => (
      <>
        <div key={index} className="mov" onClick={() => openModalWithMovie(movie, index, listType)}>
          <img src={movie.img} alt={movie.title} style={{cursor: 'pointer'}} height={325} width={200}/>
          <p className="movie-title">{movie.title}</p>
        </div>
        {selectedMovie && selectedMovieIndex === index && selectedMovieListType === listType && (
          <MovieModal movie={selectedMovie} onClose={closeModal} />
        )}
      </>
    ));
  };


  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      <div className="movies-and-search-container">
      <div className="search-container">
          <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
            {searchBy === '' && <option disabled hidden value="">Search By...</option>}
            <option value="title">Title</option>
            <option value="genre">Genre</option>
            <option value="date">Date</option>
          </select>
          <input
            type="text"
            placeholder="Find a movie to watch!"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="button" onClick={handleSearch}>Search</button>
        </div>
        <div className="sections">
          <h2>CURRENTLY RUNNING</h2>
          <div className='list'>
            {renderMoviesList(filteredCurrentlyRunningMovies, 'currentlyRunning')}
          </div>
          <h2 className="coming-soon-heading">COMING SOON</h2>
          <div className='list'>
            {renderMoviesList(filteredComingSoonMovies, 'comingSoon')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
