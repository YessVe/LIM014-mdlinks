const md_Links = require('./index.js');
const pathNode = process.argv[2];
const option = process.argv[3];

//1ro hago fxs peques donde obtenga 
//2do commander npm ... le doy forma con las variables peques


//si hay 3 links de google, eso cuenta como único ... método new Set
//cómo hago 

const arrayprueba = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\con_LINKS.md',
      status: 200,
      message: 'OK'
    },
    {
      href: 'https://nodejs.org/',
      text: 'Node.js',
      file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\con_LINKS.md',
      status: 200,
      message: 'OK'
    },
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md',
      status: 200,
      message: 'OK'
    },
    {
      href: 'https://nodej000000s.org/es/',
      text: 'Node.js',
      file: 'D:\\GitHub\\LIM014-mdlinks\\test\\practica\\prueba_directorio\\prueba_directorio2\\pruebalinks.md',
      status: 500,
      message: 'FAIL'
    },
    {
      href: 'https://node.org/asd',
      text: 'md-links',
      file: 'D:\\GitHub\\LIM014-mdlinks\\backend\\pruebalinks.md',
      status: 404,
      message: 'FAIL'
    },
    {
      href: 'https://es.wiki000000pedia.org/wiki/Markdown',
      text: 'Node.js',
      file: 'D:\\GitHub\\LIM014-mdlinks\\backend\\pruebalinks.md',
      status: 500,
      message: 'FAIL'
    },
    {
      href: 'http://getstatuscode.com/500',
      text: 'Dani se inventa un link parte 2',
      file: 'D:\\GitHub\\LIM014-mdlinks\\backend\\pruebalinks.md',
      status: 500,
      message: 'FAIL'
    }
  ];

  const total = (array) => { 
    let totalLinks = array.map((obj) => obj.href)
      return 'Total: ' + totalLinks.length
  }
  console.log(total(arrayprueba));

  const broken = (array) => {
    let linksMessage = array.map((obj) => obj.message)
    let brokenLinks = linksMessage.filter((obj) => obj === 'FAIL')
    return 'Broken: '+ brokenLinks.length
  }
  console.log(broken(arrayprueba));

  const unique = (array) => {
      let linksHref = array.map((obj) => obj.href)
      let linksUnique = [...new Set(linksHref)];
    return 'Unique: ' + linksUnique.length
  }
  console.log(unique(arrayprueba));

  /*cont optionDefault = 
 */

// function cli (path,option) {
  
//       if (option === "--validate") {
        
//         md_Links.mdLinks(path, { validate: true })
//         .then((res) => {
//           /* console.log(res.file +"  "+ res.href +"  "+ res.status +"  " + res.message); */ //imprime el resolve de la 109
//         })
//         .catch((err)=>{
//           console.log('The file, directory or path does not exist or there is no file with .md extension');
//         })



//   // Promise.all(validateLinks(arrayParaValidar))
//       //   .then((res) => res.forEach((res)=>{
//       //     console.log(res.file +"  "+ res.href +"  "+ res.status +"  " + res.message);
//       //   }))


//       /*   console.log("CLI validate"); */
//     } else if (option === "--stats --validate") {
//         console.log("CLI stats");
//     } else if (option === "--stats") {
//         console.log("CLI stats y validate");
//     } 
//   }

//   cli(pathNode,option);








 /*  md_Links.mdLinks(pathNode, { validate: true })
  .then((response) => {
    console.log(response); //imprime el resolve de la 109
  })
  .catch((err)=>{
    console.log('The file, directory or path does not exist or there is no file with .md extension');
  }) */