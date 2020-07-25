import React, {useState} from 'react';

import {Form, FormControl, Button} from 'react-bootstrap'
import {Container, List} from './styles'
import Menu from '../../components/Menu'


function AnimeList() {
  const [animes, setAnime] = useState([])
  const [inputValue, setInputValue] = useState('')

  async function handleSearch(e) {
      e.preventDefault()
      const resp = await fetch(`https://kitsu.io/api/edge/anime?filter[slug]=${inputValue.toLowerCase().replace(/\s/g, '-')}`)
      const {data} = await resp.json()
      
      setAnime(data)
  }
  console.log(animes)

  return (
    <>
    <Menu searchDisabled/>
    <Container>
      <Form onSubmit={handleSearch}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => setInputValue(e.target.value)} value={inputValue}/>
        <Button type='submit' variant="outline-info">Search</Button>
      </Form>

      {animes.map((anime => (
        <List key={anime.id}>
        <img src={anime.attributes.posterImage.original} alt=""/>
        <div>
        <h1>{anime.attributes.canonicalTitle}</h1>
        <h2>Rating Rank: <span>{anime.attributes.ratingRank}</span></h2>
        <p>{anime.attributes.synopsis}.</p>
        </div>
      </List>
      )))}
    </Container>
    </>
  );
}

export default AnimeList;