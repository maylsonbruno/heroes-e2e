import Login  from "../Page/login";

const login = new Login()

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('/');
    login.loginWithUser('test@test.com','test123')
   
  })

  it('Deve exibir mensagem de erro ao tentar logar com usuário ou password invalidos',()=>{
    cy.visit('/');
    login.loginWithUser('test@test.com','test12')
    login.invalidLogin()
   
  })
})