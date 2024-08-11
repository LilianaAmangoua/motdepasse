const minuscules = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const majuscules = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const chiffres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const symboles = ['!', '#', '$', '%', '&', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];


const boutonGénérer = document.getElementById('boutonGénérer');

boutonGénérer.addEventListener('click', function(){
   
    let longueur = parseInt(window.prompt('Quelle est la longueur du mot de passe souhaitée ? Insérez un chiffre.'));
    
    if (longueur === '' || isNaN(longueur)) {
        alert ("La longuer n'est pas valide");
        //console.log("La longuer n'est pas valide");
        return;
    }

    else {
        const typeCaractère = window.prompt('Quels types de caractères souhaitez-vous inclure dans le mot de passe (majuscules, minuscules, chiffres, symboles)?');

        if ((typeCaractère.includes('majuscules') || ('minuscules') || ('chiffres') || ('symboles')) == false) {
            alert ("Le type de caractère n'est pas valide. Veuillez vérifier l'orthographe.");
            //console.log("Le type de caractère n'est pas valide");
            return;
        }

        else {
            const groupeTypeCaractères = [];
            const motDePasse = [];

            if (typeCaractère.includes ('majuscules')) {

                groupeTypeCaractères.push(majuscules);

                const lettreMaj = majuscules[Math.floor(Math.random()*majuscules.length)]
                console.log(lettreMaj);

                motDePasse.push(lettreMaj);
            }

            if (typeCaractère.includes ('minuscules')) {

                groupeTypeCaractères.push(minuscules);

                const lettreMin = minuscules[Math.floor(Math.random()*minuscules.length)]
                console.log(lettreMin);

                motDePasse.push(lettreMin);
            }

            if (typeCaractère.includes ('chiffres')) {

                groupeTypeCaractères.push(chiffres);

                const caractèreChiffre = chiffres[Math.floor(Math.random()*chiffres.length)]
                console.log(caractèreChiffre);

                motDePasse.push(caractèreChiffre);
            }

            if (typeCaractère.includes ('symboles')) {

                groupeTypeCaractères.push(symboles);

                const caractèreSymbole = symboles[Math.floor(Math.random()*symboles.length)]
                console.log(caractèreSymbole);

                motDePasse.push(caractèreSymbole);
            }

            //console.log(groupeTypeCaractères);
            console.log(motDePasse);

            longueur -= groupeTypeCaractères.length;
            //console.log(longueur);



            for (let i=0; i < longueur; i+=1) {
                const randomGroupe = groupeTypeCaractères[Math.floor(Math.random()*groupeTypeCaractères.length)];
                //console.log(randomGroupe);

                const randomGroupeCaractère = randomGroupe[Math.floor(Math.random()*randomGroupe.length)];
                motDePasse.push(randomGroupeCaractère);
            }

            console.log(motDePasse);

            let afficherMDP = document.getElementById('afficheMDP');
            afficherMDP.textContent = motDePasse.join('');
        }

    }

});










