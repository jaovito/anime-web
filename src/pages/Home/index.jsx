import React, {useState, useEffect} from 'react';
import { Card, Container } from './styles'
import Menu from '../../components/Menu'

function App() {
  const [templates, setTemplates] = useState([])

  useEffect(() => {
    (async() => {
      const resp = await fetch('https://kitsu.io/api/edge/trending/anime')
      const {data} = await resp.json()


      console.log(data)
      setTemplates(data)
    })()
  }, [])


  return (
    <>
      <Menu disabled dark/>

      <Container className="container">
      {templates.map((template => (
        <Card className="anime" key={template.id}>
          <img src={template.attributes.posterImage.original} alt=""/>
          <h1>{template.attributes.canonicalTitle}</h1>
          <h2>Rating Rank: <span>{template.attributes.ratingRank}</span></h2>
          <p>{template.attributes.synopsis}.</p>
        </Card>
      )))}
      </Container>
    </>
  );
}

export default App;
