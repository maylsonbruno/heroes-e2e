"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapper = exports.exclude = void 0;
function exclude(model, ...keys) {
    for (const key of keys) {
        delete model[key];
    }
    return model;
}
exports.exclude = exclude;
function mapper(target, source, transform) {
    const keys = Object.keys(source);
    keys.forEach((k) => {
        target[k] = source[k];
    });
    if (transform) {
        transform(target);
    }
    return target;
}
exports.mapper = mapper;
//# sourceMappingURL=mapper.js.map