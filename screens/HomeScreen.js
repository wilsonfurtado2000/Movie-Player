import React from 'react'
import './HomeScreen.css'
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests'

  
function HomeScreen() {
    return (
        <div className="home_screen">
            <Nav/>
            <Banner/>
            <Row 
                title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row title=" Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
            <Row title="Documentary" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        </div>
    )
}

export default HomeScreen
