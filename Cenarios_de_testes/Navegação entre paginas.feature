
#language:pt


Funcionalidade: Navegação entre páginas na página inicial

  Cenário: Abrir sessão "sobre"
    Dado que estou na página inicial do site
    Quando clico no link "Sobre"
    Então devo ser direcioando para pagina desejada

  Cenário: Abrir sessão "Carreiras"
    Dado que estou na página inicial do site
    Quando clico no link "Carreiras"
    Então devo ser direcioando para pagina desejada  


  Cenário: Abrir seleção de soluções
    Dado que estou na página inicial do site
    Quando clico no link "Soluções"
    Então deve abrir um campo de seleção para pra escolher a solução desejada

  Cenário: Navegar para a página de soluções
    Dado que estou na página inicial do site
    E cliquei no link "Soluções"
    E abriu o campo de selação das soluções
    Quando clico em qualquer solução
    Então devo ser direcionado para tela da solução desejada

  Cenário: Navegar para a página de contato
    Dado que estou na página inicial do site
    Quando clico no link "Contato" 
    Então devo ser redirecionado para a página de contato
    E devo ver um formulário de contato

  Cenário: Direcionar para para links clicados
    Dado que estou na página inicial do site
    E visualizando o rodapé da pagina
    Quando clico em alguma link que esteja no rodapé
    Então devo ser direcionado corretamente para a pagina desejada

  Cenário: Direcionar para email
    Dado que estou na página inicial do site
    E visualizando o rodapé da pagina
    Quando clico em link de contato por email
    Então devo me mostrar a opção de escolher o email desejado a ser aberto

  Cenário: Abrir chat whatsapp
    Dado que estou na página inicial do site
    Quando clico no link do whatsapp
    Então devo de abrir uma janela com um formulario e um botão para iniciar conversa

  Cenário: Direcionar para home
    Dado que estou fora da pagina inicial do site zitrus
    Quando clico na logo da zitrus
    Então devo ser direcionado para a home

  Cenário: Verificar loading
    Dado que estou na página inicial do site
    Quando clico em algum buttom ou link 
    E sou direcionado para outra tela
    Então deve mostrar algum tipo de loading para o usuário saber que a ação esta sendo realizada

  