import React, { useState } from 'react';
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
    { title: 'Bob Marley: One Love', genre: 'Musical/Drama', synopsis: 'BOB MARLEY: ONE LOVE celebrates the life and music of an icon who inspired generations through his message of love and unity. On the big screen for the first time, discover Bob’s powerful story of overcoming adversity and the journey behind his revolutionary music. Produced in partnership with the Marley family and starring Kingsley Ben-Adir as the legendary musician and Lashana Lynch as his wife Rita.', date: '2024-02-14', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Bob_Marley_One_Love.jpg/220px-Bob_Marley_One_Love.jpg', trailer: 'https://www.youtube.com/watch?v=ajw425Kuvtw'},
    { title: 'Madame Web', genre: 'Action/Sci-Fi', synopsis: 'Cassandra Webb is a New York City paramedic who starts to show signs of clairvoyance. Forced to confront revelations about her past, she must protect three young women from a mysterious adversary who wants them dead.', date: '2024-02-14', img: 'https://shorturl.at/ruvL2', trailer: 'https://www.youtube.com/watch?v=s_76M4c4LTo'},
    // Add more movie objects here...
  ];
  
  const comingSoonMovies = [
    { title: 'Dune: Part Two', genre: 'Sci-Fi/Adventure', synopsis: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.', date: '2024-03-01', img: 'https://shorturl.at/BGVX2', trailer: 'https://www.youtube.com/watch?v=_YUzQa_1RCE'},
    { title: 'Kung Fu Panda 4', genre: 'Comedy/Adventure', synopsis: 'Po must train a new warrior when he is chosen to become the spiritual leader of the Valley of Peace. However, when a powerful shape-shifting sorceress sets her eyes on his Staff of Wisdom, he suddenly realizes he is going to need some help. Teaming up with a quick-witted corsac fox, Po soon discovers that heroes can be found in the most unexpected places', date: '2024-03-08', img: 'https://shorturl.at/fyP09', trailer: 'https://www.youtube.com/watch?v=_inKs4eeHiI'},
  ];

function LandingPage() {
  
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
      <Header />
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
