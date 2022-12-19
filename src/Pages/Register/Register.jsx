import "../../App.css"

import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

export default function Register() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const {createUser, error: authError, loading} = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password,
      confirmPassword,
    }

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

    const res = await createUser(user)

    console.log(res)
  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  },[authError])

  return (
    <div className="register">
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário para entrar na aplicação</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input 
            type="text" 
            name="displayName" 
            required 
            placeholder="Digite um nome de usuário" 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            autoComplete="off"
            />
        </label>
        <label>
          <span>E-mail:</span>
          <input 
            type="email" 
            name="email" 
            required 
            placeholder="Digite um e-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            />
        </label>
        <label>
          <span>Senha:</span>
          <input 
            type="password" 
            name="password" 
            required 
            placeholder="Digite uma senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            />
        </label>
        <label>
          <span>Confirme a senha:</span>
          <input 
            type="password" 
            name="confirmPassword" 
            required 
            placeholder="Confirme sua senha" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="off"
            />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}