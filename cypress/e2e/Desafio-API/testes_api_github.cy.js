
describe('Realizar testes na API do GitHub', () => {

const username = 'bertoldies'
const repo = 'Desafio_Zitrus'
const repositorio = {
  owner: 'bertoldies',
  name: 'Desafio_Zitrus',
  description: 'Repositorio criado para fins de testes',
}
const issue = {
  title: 'Zitrus'
}


  it('Realizar a criação de um repositorio', () => {
    cy.criar_repositorio(repositorio)
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq(repositorio.name)
        expect(response.body.description).to.equal(repositorio.description)
      })
  })

  it('Consulta de repositorio via API', () => {
    cy.request(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        expect(response.status).to.eq(200)
        const repositorio_criado = response.body.some(item => item.name === repositorio.name);
        expect(repositorio_criado).to.be.true

      })
  })

  it('criação de issue via API', () => {
    cy.criar_issue(issue)
      .then(response => {
        expect(response.status).to.eq(201)
        expect(response.body.title).to.eq(issue.title)

      })
  })

  it('Consultar issue criada via API', () => {
    cy.request(`https://api.github.com/repos/${username}/${repo}/issues`)
      .then((response) => {
        expect(response.status).to.eq(200)
        const issue_criada = response.body.some(item => item.title === issue.title);
        expect(issue_criada).to.be.true

      })
  })

  it('Excluir repositorio via API', () => {
    cy.excluir_repositorio()
      .then((response) => {
        expect(response.status).to.eq(204)
      })
  })

  it('Verificar se repositorio foi excluido via API', () => {
    cy.request(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        expect(response.status).to.eq(200)
        const repositorio_excluido = !response.body.some(item => item.name === repositorio.name);
        expect(repositorio_excluido).to.be.false

      })
  })

})