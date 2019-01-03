"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const package_config_1 = require("../utility/package-config");
function default_1(options) {
    const opt = { name: options.name || 'sandbox', version: '1', skipInstall: true };
    return schematics_1.chain([package_config_1.updatePackageJsonScripts(), schematics_1.externalSchematic('@schematics/angular', 'ng-new', opt)]);
}
exports.default = default_1;
