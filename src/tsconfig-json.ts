import type { TsConfigJson } from 'type-fest'

export function createTsconfigJson(name: string): Readonly<TsConfigJson> {
  return {
    compilerOptions: {
      esModuleInterop: true,
      skipLibCheck: true,
      target: 'es2022',
      allowJs: true,
      resolveJsonModule: true,
      moduleDetection: 'force',
      moduleResolution: 'node10',
      isolatedModules: true,
      verbatimModuleSyntax: true,
      strict: true,
      noUncheckedIndexedAccess: true,
      noImplicitOverride: false,
      module: 'es2022',
      declaration: true,
      sourceMap: true,
      declarationMap: true,
      incremental: false,
      lib: ['es2022'],
      rootDir: `providers/${name}`,
      outDir: 'dist',
      noCheck: true
    }
  }
}
