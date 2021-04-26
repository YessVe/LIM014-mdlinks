
const pathNode = process.argv[2];
const option = process.argv[3];

function cli (path,option) {
  
      if (option === "--validate") {
        
  // Promise.all(validateLinks(arrayParaValidar))
      //   .then((res) => res.forEach((res)=>{
      //     console.log(res.file +"  "+ res.href +"  "+ res.status +"  " + res.message);
      //   }))


      /*   console.log("CLI validate"); */
    } else if (option === "--stats --validate") {
        console.log("CLI stats");
    } else if (option === "--stats") {
        console.log("CLI stats y validate");
    } 
  }

  cli(pathNode,option);