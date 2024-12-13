"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHero = exports.createHero = void 0;
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
async function createHero() {
    const hero = {
        name: 'Test Hero',
        price: 1,
        saves: 1,
        fans: 1,
        powers: {
            connect: [{ id: 1 }],
        },
    };
    const createdHero = await client.hero.create({
        data: hero,
    });
    return client.hero.findUniqueOrThrow({
        where: {
            id: createdHero.id,
        },
        include: {
            powers: true,
            avatar: {
                select: {
                    id: true,
                },
            },
        },
    });
}
exports.createHero = createHero;
async function deleteHero(id) {
    await client.avatarImage.deleteMany({
        where: {
            heroId: id,
        },
    });
    return await client.hero.deleteMany({
        where: {
            id,
        },
    });
}
exports.deleteHero = deleteHero;
//# sourceMappingURL=data.js.map