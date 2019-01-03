"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const package_config_1 = require("../utility/package-config");
const opt = { name: 'sandbox', version: '1', skipInstall: true };
function default_1(_options) {
    return schematics_1.chain([package_config_1.updatePackageJsonScripts(), schematics_1.externalSchematic('@schematics/angular', 'ng-new', opt)]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map