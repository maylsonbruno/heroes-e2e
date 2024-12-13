class CreateHero {
    selectorList(){
        const selectors = {
            usernameField:'input[type="email"]',
            passwordField: 'input[type="password"]',
            loginButton : 'button',
            buttoCreateHero : "[href='/heroes/new'] button",
            nameHero : "[data-cy='nameInput']",
            priceHero : "[data-cy='priceInput']",
            fansHero : "[data-cy='fansInput']",
            saveHero : "[name='saves']",
            powerHero: 'select[name="powers"]',
            avatarHero : "[data-cy='avatarFile']",
            selectAvatar : "[data-cy='avatarFile']",
            buttoSave : 'button',
            validFields: ".text-red-500"
            
        }
        return selectors
    }

    createNewHero(name:string,price: string,fans:string,save: string,power:string,avatar:string){

        cy.get(this.selectorList().buttoSave).contains('Create New Hero').click()
        cy.get(this.selectorList().nameHero).type(name)
        cy.get(this.selectorList().priceHero).type(price)
        cy.get(this.selectorList().fansHero).type(fans)
        cy.get(this.selectorList().saveHero).type(save)
        cy.get(this.selectorList().powerHero).select(power)
        cy.get(this.selectorList().avatarHero).click()
        cy.get(this.selectorList().avatarHero).selectFile(avatar)
        cy.get(this.selectorList().buttoSave).eq(2).click()

    }

    createNewHeroInvalid(){
        cy.get(this.selectorList().buttoSave).contains('Create New Hero').click()
        cy.get(this.selectorList().buttoSave).eq(2).click()
        cy.get(this.selectorList().validFields).eq(0).contains('Name is required')
        cy.get(this.selectorList().validFields).eq(1).contains('Price is required')
        cy.get(this.selectorList().validFields).eq(2).contains('Fans is required')
        cy.get(this.selectorList().validFields).eq(3).contains('Saves is required')
        cy.get(this.selectorList().validFields).eq(4).contains('Powers is required')
       
    }
}
export default CreateHero