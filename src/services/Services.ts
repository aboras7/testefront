import axios from "axios";

const api = axios.create({
    baseURL: 'https://projeto-doeacao.onrender.com'
})

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const cadastrarUsuario = async(url: string, dados: Object, setDados: Function) => { 
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
  }