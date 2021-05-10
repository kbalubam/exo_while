// # Exercice 1 boucle while
// - A l'aide d'un prompt, choisissez un chiffre et enregistrez la valeur dans une variable
// let nb = parseInt(prompt("choisis un numéro"));
// - Déclarez une variable compteur qui commence par 0
// let i = 0;
// - A l'aide d'une boucle while, incrémentez de 1 la variable compteur à chaque boucle et affichez touts les chiffres de 0 jusqu'au nombre choisis au debut dans le prompt
// while (i < nb) {
//     i++;
//     console.log(i);
// }


// - # Exo 2 Boucles WHILE
//     - ## Créez une variable classe avec un array
// let classe = [];

//     - ## A l'aide d'un prompt, choisissez le nombre max d'étudiants dans la classe
// let nb1 = parseInt(prompt("choisis le nombre max d'élève"));

//     - ## A l'aide d'une boucle while, inserez des étudiants dans la classe tant que la classe n'est pas remplie
// let i = 0
// while (i < nb1){
    // i++;
    // classe.push(prompt("inserez les noms"));
//}
// if (i === nb1){
    // alert("classe remplie");
// }
//     - ## Après avoir rempli la classe, affichez tous les etudiants

// alert(classe);


// - ##  Ex 03
//     ## Créer un tableau de 9 prénoms 
// let nom = ["nom9","nom8","nom7","nom6","nom5","nom4","nom3","nom2","nom1" ];
//     ## Faire une boucle sur les prénoms précédé de Bonjour tant que 9 n'est pas atteint et les affiché dans la console
// let i = 0
// while( i < 9){
    // i++;
    // console.log(`Bonjour ${nom}`);
// }

//     ## Astuce : let i = 0;
//     ## Astuce 2 : (i < 9)


// // - ##  Exo 04
// //     ## Créer un tableau de 6 fruits
//         let fruit = ["pommes", "oranges", "citron", "pastèque", "kiwi", "banane"];
//         let i = 0;
// //     ## Avec l'aide d'une boucle while vider le tableau.
//         while ( i < 9){
//             i++;
//             fruit.splice(0, fruit.length);
//         };
// //     ## Utilisez fruits.length
// console.log(fruit);


// ##  Exo 05

// // ## Créer un tableau de 4 légumes du nom de 'panierLegumes'
//         let paniersLegumes = ["courgette", "tomate", "epinard", "radis"];
// // ## Stocker la longueur du tableau dans une variable du nom de 'longeur'
//         let longeur = paniersLegumes.length

// // # Vider le tableau panierLegumes pour mettre son contenu dans un second tableau du nom de 'caisseLegumes'
// let caisseLegumes = [];
// let i = 0;
//  while ( i < longeur){
    
//      i++;
//      caisseLegumes.push(paniersLegumes[i]);
// }
// paniersLegumes.splice(0, longeur);
//  console.log(caisseLegumes);
//  console.log(paniersLegumes);

//  - ##  Exo6
//     ##  Préparer une énigme, et faites une boucle WHILE qui va vérifier si l'utilisateur répond correctement à l'énigme via un prompt, tant qu'il se trompe, vous lui reposer la question. S'il a juste, faites une alerte qui le félicite

let quest = prompt("j'ai 2 pieds, 6 jambes, 8 bras, 2 têtes et un oeil, qui suis-je ?");
 while ( quest !== "menteuse"){
     
  prompt("j'ai 2 pieds, 6 jambes, 8 bras, 2 têtes et un oeil, qui suis-je ?");
 }
 if (quest ==="menteuse"){
     alert("felicitation");
 };