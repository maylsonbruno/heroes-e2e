import Login from "../Page/login"
import ContractHero from "../Page/contracthero"

const contract = new ContractHero()
const login = new Login()

describe('Contract Hero', () => {
  it('Logged in with data valid', () => {
    cy.visit('/')
    login.loginWithUser('admin@test.com','test123')
    contract.contratcNewHero(0)
    
  })

  it('not logged in ',() => {
    cy.visit('/')
    contract.invalidContractHero(0)
   
  
  })
})