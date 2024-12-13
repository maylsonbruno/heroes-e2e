class ContractHero {
    selectorList(){
        const selectors = {
           moneyContrat : "[data-cy='money']",
           confirmContract : ".bg-red-600",
           saveContract : "[data-cy='saves']",
           wrongMessage : '.gap-4 > .flex-col > .mb-1'
         
        }
        return selectors
    }

    contratcNewHero(idContrat:number){
        cy.get(this.selectorList().moneyContrat).eq(idContrat).click()
        cy.get(this.selectorList().confirmContract).click
        cy.get(this.selectorList().saveContract)
    }

    invalidContractHero(idContrat:number){
        cy.get(this.selectorList().moneyContrat).eq(idContrat).click()
        cy.get(this.selectorList().wrongMessage).contains('You must log in to hire this hero.')
    }

}
export default ContractHero