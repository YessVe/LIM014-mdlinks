/* module.exports = () => {
  // ...
}; */




//FUNCIÓN PARA LAS OPCIONES 1) --validate, 2) --stats y 3) --stats --validate

if (path.indexOf("\\") == -1) { //si no lo encuentra, es el nombre del archivo  
     path1 = pathNode.resolve(path); //get the absolute path calculation of a relative path
     fileExists = fs.existsSync(path1);
    if (fileExists === true && path1.slice(-3) === ".md") {   
        console.log('analizar archivo');
        console.log('es un archivo .MD');
        console.log(fileExists);

        if (option === "--validate") {
            console.log("CLI validate");
        } else if (option === "--stats" && option2 === undefined) {
            console.log("CLI stats");
        } else if (option === "--stats" && option2 === "--validate" ) {
            console.log("CLI stats y validate");
        } 

    } else { 
        console.log('no existe archivo o NO es un archivo .MD');
    }
    console.log('es ruta relativa');
} else {
    fileExists = fs.existsSync(path);
    if (fileExists === true) {   
        console.log('analizar archivo 2');    
    } else { 
        console.log('no existe archivo 2');
    }
    console.log('es una ruta absoluta');
}


function leerArchivo (data) {
            const filemd=`
            [GitHub](http://gist.github.com/rxjjaviers/7360908)
            [Link](https://gist.github.com/rddxjjaviers/7360908)
            `;
        
            const tokens = marked.lexer(filemd);
            console.log(tokens);
        
            //convierte md a html para poder W con DOM
            const html = marked.parser(tokens);
            console.log(html);
        
            const dom = new JSDOM(html);
            //busco en el dom todos q tengan referencia <a href="wwww....">
            x=dom.window.document.querySelectorAll("a"); 
            console.log(dom.window.document.querySelectorAll("a")); 
        
            //cantidades encontradas
            console.log(x.length); //2
            //haces un for . yo simplemente lo leo
        
            //1er elemento encontrado poner en console.log para q veas
            console.log(x[0].href);
            console.log(x[0].textContent);
             
            console.log(x[1].href);
            console.log(x[1].textContent);
}


/* fetch('https://www.google.com/')
    .then(res => {
      let estado = res.status;
      if (estado == 200) {
        console.log('link válido');
      }
    })
    .catch (err => console.error('link NO VÁLIDO')); */

    let array = ref.map((ref)=>{
        return {
          href: ref.href,
          text: ref.textContent,
          file: ruta,
        };
      })

    let array = [];
      ref.forEach((ref)=>{
        array.push ({
          href: ref.href,
          text: ref.textContent,
          file: ruta,
        });
      })

      for (let i = 0; i < ref.length; i++) {
        ref[i]
        let datos = {
          href: ref[i].href,
          text: ref[i].textContent,
          file: ruta,
        };
      array.push(datos);
      }


      /* function validateLink(data) {
  for (let i = 0; i < data.length; i++) {
    fetch(data[i].href)
      .then(res => {
        data[i].status=res.status;
        data[i].mensaje = res.status===200 ? 'OK' : 'FAIL';
        console.log(data);
      })
      .catch (err => {
          console.log(data[i].href);
      });  
  }
} */

/* const validateLinks = (data, ruta) => data.map((obj) =>

  fetch(obj.href)
    .then((res) => {
      return {
        href: obj.href,
        text: obj.textContent,
        file: ruta,
        status: res.status,
        message: res.status===200 ? 'OK' : 'FAIL';
      }
    })
    .catch(()=> ({
      status: 500,
      statusText: "FAIL",
    }));


); */


/*   ruta.forEach((elemento) => {
  const leerMd = fs.readFileSync(path, 'utf8');
  const tokens = marked.lexer(leerMd); //The Lexer builds an array of tokens, which will be passed to the Parser.
  const html = marked.parser(tokens); //The Parser processes each token in the token array. takes tokens as input and calls the renderer functions.
  const dom = new JSDOM(html); 
  let ref=dom.window.document.querySelectorAll("a"); //busco en el dom todos q tengan referencia <a href="wwww....">
  let longitud = ref.length;
  let arrayLinks = [];
  if (longitud != 0) { 
    let validateLink =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    ref.forEach((ref)=>{
      if (validateLink.test(ref.href)) {
      arrayLinks.push ({
        href: ref.href,
        text: ref.textContent,
        file: path,
      });
      }
    })
  } else {
    console.log('Archivo .md no tiene links');
  } 
  return arrayLinks
  })*/