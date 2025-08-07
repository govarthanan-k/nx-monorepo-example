```

npx create-nx-workspace@latest gova --package-manager=yarn
yarn add -D nx @nx/workspace -W
touch workspace.json
mkdir -p apps/editor
mkdir -p apps/marketing
mkdir -p libs/common-ui
touch apps/editor/project.json
touch apps/marketing/project.json
touch libs/common-ui/project.json



nx run-many --targets=start,build:watch --projects=editor,common-ui --parallel

nx run editor:build

npx nx reset


============


nx run-many -t build

nx release --specifier prerelease --preid rc --first-release

nx release publish

==========

# 1. Build everything
nx run-many -t build

# 2. Version (dry run first)
nx release --specifier prerelease --preid rc --first-release --dry-run

# 3. If dry run looks good, do the actual release
nx release --specifier prerelease --preid rc --first-release --skip-publish

# 4. Publish to npm
nx release publish

# 5. Verify
npm view @gova/common-ui
npm view @gova/editor

=====================

"scripts": {
    "release:rc": "nx run-many -t build && nx release --specifier prerelease --preid rc --dry-run",
    "release:rc:publish": "nx run-many -t build && nx release --specifier prerelease --preid rc && nx release publish",
    "release:stable": "nx run-many -t build && nx release --specifier patch --dry-run",
    "release:stable:publish": "nx run-many -t build && nx release --specifier patch && nx release publish"
  }

```
