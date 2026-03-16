import type { FormatOptions } from 'oxfmt'

/**
 * Oxfmt Config
 *
 * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference
 */
export const config = {
  // Include parentheses around a sole arrow function parameter
  // default: 'always'
  arrowParens: 'always',

  // Put the `>` of a multi-line HTML element at the end of the last line
  // instead of being alone on the next line (does not apply to self closing elements)
  // default: false
  bracketSameLine: false,

  // Print spaces between brackets in object literals
  // default: true
  bracketSpacing: true,

  // Control whether Oxfmt formats quoted code embedded in the file
  // default: 'auto'
  embeddedLanguageFormatting: 'auto',

  // End of line characters ("auto" is not supported)
  // default: 'lf'
  endOfLine: 'lf',

  // Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars
  // default: 'css'
  htmlWhitespaceSensitivity: 'css',

  // Ignore files matching these glob patterns
  // default: []
  ignorePatterns: [],

  // Whether to insert a final newline at the end of the file
  // default: true
  insertFinalNewline: true,

  // Use single quotes instead of double quotes in JSX
  // default: false
  jsxSingleQuote: false,

  // How to wrap object literals when they could fit on one line or span multiple lines
  // default: 'preserve'
  objectWrap: 'preserve',

  // Maximum line length
  // default: 100
  printWidth: 80,

  // How to wrap prose in markdown
  // default: 'preserve'
  proseWrap: 'preserve',

  // Change when properties in objects are quoted
  // default: 'as-needed'
  quoteProps: 'consistent',

  // Print semicolons at the ends of statements
  // default: true
  semi: false,

  // Enforce single attribute per line in HTML, Vue and JSX
  // default: false
  singleAttributePerLine: false,

  // Use single quotes instead of double quotes
  // default: false
  singleQuote: true,

  // Sort import statements
  // default: disabled
  sortImports: {
    // Define your own groups for matching very specific imports
    // default: []
    customGroups: [],

    // Specifies a list of predefined import groups for sorting
    // default: ["builtin", "external", ["internal", "subpath"], ["parent", "sibling", "index"], "style", "unknown"]
    groups: [
      'builtin',
      'external',
      ['internal', 'subpath'],
      ['parent', 'sibling', 'index'],
      'style',
      'unknown',
    ],

    // Specifies whether sorting should be case-sensitive
    // default: true
    ignoreCase: true,

    // Specifies a prefix for identifying internal imports
    // default: ['~/', '@/']
    internalPattern: ['~/', '@/'],

    // Specifies whether to add newlines between groups
    // default: true
    newlinesBetween: true,

    // Specifies whether to sort items in ascending or descending order
    // default: 'asc'
    order: 'asc',

    // Enables the use of comments to separate imports into logical groups
    // default: false
    partitionByComment: false,

    // Enables the empty line to separate imports into logical groups
    // default: false
    partitionByNewline: false,

    // Specifies whether side effect imports should be sorted
    // default: false
    sortSideEffects: false,
  },

  // Sort package.json keys
  // default: true
  sortPackageJson: {
    // Sort the scripts field alphabetically.
    // default: false
    sortScripts: false,
  },

  // Sort Tailwind CSS classes
  // default: disabled
  sortTailwindcss: {
    // List of additional attributes to sort beyond `class` and `className` (exact match)
    // default: []
    attributes: [],

    // Path to your Tailwind CSS configuration file (v3)
    // default: automatically find "tailwind.config.js"
    // config: undefined,

    // List of custom function names whose arguments should be sorted (exact match)
    // default: []
    functions: [],

    // Preserve duplicate classes
    // default: false
    preserveDuplicates: false,

    // Preserve whitespace around classes
    // default: false
    preserveWhitespace: false,

    // Path to your Tailwind CSS stylesheet (v4)
    // default: installed Tailwind CSS's `theme.css`
    // stylesheet: undefined,
  },

  // Specify the number of spaces per indentation-level
  // default: 2
  tabWidth: 2,

  // Print trailing commas wherever possible in multi-line comma-separated syntactic structures
  // default: 'all'
  trailingComma: 'all',

  // Indent lines with tabs instead of spaces
  // default: false
  useTabs: false,

  // Whether or not to indent the code inside <script> and <style> tags in Vue files
  // default: false
  vueIndentScriptAndStyle: false,
} satisfies FormatOptions
