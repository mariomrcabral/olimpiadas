function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    //console.log(section); // Loga o elemento HTML no console para fins de depuração

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    //se  campoPesquisa for uma string vazia, sem nada, não traz nada na pesquisa
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado na pesquisa. Digite o nome do Atleta ou Esporte.</p>"
      return
      //um unico sinal de = é de atribuição, dois == é de comparação
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    //Transforma  toda a entrada para letra minuscula

    //console.log(campoPesquisa)

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()  
      tags = dado.tags.toLowerCase()    
      //se titulo includes campoPesquisa então, execute somente se coincider
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        //cria um novo elemento de acordo com a pesquisa
        //Onde vai pesquisar o titulo e a descrição também, as duas barras || signifa o OR em JS
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank" >${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
      `;
      }      
      //console.log(dado.titulo.includes(campoPesquisa))
      // Constrói o HTML para cada item do resultado da pesquisa,
      // incluindo título, descrição e link
    }
    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado na pesquisa</p>"
      
      //onde o sinal de ! indica que nada foi retornado na busca dentro da nossa base, ou seja
      //como se fosse resultados == ""
      console.log(resultados)
    }

      // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
    console.log(resultados)
  }  
  // console.log(dados); // Descomente esta linha para ver o conteúdo da variável dados no console