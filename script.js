const imagens = [
    {
      src: "https://images.unsplash.com/photo-1587842495357-9d810efc6a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      alt: "img",
      tipo: "comidas"
    },
    {
      src: "https://images.unsplash.com/photo-1517947138120-81858a0b2ab7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
      alt: "img",
      tipo: "comidas"
    },
    {
      src: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80",
      alt: "img",
      tipo: "comidas"
    },
    {
      src: "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "img",
      tipo: "comidas"
    },
    {
      src: "https://images.unsplash.com/photo-1568600891621-50f697b9a1c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      alt: "img",
      tipo: "comidas"
    },
    {
      src: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      alt: "img",
      tipo: "comidas"
    },
    {
      src: "https://images.unsplash.com/photo-1582034986517-30d163aa1da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      alt: "img",
      tipo: "comidas"
    },
    {
      src: "https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      alt: "img",
      tipo: "flor"
    },
    {
      src: "https://images.unsplash.com/photo-1496932388010-82366a36677e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "img",
      tipo: "flores"
    },
    {
      src: "https://images.unsplash.com/photo-1581621222102-2d4e2ae21256?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=625&q=80",
      alt: "img",
      tipo: "flores"
    },
    {
      src: "https://images.unsplash.com/photo-1562628379-791d08579b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1528&q=80",
      alt: "img",
      tipo: "flores"
    },
    {
      src: "https://images.unsplash.com/photo-1505609843853-f9bc4956d85c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      alt: "img",
      tipo: "flores"
    },
    {
      src: "https://images.unsplash.com/photo-1588656699187-85ea028553d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80",
      alt: "img",
      tipo: "flores"
    },
    {
      src: "https://images.unsplash.com/photo-1582783000910-79f5e993e8a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80",
      alt: "img",
      tipo: "flores"
    },
    {
      src: "https://images.unsplash.com/photo-1531603071569-0dd65ad72d53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=716&q=80",
      alt: "img",
      tipo: "flores"
    },
    {
      src: "https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" ,
      alt: "img",
      tipo: "animais"
    },
    {
      src: "https://images.unsplash.com/photo-1470619549108-b85c56fe5be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80" ,
      alt: "img",
      tipo: "animais"
    },
    {
      src: "https://images.unsplash.com/photo-1496316980714-b041aa7fa802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=332&q=80" ,
      alt: "img",
      tipo: "animais"
    },
    {
      src: "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" ,
      alt: "img",
      tipo: "animais"
    },
    {
      src: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80" ,
      alt: "img",
      tipo: "animais"
    },
    {
      src: "https://images.unsplash.com/photo-1543757177-b2d52493282e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" ,
      alt: "img",
      tipo: "animais"
    },
    {
      src: "https://images.unsplash.com/photo-1445820200644-69f87d946277?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80" ,
      alt: "img",
      tipo: "animais"
    },
    {
      src: "https://images.unsplash.com/photo-1570500420685-027d9aa45bb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" ,
      alt: "img",
      tipo: "animais"
    },
                    
    {
      src: "https://images.unsplash.com/photo-1574451987955-6395ba377b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80", 
      alt: "img",
      tipo: "paisagens"
    }, 
    {
      src: "https://images.unsplash.com/photo-1518142275918-24377c2e490b?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", 
      alt: "img",
      tipo: "paisagens"
    }, 
    {
      src: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
      alt: "img",
      tipo: "paisagens"
    }, 
    {
      src: "https://images.unsplash.com/photo-1583214552082-dff0bb815203?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", 
      alt: "img",
      tipo: "paisagens"
    }, 
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=840&q=80", 
      alt: "img",
      tipo: "paisagens"
    }, 
    {
      src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
      alt: "img",
      tipo: "paisagens"
    }, 
    {
      src: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80", 
      alt: "img",
      tipo: "paisagens"
    }, 
    {
      src: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", 
      alt: "img",
      tipo: "paisagens"
    },    
];

const bt_navegacao = document.getElementById("bt-navegacao");
const navegacao = document.getElementById("navegacao");

bt_navegacao.addEventListener("click", () => navegacao.classList.toggle("bt-cabecalho"));
navegacao.addEventListener("click", () => navegacao.classList.toggle("bt-cabecalho"));

const carregaItensSecao = (id) => {
    let secao = document.getElementById(id);

    let container = document.createElement("div");
    container.classList.add("secao");

    let titulo = document.createElement("h2");
    titulo.appendChild(document.createTextNode(id));

    imagens.forEach((element) => {
        if(element.tipo == id) {
            let containerImagem = document.createElement("div");
            containerImagem.classList.add("container-imagem");

            let imagem = document.createElement("img");
            imagem.setAttribute("src", element.src);
            imagem.setAttribute("alt", element.alt);

            containerImagem.appendChild(imagem);
            container.appendChild(containerImagem);
        }
    });

    secao.appendChild(titulo);
    secao.appendChild(container);
}

const carregaSecoes = () => {
    let secao = document.querySelectorAll("section");
    secao.forEach(element =>  carregaItensSecao(element.id));
}

carregaSecoes();
