#language:pt

Funcionalidade: Verificação dos elementos da home

Cenário: Visualizar elementos principais da página inicial
Dado que estou na página inicial do site https://zitrus.com.br/
Então devo ver o logo da empresa
E devo ver o menu de navegação
E devo ver um rodapé com links importantes



Cenário: Validar ortografia
Dado que estou na página inicial do site https://zitrus.com.br/
Quando verifico todos os textos da pagina
Então devem estar com a ortografia correta

Cenário: Validar layout
Dado que estou na página inicial do site https://zitrus.com.br/
Quando navego pela  pagina 
Então não deve haver nenhum layout desconfigurado
E fora de lugar
