function verifSaisie(){
  // On récupère les éléments saisis dans le formulaire
  var lastName = document.getElementById('lastname').value;
  var firstName = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  // Déclaration de constantes définissant la Regex pour [le nom et le prénom] et la ville à part
  const regexFirstlast =  /^[a-zA-ZäãåçéèêëíìîïñóòôöõúùûüÿÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜŸ-]+$/;
  const regexCity =  /^[a-zA-Z-]+$/;
  // Condition gérant les erreurs de saisie
  if(!regexCity.test(city)||city==null){
    //PAS BON : VILLE
    alert("Erreur de saisie : la saisie de la ville contient des caractères non-valides !");
  }else if((!regexFirstlast.test(lastName)||lastName==null)||(!regexFirstlast.test(firstName)||firstName==null)){
    //PAS BON : NOM ET PRENOM
    alert("Erreur de saisie : la saisie du nom ou du prénom contient des caractères non-valides !");
  }else{
    //TOUT BON !
    alert("Nom : "+lastName+"\nPrénom : "+firstName+"\nVille : "+city);
  }
};
