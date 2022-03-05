contagemNatal();

function contagemNatal() {
  const hoje = new Date();
  const natal = new Date(hoje.getFullYear(), 11, 25);
  const um_dia = 1000 * 60 * 60 * 24; //milisegundos
  const divRetorno = document.querySelector('div.contagem');

  if (hoje.getMonth() == 11 && hoje.getDate() > 25)
    natal.setFullYear(natal.getFullYear() + 1);

  const dias = Math.ceil(
    (natal.getTime() - hoje.getTime()) / (um_dia)  
  );
  
  divRetorno.innerHTML = `Faltam ${dias} dia(s) para o Natal!`;
}
