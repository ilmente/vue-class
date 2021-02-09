exports.Module = class {
    constructor(module) {
        this.module = module;
    }

    getModuleFilename() {
        return this
            .module
            .identifier()
            .split('!')
            .reduceRight((item) => item);
    }

    contains(search) {
        return this
            .getModuleFilename()
            .indexOf(search) > -1;
    }
}
