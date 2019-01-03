import { Rule, chain, externalSchematic } from '@angular-devkit/schematics'
import { Schema as NgNewOptions } from '@schematics/angular/ng-new/schema'
import { Schema as SchematicsSandboxOptions } from './schema'
import { updatePackageJsonScripts } from '../utility/package-config'

export default function(options: SchematicsSandboxOptions): Rule {
  const opt: NgNewOptions = { name: options.name || 'sandbox', version: '1', skipInstall: true }
  return chain([updatePackageJsonScripts(), externalSchematic('@schematics/angular', 'ng-new', opt)])
}
