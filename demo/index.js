const Client = require('../dist/index').default;
const { genJson } = require('./json');

async function demo() {
  await Client.launch('chromium', { headless: false, slowMo: 50 });

  await Client.goto('http://wufazhuce.com/');

  await Client.screenshot({ path: './output/example1.png' });

  const items = await Client.getAllSelector('#carousel-one>.carousel-inner>.item');

  const contents = [];
  for (const item of items) {
    let imgUrl = await Client.getImgUrl(item, 'a>img');
    let text = await Client.getText(item, '.fp-one-cita-wrapper>.fp-one-cita');
    let linkUrl = await Client.getHref(item, 'a');
    let date = await Client.getText(item, '.fp-one-titulo-pubdate');
    text = text.trim();
    date = date.trim();
    date = date.replace(/\n+/g, '-');
    contents.push({ imgUrl, text, linkUrl, date });
  }

  console.log('写入json文件');
  await genJson(contents);

  // // 进入今天的文章页面
  const url = await Client.getHref(null, '.one-articulo-titulo>a');
  await Client.goto(url);

  const name = await Client.getText(null, '.articulo-titulo');
  const author = await Client.getText(null, '.articulo-autor');
  const article = await Client.getText(null, '.articulo-contenido');
  await genJson({ name, author, article }, './output/article.json');

  await Client.close();
}

demo();
