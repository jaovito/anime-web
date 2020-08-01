import React, {useState, useEffect} from 'react';
import { Source, Container, Button } from './styles'
import Menu from '../../components/Menu'

function Animes() {
    const [animes, setAnime] = useState([])


    const video = 'https://animesvideos.s3-sa-east-1.amazonaws.com/kimetsu-1.mp4'

    useEffect(() => {
        (async() => {
          const resp = await fetch('https://kitsu.io/api/edge/anime?filter[slug]=kimetsu-no-yaiba')
          const {data} = await resp.json()
    
    
          console.log(data)
          setAnime(data)
        })()
      }, [])

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
                    <h1>Episódio 1 (PT-BR)</h1>
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