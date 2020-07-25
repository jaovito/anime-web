import React, {useState} from 'react';
import { Card, Container } from './styles'
import Menu from '../../components/Menu'

function App() {
  const [templates, setTemplates] = useState([])

  useEffect(() => {
    (async() => {
      const resp = await fetch('https://kitsu.io/api/edge/trending/anime')
      const {data} = await resp.json()

      const Name1 = data[0].attributes
      const Name2 = data[1].attributes
      const Name3 = data[2].attributes
      const Name4 = data[3].attributes
      const Name5 = data[4].attributes
      const Name6 = data[5].attributes
      const Name7 = data[6].attributes
      const Name8 = data[7].attributes
      const Name9 = data[8].attributes
      const Name10 = data[9].attributes

      const totalNumbers = [Name1, Name2, Name3, Name4, Name5, Name6, Name7, Name8, Name9, Name10]
      
      console.log(totalNumbers)
      setTemplates(totalNumbers)
    })()
  }, [])


  return (
    <>
      <Menu disabled/>

      <Container className="container">
      {templates.map((template => (
        <Card className="anime" key={template.userCount}>
          <img src={template.posterImage.original} alt=""/>
          <h1>{template.canonicalTitle}</h1>
          <h2>Rating Rank: <span>{template.ratingRank}</span></h2>
          <p>{template.synopsis}.</p>
        </Card>
      )))}
      </Container>
    </>
  );
}

export default App;
