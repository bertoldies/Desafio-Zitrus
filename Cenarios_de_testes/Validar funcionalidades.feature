#language:pt

Funcionalidade: Funcionalidades da página 

  Cenário: Verificar funcões de slider na pagina
    Dado que estou na página inicial do site
    E na sessão " o que dizem os"
    Quando clico nos botões setas 
    Então deve mudar para o próximo slider corretamente

  Cenário: Verificar funcões de slider na pagina
    Dado que estou na página inicial do site
    E na sessão " Diferencias"
    Quando clico nos botões setas 
    Então deve mudar para o próximo slider corretamente

 Cenário: Validar formulario de contato faltando campos preenchidos
    Dado que estou na tela de contatos do site zitrus
    E campos obrigatorios não estão preenchidos
    Quando clico em enviar o formulario 
    Então deve mostrar uma mensagem informando quais campos são necessários

  Cenário: Validar formulario de contato
    Dado que estou na tela de contatos do site zitrus
    E preenchi corretamente os campos solicitados
    Quando clico em enviar o formulario
    Então deve mostrar uma mensagem informando quais campos são necessários

  Cenário: Verificar mascara e limete de caracteres no campo telefone
    Dado que estou na tela de contatos do site zitrus
    Quando preencho o campo telefone
    Então deve haver uma mascara no formado do numero
    E deve ter limite de caracteres
    E deve permitir apenas numeros