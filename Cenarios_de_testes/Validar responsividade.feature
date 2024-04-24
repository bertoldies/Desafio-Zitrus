#language:pt

Funcionalidade: Verificar responsividade da página

  Cenário: Visualizar página em dispositivos mobile (430x932)
    Dado que estou na página inicial do site
    Quando redimensiono a janela do navegador para o tamanho de um dispositivo móvel
    Então devo ver os elementos da página reorganizados para se ajustarem à tela menor
    E devo poder navegar pelo site de forma fácil e eficiente

Cenário: Visualizar página em dispositivos tablet (1024x1366)
    Dado que estou na página inicial do site
    Quando redimensiono a janela do navegador para o tamanho de um dispositivo tablet
    Então devo ver os elementos da página reorganizados para se ajustarem à tela menor
    E devo poder navegar pelo site de forma fácil e eficiente