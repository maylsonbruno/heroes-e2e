class Login {
    selectorList(){
       const selectors = {
         usernameField:'input[type="email"]',
         passwordField: 'input[type="password"]',
         loginButton : 'button',
          wrongCredentialAlert : ".text-red-500"
         
       }
       
       return selectors
 
    }
 
    loginWithUser(username: string, password: string){
     cy.get(this.selectorList().loginButton).contains('Login').click();
     cy.get(this.selectorList().usernameField).type(username)
     cy.get(this.selectorList().passwordField).type(password)
     cy.get(this.selectorList().loginButton).contains('Sign in').click();
     
     
    }
 
    invalidLogin(){
       cy.get(this.selectorList().wrongCredentialAlert).contains('Invalid email or password')
      
     }
 }
 export default Login
 
 