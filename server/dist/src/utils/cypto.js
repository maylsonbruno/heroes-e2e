"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = exports.generatePasswordHash = void 0;
const bcrypt = require("bcrypt");
async function generatePasswordHash(password) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
}
exports.generatePasswordHash = generatePasswordHash;
async function validatePassword(password, hash) {
    return await bcrypt.compare(password, hash);
}
exports.validatePassword = validatePassword;
//# sourceMappingURL=cypto.js.map