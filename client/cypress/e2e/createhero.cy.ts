import Loging from '../Page/login'
import CreateHero from '../Page/createhero'

const createHero = new CreateHero()
const login = new Loging()


describe('Create new Hero', () => {
  it('Create new hero with data valid', () => {
    cy.visit('/')
    login.loginWithUser('admin@test.com','test123')
    createHero.createNewHero('DeathNoteDark','$100','6','25','Telekinesis','heroidead.jpeg')
    
  })

  it('Create new Hero with fields no fill',() => {
    cy.visit('/')
    login.loginWithUser('admin@test.com','test123')
    createHero.createNewHeroInvalid()
  })
})