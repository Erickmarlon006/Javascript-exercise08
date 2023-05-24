var listaDeAlunos = [];
var contadeiro = 0;
 
while(true){
    //Criando uma lista dentro de uma lista
    listaDeAlunos[contadeiro] = new Array();
    
    //Ler os Dados dos alunos
    listaDeAlunos[contadeiro] ['nome'] = prompt("Insira o nome do " + (contadeiro + 1) + "º aluno: ");
    var nota = parseFloat(prompt("Insira a nota do primeiro trimestre:"));
    while(nota < 0 || nota > 10){
        nota = prompt("Nota inválida, insira um valor entre 0 e 10!");
    }
    listaDeAlunos[contadeiro]['n1'] = nota;
    var nota = parseFloat(prompt("Insira a nota do segundo trimestre:"));
    while(nota < 0 || nota > 10){
        nota = prompt("Nota inválida, insira um valor entre 0 e 10!");
    }
    listaDeAlunos[contadeiro]['n2'] = nota;

    var nota = parseFloat(prompt("Insira a nota do terceiro trimestre:"));
    while(nota < 0 || nota > 10){
        nota = prompt("Nota inválida, insira um valor entre 0 e 10!");
    }
    listaDeAlunos[contadeiro]['n3'] = nota;
    
    listaDeAlunos[contadeiro]['freq'] = prompt("Insira a frequência: ");

    console.log("Dados informados: ")
    console.log(listaDeAlunos[contadeiro]);
    

    if(!confirm("Deseja informar mais alunos?")){
        break;
    }
    contadeiro++;
}