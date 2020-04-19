import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import {Helmet} from 'react-helmet';
import Section from '../../Components/Section'
import Loader from "../../Components/Loader";
import Massage from "../../Components/Massage";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding:20px
    `;

const HomePresenter = ({nowPlaying, upcoming, popular, error, loading}) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? <Loader/> : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 &&
        <Section title="Now Playing">
          {nowPlaying.map(movie =>
            <Poster key={movie.id}
                    id={movie.id}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    imageUrl={movie.poster_path}
                    isMovie={true}
                    year={movie.release_date && movie.release_date.substring(0,4)}
            />
          )}
        </Section>}

        {upcoming && upcoming.length > 0 &&
        <Section title="Upcoming Movies">
          {upcoming.map(movie =>
            <Poster key={movie.id}
                    id={movie.id}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    imageUrl={movie.poster_path}
                    isMovie={true}
                    year={movie.release_date && movie.release_date.substring(0,4)}
            />      )}
        </Section>}

        {popular && popular.length > 0 &&
        <Section title="Popular Movies">
          {popular.map(movie =>
            <Poster key={movie.id}
                    id={movie.id}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    imageUrl={movie.poster_path}
                    isMovie={true}
                    year={movie.release_date && movie.release_date.substring(0,4)}
            />      )}
        </Section>}
        {error && <Massage color="#e74c3c" text={error}/>}
      </Container>)}
    </>);


HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default HomePresenter;