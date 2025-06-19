export class ForeignKeyConstraintError extends Error {
    constructor() {
        super('Resource In Use')
    }
}