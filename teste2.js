function votacao(idade) {
  switch (true) {
    case idade < 16:
      console.log(`voce não pode votar`);
      break;
    case idade >= 16 && idade < 18:
      console.log(`voce pode votar, mas não é obrigatorio`);
      break;
    default:
      console.log(`voce deve votar`);
      break;
  }
}
votacao(20);
