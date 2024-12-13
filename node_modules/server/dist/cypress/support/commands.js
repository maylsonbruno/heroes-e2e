"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Cypress.Commands.add('login', (username, password) => {
    cy.session(`auth-${username}`, () => {
        cy.log('logging in');
        cy.request({
            method: 'POST',
            url: '/auth',
            body: {
                username,
                password,
            },
            log: false,
        }).then((sub) => {
            localStorage['accessToken'] = sub.body.access_token;
        });
    }, {
        cacheAcrossSpecs: true,
    });
});
Cypress.Commands.add('resetDb', () => {
    cy.exec('npx prisma migrate reset --skip-seed -f && npx prisma db push && npx prisma db seed');
});
Cypress.Commands.add('createHero', () => {
    cy.task('createHero').then((newHero) => {
        delete newHero.createdAt;
        delete newHero.updatedAt;
        delete newHero.avatar;
        cy.wrap(newHero).as('newHero');
    });
});
Cypress.Commands.add('deleteHero', (id) => {
    cy.task('deleteHero', id);
});
//# sourceMappingURL=commands.js.map