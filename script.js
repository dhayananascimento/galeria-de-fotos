const dados = [
    {
      alt: "imagem 01",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },  
    {
      alt: "imagem 02",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 03",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 04",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 05",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 06",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 07",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 08",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem  09",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 10",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 11",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 12",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 13",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 14",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 15",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 16",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 17",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 18",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 19",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 20",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 21",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 22",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 23",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 24",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    },
    {
      alt: "imagem 25",
      src: "imagem.jpg",
      autor: "Photo by matthew reyes on Unsplash"
    }
]


const botaoTopo = document.getElementById("botaoTopo")
const containerPagina = document.getElementById("containerPaginas")
const containerGaleria = document.getElementById("containerGaleria")

let limitePaginas = 9
let paginaAtual = 0

function paginacao() {
  let paginas = parseInt(dados.length/limitePaginas)
  let totalPaginas = (dados.length%limitePaginas) == 0 ? paginas : ++paginas 

  exibePaginacao(totalPaginas)
}

function exibePaginacao(totalPaginas) {
  containerPagina.innerHTML = ""

  for (let i = 0; i < totalPaginas; i++) { 
    let botao = document.createElement("button")
    botao.appendChild(document.createTextNode(i + 1))

    paginaAtual == i ? botao.classList.add("ativo") : null
    
    botao.addEventListener("click", () => {
      paginaAtual = i
      galeria()
    })
    containerPagina.appendChild(botao)
  }
}

function galeria() {
  let minimoPaginas = paginaAtual * limitePaginas
  let maximoPaginas = minimoPaginas + limitePaginas

  itensPaginaAtual = dados.slice(minimoPaginas, maximoPaginas)
  exibeGaleria(itensPaginaAtual)
  paginacao()
}

function exibeGaleria(dados) {
    containerGaleria.innerHTML = ""

    dados.forEach((element) => {
      let container = document.createElement("div")
      container.classList.add("containerImagem")

      let imagem = document.createElement("img")
      imagem.setAttribute("src", `imagens/${element.src}`)
      imagem.setAttribute("alt", element.alt)

      let titulo = document.createElement("h3")
      titulo.appendChild(document.createTextNode(element.alt))

      let autor = document.createElement("p")
      autor.appendChild(document.createTextNode(element.autor))

      container.appendChild(imagem)
      container.appendChild(titulo)
      container.appendChild(autor)

      containerGaleria.appendChild(container)
    })
}

galeria()
