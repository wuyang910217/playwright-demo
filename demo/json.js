const jsonfile = require('jsonfile');

const defaultPath = '../output/data.json';

async function genJson(data, path = '') {
  if (!path) {
    path = defaultPath;
  }
  await jsonfile.writeFileSync(path, data, { spaces: 2 });
}

module.exports = {
  genJson
};
