import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Button from '../Button/Button'
import S from "./Main.module.css"

const Main = () => {
    const [data, setValorInput] = useState('250')
    const [apod, setApod] = useState()
  
    function handleSetInput(target) {
      setValorInput(target.value)
    }
  
    async function handleRequisicao() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=ischRMqt8CkpjD7jsQ24FQIPenxUJPHbuD3wi5E9&date=${data}`
      const response = await fetch(url)
      const json = await response.json()
  console.log(json);

      const resposta = {
        data: json.date,
        titulo: json.title,
        explicacao: json.explanation,
        imagem: json.hdurl,
        video: json.url
      }
      setApod(resposta)
      setValorInput('')
    }
  
    useEffect(() => {
      handleRequisicao()
    }, []);



  return (
    <main>
      <div>
        <Header />
      </div>
      <section>
      <input
          type="date"
          value={data}
          onChange={({ target }) => handleSetInput(target)}
        />
        <button 
          onClick={handleRequisicao}
        >Buscar Apod</button>
      </section>  
      <section>
      <picture>
          <img className={S.contentFoto} src={!!apod ? apod.imagem : ''} />
      </picture>
        <p>{!!apod && apod.titulo}</p>
        <p>{!!apod && apod.explicacao}</p>
        <p>{!!apod && apod.titulo}</p>
        {apod.media_type !== "image" && <iframe src={apod.url} />}
      </section>  

      <div>
        <Footer />
      </div>

    </main>
  )
}

export default Main