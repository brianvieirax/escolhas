let suaidade;
let musculação;
let aeróbico;
let geral;

let esportes = {
    menor10:{
      musculação: "natação",
      aeróbico: "corrida",
      geral : "queimada",
    },
    entre10e14:{
      musculação: 'artes marciais',
      aeróbica: 'pular corda',
      geral: "vÔlei"
    },
    entre14e16:{
      musculação: "fisiculturismo",
      aeróbica: "ciclismo",
      geral: 'futebol'
    },
    entre16e18: {
      musculação: "levantamento de peso",
      aeróbica: "crosfit",
      geral: "sinuca"
    },
    maior18: {
      musculação: 'powerlifting',
      aeróbica:'caminhada',
      geral: "golf"
    }, 
    
  }
function setup() {
  createCanvas(850, 400).position(100,100);
 título = "New Amsterdam";
 corpo = "Kanit";
  gênero = "Baskervville SC";
  createSpan("Qual a sua idade? 🐣").position(580,530).addClass("esconde");
  suaidade = createInput("").position(590,585).addClass("esconde");
  musculação = createCheckbox("Você gosta de esporte de musculação").position(100,600).addClass("esconde");
  aeróbica = createCheckbox("Você gosta de esportes de aeróbica?").position(100,650).addClass("esconde");
  geral = createCheckbox("Você gosta de esportes em geral? ").position(100,700).addClass("esconde");
  botao = createButton("APERTA MEU BOTÃO😖").position(width/2,520);
  botao.mousePressed(bota);
  botao.addClass("botao");
}
function bota(){
  selectAll('.esconde').forEach((el) =>
   el.removeClass('esconde'))    
  botao.hide();
}

function draw() {
  background("white");
  let idade = parseInt(suaidade.value());
  let checkmusculação = musculação.checked();
  let checkaeróbica = aeróbica.checked();
  let checkgeral = geral.checked();
  let esporte = "Insira suas preferências";
  if (suaidade.value() !== ""){
  esporte = mostraesporte(idade, checkmusculação, checkaeróbica, checkgeral)
}
  fill("black");
  stroke("pink");
  textFont(corpo);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(esporte, width/2, height/2);
  
   fill("black");
  stroke("pink");
  textFont(título);
  textAlign(CENTER,CENTER);
  textSize(40);
  text(esporte, width/2, 30);
  
  
}

function mostraesporte(idade, checkmusculação, checkaeróbica, checkgeral){
 if (isNaN(idade)){
  return "Idade Inválida"
  }
  if (idade < 5){
    return "SAI DAQUI, VC NAO TEM NEM PELO NO SACO"
  } else
    if (idade > 120){
      return "TEM NEM COMO DOIDO"
    }
  if (idade >= 5 && idade < 10){
    if (checkmusculação){
      return esportes["menor10"]["musculação"]
    }
     if (checkaeróbica){
      return esportes["menor10"]["aeróbica"]
    }
     if (checkgeral){
      return esportes["menor10"]["geral"]
    }
  }
  else if (idade >= 10 && idade < 14){
    if (checkmusculação){
      return esportes["menor14"]["musculação"]
    }
     if (checkaeróbica){
      return esportes["menor14"]["aeróbica"]
    }
     if (checkgeral){
      return esportes["menor14"]["geral"]
    }
  }
else if (idade >= 14 && idade < 16){
    if (checkmusculação){
      return esportes["menor16"]["musculação"]
}  
 if (checkaeróbica){
      return esportes["menor16"]["aeróbica"]
    }
   if (checkgeral){
      return esportes["menor16"]["geral"]
    }
 }
 else  if (idade >= 16 && idade < 18){
    if (checkmusculação){
      return esportes["menor18"]["musculação"]
    }
      if (checkaeróbica){
      return esportes["menor18"]["aeróbica"]
    }
      if (checkgeral){
      return esportes["menor18"]["geral"]
    }
}
  else if (idade >= 18){
    if (checkmusculação){
      return esportes["maior18"]["musculação"]
    }
   if (checkaeróbica){
      return esportes["maior18"]["aeróbica"]
    }
     if (checkgeral){
      return esportes["maior18"]["geral"]
    }
} return "coloca porra";
}