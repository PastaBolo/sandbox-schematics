import { Rule, chain, externalSchematic } from '@angular-devkit/schematics'
import { Schema as NgNewOptions } from '@schematics/angular/ng-new/schema'

import { updatePackageJsonScripts } from './package-config'

const opt: NgNewOptions = { name: 'sandbox', version: '1', skipInstall: true }

export default function(_options: any): Rule {
  return chain([updatePackageJsonScripts(), externalSchematic('@schematics/angular', 'ng-new', opt)])
}
