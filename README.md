# Schematics Sandbox

## 1 - Install the schematic

```bash
npm install --save-dev pastabolo/schematics-sandbox
```

## 2 - Run the schematic

```bash
schematics schematics-sandbox:schematics-sandbox [sandbox-name]
```

## 3 - Link the schematic

```bash
npm run link:schematics
```

## 4 - Commit this initial project

```bash
git init
git add -A
git commit -m "initial commit"
```

## 5 - Write your schematics

This command resets the sandbox, rebuilds the schematics and launches it

```bash
npm run build:clean:launch
```

You can also develop your schematics in watch mode and use only the clean:launch command

```bash
npm run build -- -w
npm run clean:launch
```

## Sources

### Thanks to

- Brian Love _([Ng Add Schematic](https://brianflove.com/2018/12/15/ng-add-schematic/))_
- Kevin Schuchard _([Schematic Sandbox](https://www.kevinschuchard.com/blog/2018-11-20-schematic-sandbox/))_
- Angular Schematics code source _([@schematics/angular](https://github.com/angular/angular-cli/tree/master/packages/schematics/angular))_
