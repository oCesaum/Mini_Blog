import { useState } from "react"

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return(
    <div className="create_post">
      <h2>Criar post</h2>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título</span>
          <input 
            type="text" 
            name="title" 
            required 
            placeholder="Insira um título" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}>
          </input>
        </label>
        <label>
          <span>URL da imagem</span>
          <input 
            type="text" 
            name="image" 
            required 
            placeholder="Insira uma imagem" 
            onChange={(e) => setImage(e.target.value)}
            value={image}>
          </input>
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea 
            name="body" 
            required 
            placeholder="Insira o conteúdo"
            onChange={(e) => setBody(e.target.value)}
            value={body}>
          </textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input 
            type="text" 
            name="tags" 
            required 
            placeholder="Insira as tags separadas por vírgula" 
            onChange={(e) => setTags(e.target.value)}
            value={tags}>
          </input>
        </label>
        <button className="btn">Cadastrar</button>
        {/* {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}