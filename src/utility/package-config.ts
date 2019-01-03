import { Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics'
import { Schema as SchematicsSandboxOptions } from '../schematics-sandbox/schema'

function schematicsSandboxScripts(collectionName: string, sandboxName: string) {
  return {
    build: 'tsc -p tsconfig.json',
    clean: `git checkout HEAD -- ${sandboxName} && git clean -f -d ${sandboxName}`,
    launch: `cd ${sandboxName} && ng g ${collectionName}:${collectionName}`,
    'clean:launch': 'npm run clean && npm run launch',
    'build:clean:launch': 'npm run build && npm run clean && npm run launch',
    'link:schematics': `npm link && cd ${sandboxName} && npm link ${collectionName}`
  }
}

export function updatePackageJsonScripts(options: SchematicsSandboxOptions): Rule {
  return (tree: Tree, _context: SchematicContext): Tree => {
    if (tree.exists('package.json')) {
      const json = JSON.parse(tree.read('package.json')!.toString('utf-8'))
      if (!json.name) throw new SchematicsException('A name is needed in your package.json file')
      if (!json.scripts) json.scripts = {}
      Object.assign(json.scripts, schematicsSandboxScripts(json.name, options.name!))
      tree.overwrite('package.json', JSON.stringify(json, null, 2))
    }
    return tree
  }
}
