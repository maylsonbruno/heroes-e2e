"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
const data_1 = require("./cypress/support/data");
exports.default = (0, cypress_1.defineConfig)({
    projectId: 'nd8nd1',
    e2e: {
        testIsolation: false,
        specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}',
        baseUrl: 'http://localhost:3001',
        setupNodeEvents(on, config) {
            on('task', {
                createHero: data_1.createHero,
                deleteHero: data_1.deleteHero,
            });
        },
    },
});
//# sourceMappingURL=cypress.config.js.map