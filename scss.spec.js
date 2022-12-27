const path = require('path');
const sassTrue = require('sass-true');
const glob = require('glob');

describe('SASS Unit tests', () => {
  const sassTestFiles = glob.sync(path.resolve(process.cwd(), './**/*.spec.scss'));
  sassTestFiles.forEach(file => sassTrue.runSass({ file }, { describe, it }));
});
