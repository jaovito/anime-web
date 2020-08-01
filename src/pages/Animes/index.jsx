import React, {useState, useEffect} from 'react';
import { Source, Container, Button } from './styles'
import Menu from '../../components/Menu'

function Animes() {
    const [animes, setAnime] = useState([])
    const [kimetsuEp, setKimetsuEp] = useState([1])
    const [inputValue, setInputValue] = useState('')


    const video = `https://animesvideos.s3-sa-east-1.amazonaws.com/kimetsu-${kimetsuEp}.mp4`

    useEffect(() => {
        (async() => {
          const resp = await fetch('https://kitsu.io/api/edge/anime?filter[slug]=kimetsu-no-yaiba')
          const {data} = await resp.json()
    
    
          console.log(data)
          setAnime(data)
        })()
      }, [])


      function handleSubmit(e) {
        e.preventDefault()
        setKimetsuEp(inputValue)
      }

  return (
          <>
            <Menu videoDisabled/>

            <Container className="container">
                {/*responsável por renderizar tudo com o slug kimetsu-no-yaiba */}
                {animes.map((anime => (
                    <section key={anime.id}>
                    <img src={anime.attributes.posterImage.original} alt="Anime Poster"/>
                    <div>
                    <h1>{anime.attributes.canonicalTitle} <br/> <span>EP - 1</span></h1>
                    <h2>Rating Rank: <span>{anime.attributes.ratingRank}</span></h2>
                    <p>{anime.attributes.synopsis}.</p>
                    </div>
                </section>
                )))}

                    {/**anime infos and videos */}
                <main>
                    <h1>Episódio {kimetsuEp} (PT-BR)</h1>
                    <form onSubmit={handleSubmit}>

                    <input min={1} max={7} placeholder='Digite um episódio' type="number" value={inputValue}
                    onChange={e => setInputValue(e.target.value)}/>

                    <button className="btn btn-primary" type="submit">
                        Trocar
                    </button>
                    </form>

                <Source url={[
                    {src: video, type: 'video/mp4'}
                    ]}
                controls={true}/>

                <Button disabled className="btn btn-secondary disabled">Next &gt;&gt;</Button>
                </main>
            </Container>
          </>
  );
}

export default Animes;
