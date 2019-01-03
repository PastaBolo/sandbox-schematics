"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const package_config_1 = require("../utility/package-config");
function default_1(options) {
    options.name = options.name || 'sandbox';
    const ngNewOptions = { name: options.name, version: '1', skipInstall: true, skipGit: true };
    return schematics_1.chain([package_config_1.updatePackageJsonScripts(options), schematics_1.externalSchematic('@schematics/angular', 'ng-new', ngNewOptions)]);
}
exports.default = default_1;
