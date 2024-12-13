declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            login(username: string, password: string): void;
            resetDb(): void;
            createHero(): void;
            deleteHero(id: number): void;
        }
    }
}
export {};
