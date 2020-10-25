function controlPR(){
    var antwoord1 = document.getElementById("PR1").value;
    var antwoord2 = document.getElementById("PR2").value; 
    var antwoord3 = document.getElementById("PR3").value; 
    var antwoord4 = document.getElementById("PR4").value; 
    var antwoord5 = document.getElementById("PR5").value; 
    var antwoord6 = document.getElementById("PR6").value;
    var antwoord7 = document.getElementById("PR7").value; 
    var antwoord8 = document.getElementById("PR8").value; 
    var antwoord9 = document.getElementById("PR9").value; 
    var antwoord10 = document.getElementById("PR10").value;
    var scorePR = document.getElementById("scorePR");
    var pogingenPR = document.getElementById("pogingenPR");
    var Fout = Boolean(false)
    var score = 0
    var pogingenNum = 3

    if(antwoord1 === "viens de manger")
    {
        document.getElementById("correctPR1").innerHTML = "Correct";
        document.getElementById("PR1").style.borderColor = "green";
        document.getElementById("correctPR1").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR1").innerHTML = "Probeer opnieuw";
        document.getElementById("PR1").style.borderColor = "#9E1A1A";
        document.getElementById("correctPR1").style.color = "#9E1A1A";
        Fout = true
    }

    if(antwoord2 === "venons de prendre")
    {
        document.getElementById("correctPR2").innerHTML = "Correct";                                
        document.getElementById("PR2").style.borderColor = "green";
        document.getElementById("correctPR2").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR2").innerHTML = "Probeer opnieuw";  
        document.getElementById("PR2").style.borderColor = "#9E1A1A";
        document.getElementById("correctPR2").style.color = "#9E1A1A";
        Fout = true
    }

    if(antwoord3 === "viennent de regarder")
    {
        document.getElementById("correctPR3").innerHTML = "Correct";
        document.getElementById("PR3").style.borderColor = "green";
        document.getElementById("correctPR3").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR3").innerHTML = "Probeer opnieuw"; 
        document.getElementById("PR3").style.borderColor = "#9E1A1A";
        document.getElementById("correctPR3").style.color = "#9E1A1A";
        Fout = true
    }
    
    if(antwoord4 === "viens d'entendre")
    {
        document.getElementById("correctPR4").innerHTML = "Correct";
        document.getElementById("PR4").style.borderColor = "green";
        document.getElementById("correctPR4").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR4").innerHTML = "Probeer opnieuw";
        document.getElementById("PR4").style.borderColor = "#9E1A1A";
        document.getElementById("correctPR4").style.color = "#9E1A1A";
        Fout = true
    }

    if(antwoord5 === "vient de travailler")
    {
        document.getElementById("correctPR5").innerHTML = "Correct";
        document.getElementById("PR5").style.borderColor = "green";
        document.getElementById("correctPR5").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR5").innerHTML = "Probeer opnieuw";
        document.getElementById("PR5").style.borderColor = "#9E1A1A";
        document.getElementById("correctPR5").style.color = "#9E1A1A";
        Fout = true
    }
    
    if(antwoord6 === "viens de téléphoner")
    {
        document.getElementById("correctPR6").innerHTML = "Correct";
        document.getElementById("PR6").style.borderColor = "green";
        document.getElementById("correctPR6").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR6").innerHTML = "Probeer opnieuw";
        document.getElementById("PR6").style.borderColor = "#9E1A1A";
        document.getElementById("correctPR6").style.color = "#9E1A1A";
        Fout = true
    }

    if(antwoord7 === "venons d'aller")
    {
        document.getElementById("correctPR7").innerHTML = "Correct";                                
        document.getElementById("PR7").style.borderColor = "green";
        document.getElementById("correctPR7").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR7").innerHTML = "Probeer opnieuw";
        document.getElementById("PR7").style.borderColor = "#9E1A1A";
        document.getElementById("correctPR7").style.color = "#9E1A1A";
        Fout = true
    }

    if(antwoord8 === "viennent de voir")
    {
        document.getElementById("correctPR8").innerHTML = "Correct";
        document.getElementById("PR8").style.borderColor = "green";
        document.getElementById("correctPR8").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR8").innerHTML = "Probeer opnieuw"; 
        document.getElementById("PR8").style.borderColor = "#9E1A1A";  
        document.getElementById("correctPR8").style.color = "#9E1A1A";    
        Fout = true
    }
    
    if(antwoord9 === "venons d'écouter")
    {
        document.getElementById("correctPR9").innerHTML = "Correct";
        document.getElementById("PR9").style.borderColor = "green";
        document.getElementById("correctPR9").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR9").innerHTML = "Probeer opnieuw";
        document.getElementById("PR9").style.borderColor = "#9E1A1A";   
        document.getElementById("correctPR9").style.color = "#9E1A1A";     
        Fout = true
    }

    if(antwoord10 === "venez d'appeler")
    {
        document.getElementById("correctPR10").innerHTML = "Correct";
        document.getElementById("PR10").style.borderColor = "green";
        document.getElementById("correctPR10").style.color = "green";
        score = score + 1;
    }
    else{
        document.getElementById("correctPR10").innerHTML = "Probeer opnieuw";
        document.getElementById("PR10").style.borderColor = "#9E1A1A";
        document.getElementById("correctPR10").style.color = "#9E1A1A";
        Fout = true
    }
    scorePR.innerText = "score: " + score + " / 10"
    scorePR.style.display = "block";
    if(Fout == true){
        pogingenNum = pogingenNum - 1
        pogingenPR.innerText = `Pogingen: ${pogingenNum.toString()}`;
    }
}

function controlPCA(){
    var antwoord1 = document.getElementById("PCA1").value;
    var antwoord2 = document.getElementById("PCA2").value; 
    var antwoord3 = document.getElementById("PCA3").value; 
    var antwoord4 = document.getElementById("PCA4").value; 
    var antwoord5 = document.getElementById("PCA5").value; 
    var antwoord6 = document.getElementById("PCA6").value;
    var antwoord7 = document.getElementById("PCA7").value; 
    var antwoord8 = document.getElementById("PCA8").value; 
    var antwoord9 = document.getElementById("PCA9").value; 
    var antwoord10 = document.getElementById("PCA10").value;

    if(antwoord1 === "ai déjà mangé")
    {
        document.getElementById("correctPCA1").innerHTML = "Correct";
        document.getElementById("PCA1").style.borderColor = "green";
        document.getElementById("correctPCA1").style.color = "green";
    }
    else{
        document.getElementById("correctPCA1").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA1").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA1").style.color = "#9E1A1A";
    }

    if(antwoord2 === "ont bu")
    {
        document.getElementById("correctPCA2").innerHTML = "Correct";                                
        document.getElementById("PCA2").style.borderColor = "green";
        document.getElementById("correctPCA2").style.color = "green";
    }
    else{
        document.getElementById("correctPCA2").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA2").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA2").style.color = "#9E1A1A";
    }

    if(antwoord3 === "avez été")
    {
        document.getElementById("correctPCA3").innerHTML = "Correct";
        document.getElementById("PCA3").style.borderColor = "green";
        document.getElementById("correctPCA3").style.color = "green";
    }
    else{
        document.getElementById("correctPCA3").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA3").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA3").style.color = "#9E1A1A";
    }
    
    if(antwoord4 === "avons reçu")
    {
        document.getElementById("correctPCA4").innerHTML = "Correct";
        document.getElementById("PCA4").style.borderColor = "green";
        document.getElementById("correctPCA4").style.color = "green";
    }
    else{
        document.getElementById("correctPCA4").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA4").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA4").style.color = "#9E1A1A";
    }

    if(antwoord5 === "ai connu")
    {
        document.getElementById("correctPCA5").innerHTML = "Correct";
        document.getElementById("PCA5").style.borderColor = "green";
        document.getElementById("correctPCA5").style.color = "green";
    }
    else{
        document.getElementById("correctPCA5").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA5").style.borderColor = "#9E1A1A"
        document.getElementById("correctPCA5").style.color = "#9E1A1A";
    }
    
    if(antwoord6 === "as pris")
    {
        document.getElementById("correctPCA6").innerHTML = "Correct";
        document.getElementById("PCA6").style.borderColor = "green";
        document.getElementById("correctPCA6").style.color = "green";
    }
    else{
        document.getElementById("correctPCA6").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA6").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA6").style.color = "#9E1A1A";
    }

    if(antwoord7 === "a déjà vu")
    {
        document.getElementById("correctPCA7").innerHTML = "Correct";                                
        document.getElementById("PCA7").style.borderColor = "green";
        document.getElementById("correctPCA7").style.color = "green";
    }
    else{
        document.getElementById("correctPCA7").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA7").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA7").style.color = "#9E1A1A";
    }

    if(antwoord8 === "as mis")
    {
        document.getElementById("correctPCA8").innerHTML = "Correct";
        document.getElementById("PCA8").style.borderColor = "green";
        document.getElementById("correctPCA8").style.color = "green";
    }
    else{
        document.getElementById("correctPCA8").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA8").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA8").style.color = "#9E1A1A";
    }
    
    if(antwoord9 === "avons vu")
    {
        document.getElementById("correctPCA9").innerHTML = "Correct";
        document.getElementById("PCA9").style.borderColor = "green";
        document.getElementById("correctPCA9").style.color = "green";
    }
    else{
        document.getElementById("correctPCA9").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA9").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA9").style.color = "#9E1A1A";
    }

    if(antwoord10 === "a téléphoné")
    {
        document.getElementById("correctPCA10").innerHTML = "Correct";
        document.getElementById("PCA10").style.borderColor = "green";
        document.getElementById("correctPCA10").style.color = "green";
    }
    else{
        document.getElementById("correctPCA10").innerHTML = "Probeer opnieuw";
        document.getElementById("PCA10").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCA10").style.color = "#9E1A1A";
    }
}

function controlPCE(){
    var antwoord1 = document.getElementById("PCE1").value;
    var antwoord2 = document.getElementById("PCE2").value; 
    var antwoord3 = document.getElementById("PCE3").value; 
    var antwoord4 = document.getElementById("PCE4").value; 
    var antwoord5 = document.getElementById("PCE5").value; 
    var antwoord6 = document.getElementById("PCE6").value;
    var antwoord7 = document.getElementById("PCE7").value; 
    var antwoord8 = document.getElementById("PCE8").value; 
    var antwoord9 = document.getElementById("PCE9").value; 
    var antwoord10 = document.getElementById("PCE10").value;
    var IsIngevuld = Boolean(true);

    if(antwoord1 === "ne sont pas allées")
    {
        document.getElementById("correctPCE1").innerHTML = "Correct";
        document.getElementById("PCE1").style.borderColor = "green";
        document.getElementById("correctPCE1").style.color = "green";
    }
    else{
        document.getElementById("correctPCE1").innerHTML = "Probeer opnieuw";
        document.getElementById("PCE1").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE1").style.color = "#9E1A1A";
    }

    if(antwoord2 === "est tombé")
    {
        document.getElementById("correctPCE2").innerHTML = "Correct";                                
        document.getElementById("PCE2").style.borderColor = "green";
        document.getElementById("correctPCE2").style.color = "green";
    }
    else{
        document.getElementById("correctPCE2").innerHTML = "Probeer opnieuw";  
        document.getElementById("PCE2").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE2").style.color = "#9E1A1A";
    }

    if(antwoord3 === "sont rentrés")
    {
        document.getElementById("correctPCE3").innerHTML = "Correct";
        document.getElementById("PCE3").style.borderColor = "green";
    }
    else{
        document.getElementById("correctPCE3").innerHTML = "Probeer opnieuw"; 
        document.getElementById("PCE3").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE3").style.color = "#9E1A1A";
    }
    
    if(antwoord4 === "est descendu")
    {
        document.getElementById("correctPCE4").innerHTML = "Correct";
        document.getElementById("PCE4").style.borderColor = "green";
        document.getElementById("correctPCE4").style.color = "green";
    }
    else{
        document.getElementById("correctPCE4").innerHTML = "Probeer opnieuw";
        document.getElementById("PCE4").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE4").style.color = "#9E1A1A";
    }

    if(antwoord5 === "suis allé")
    {
        document.getElementById("correctPCE5").innerHTML = "Correct";
        document.getElementById("PCE5").style.borderColor = "green";
        document.getElementById("correctPCE5").style.color = "green";
    }
    else if(antwoord5 === "suis allée")
    {
        document.getElementById("correctPCE5").innerHTML = "Correct";
        document.getElementById("PCE5").style.borderColor = "green";
        document.getElementById("correctPCE5").style.color = "green";
    }
    else{
        document.getElementById("correctPCE5").innerHTML = "Probeer opnieuw";
        document.getElementById("PCE5").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE5").style.color = "#9E1A1A";
    }
    
    if(antwoord6 === "sont parties")
    {
        document.getElementById("correctPCE6").innerHTML = "Correct";
        document.getElementById("PCE6").style.borderColor = "green";
        document.getElementById("correctPCE6").style.color = "green";
    }
    else{
        document.getElementById("correctPCE6").innerHTML = "Probeer opnieuw";
        document.getElementById("PCE6").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE6").style.color = "#9E1A1A";
    }

    if(antwoord7 === "est rentré" )
    {
        document.getElementById("correctPCE7").innerHTML = "Correct";                                
        document.getElementById("PCE7").style.borderColor = "green";
        document.getElementById("correctPCE7").style.color = "green";
    }
    else{
        document.getElementById("correctPCE7").innerHTML = "Probeer opnieuw";
        document.getElementById("PCE7").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE7").style.color = "#9E1A1A";
    }

    if(antwoord8 === "sommes venus")
    {
        document.getElementById("correctPCE8").innerHTML = "Correct";
        document.getElementById("PCE8").style.borderColor = "green";
        document.getElementById("correctPCE8").style.color = "green";
    }
    else if(antwoord8 === "sommes venues")
    {
        document.getElementById("correctPCE8").innerHTML = "Correct";
        document.getElementById("PCE8").style.borderColor = "green";
        document.getElementById("correctPCE8").style.color = "green";
    }
    else{
        document.getElementById("correctPCE8").innerHTML = "Probeer opnieuw"; 
        document.getElementById("PCE8").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE8").style.color = "#9E1A1A";
    }
    
    if(antwoord9 === "est restée")
    {
        document.getElementById("correctPCE9").innerHTML = "Correct";
        document.getElementById("PCE9").style.borderColor = "green";
        document.getElementById("correctPCE9").style.color = "green";
    }
    else{
        document.getElementById("correctPCE9").innerHTML = "Probeer opnieuw";
        document.getElementById("PCE9").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE9").style.color = "#9E1A1A";
    }

    if(antwoord10 === "sont arrivées")
    {
        document.getElementById("correctPCE10").innerHTML = "Correct";
        document.getElementById("PCE10").style.borderColor = "green";
        document.getElementById("correctPCE10").style.color = "green";
    }
    else{
        document.getElementById("correctPCE10").innerHTML = "Probeer opnieuw";
        document.getElementById("PCE10").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCE10").style.color = "#9E1A1A";
    }
}

function controlPCF(){
    var antwoord1 = document.getElementById("PCF1").value;
    var antwoord2 = document.getElementById("PCF2").value; 
    var antwoord3 = document.getElementById("PCF3").value; 
    var antwoord4 = document.getElementById("PCF4").value; 
    var antwoord5 = document.getElementById("PCF5").value; 
    var antwoord6 = document.getElementById("PCF6").value;
    var antwoord7 = document.getElementById("PCF7").value; 
    var antwoord8 = document.getElementById("PCF8").value; 
    var antwoord9 = document.getElementById("PCF9").value; 
    var antwoord10 = document.getElementById("PCF10").value;

    if(antwoord1 === "êtes allés")
    {
        document.getElementById("correctPCF1").innerHTML = "Correct";
        document.getElementById("PCF1").style.borderColor = "green";
        document.getElementById("correctPCF1").style.color = "green";
    }
    else{
        document.getElementById("correctPCF1").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF1").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCF1").style.color = "#9E1A1A";
    }

    if(antwoord2 === "a fini")
    {
        document.getElementById("correctPCF2").innerHTML = "Correct";                                
        document.getElementById("PCF2").style.borderColor = "green";
        document.getElementById("correctPCF2").style.color = "green";
    }
    else{
        document.getElementById("correctPCF2").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF2").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCF2").style.color = "#9E1A1A";
    }

    if(antwoord3 === "s'est levé")
    {
        document.getElementById("correctPCF3").innerHTML = "Correct";
        document.getElementById("PCF3").style.borderColor = "green";
        document.getElementById("correctPCF3").style.color = "green";
    }
    else{
        document.getElementById("correctPCF3").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF3").style.borderColor = "#9E1A1A"; 
        document.getElementById("correctPCF3").style.color = "#9E1A1A";
    }
    
    if(antwoord4 === "a regardé")
    {
        document.getElementById("correctPCF4").innerHTML = "Correct";
        document.getElementById("PCF4").style.borderColor = "green";
        document.getElementById("correctPCF4").style.color = "green";
    }
    else{
        document.getElementById("correctPCF4").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF4").style.borderColor = "#9E1A1A"; 
        document.getElementById("correctPCF4").style.color = "#9E1A1A";
    }

    if(antwoord5 === "a mangé")
    {
        document.getElementById("correctPCF5").innerHTML = "Correct";
        document.getElementById("PCF5").style.borderColor = "green";
        document.getElementById("correctPCF5").style.color = "green";
    }
    else{
        document.getElementById("correctPCF5").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF5").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCF5").style.color = "#9E1A1A";
    }
    
    if(antwoord6 === "ont écrit")
    {
        document.getElementById("correctPCF6").innerHTML = "Correct";
        document.getElementById("PCF6").style.borderColor = "green";
        document.getElementById("correctPCF6").style.color = "green";
    }
    else{
        document.getElementById("correctPCF6").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF6").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCF6").style.color = "#9E1A1A";
    }

    if(antwoord7 === "sont parties")
    {
        document.getElementById("correctPCF7").innerHTML = "Correct";                                
        document.getElementById("PCF7").style.borderColor = "green";
        document.getElementById("correctPCF7").style.color = "green";
    }
    else{
        document.getElementById("correctPCF7").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF7").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCF7").style.color = "#9E1A1A";
    }

    if(antwoord8 === "ai fermé")
    {
        document.getElementById("correctPCF8").innerHTML = "Correct";
        document.getElementById("PCF8").style.borderColor = "green";
        document.getElementById("correctPCF8").style.color = "green";
    }
    else{
        document.getElementById("correctPCF8").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF8").style.borderColor = "#9E1A1A";   
        document.getElementById("correctPCF8").style.color = "#9E1A1A";
    }
    
    if(antwoord9 === "avez reçu")
    {
        document.getElementById("correctPCF9").innerHTML = "Correct";
        document.getElementById("PCF9").style.borderColor = "green";
        document.getElementById("correctPCF9").style.color = "green";
    }
    else{
        document.getElementById("correctPCF9").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF9").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCF9").style.color = "#9E1A1A";
    }

    if(antwoord10 === "a pris")
    {
        document.getElementById("correctPCF10").innerHTML = "Correct";
        document.getElementById("PCF10").style.borderColor = "green";
        document.getElementById("correctPCF10").style.color = "green";
    }
    else{
        document.getElementById("correctPCF10").innerHTML = "Probeer opnieuw";
        document.getElementById("PCF10").style.borderColor = "#9E1A1A";
        document.getElementById("correctPCF10").style.color = "#9E1A1A";
    }
}

function controlCPR()
{
    var CPR1 = document.getElementById("CPR1");
    var CPR2 = document.getElementById("CPR2");
    var CPR3 = document.getElementById("CPR3");
    var CPR4 = document.getElementById("CPR4");
    var CPR5 = document.getElementById("CPR5");

    if(CPR1.checked == false)
    {
        document.getElementById("correctCPR1").innerHTML = "Correct";
        document.getElementById("correctCPR1").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPR1").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPR1").style.color = "#9E1A1A";
    }

    if(CPR2.checked == true)
    {
        document.getElementById("correctCPR2").innerHTML = "Correct";
        document.getElementById("correctCPR2").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPR2").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPR2").style.color = "#9E1A1A";
    }

    if(CPR3.checked == false)
    {
        document.getElementById("correctCPR3").innerHTML = "Correct";
        document.getElementById("correctCPR3").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPR3").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPR3").style.color = "#9E1A1A";
    }

    if(CPR4.checked == true)
    {
        document.getElementById("correctCPR4").innerHTML = "Correct";
        document.getElementById("correctCPR4").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPR4").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPR4").style.color = "#9E1A1A";
    }

    if(CPR5.checked == true)
    {
        document.getElementById("correctCPR5").innerHTML = "Correct";
        document.getElementById("correctCPR5").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPR5").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPR5").style.color = "#9E1A1A";
    }
}

function controlIPR()
{
    var IPR1 = document.getElementById("IPR1").value;
    var IPR2 = document.getElementById("IPR2").value;
    var IPR3 = document.getElementById("IPR3").value;
    var IPR4 = document.getElementById("IPR4").value;
    var IPR5 = document.getElementById("IPR5").value;
    var IPR6 = document.getElementById("IPR6").value;
    var scoreIPR = document.getElementById("scorePR");

    if(IPR1 == "viens de partir")
    {
        document.getElementById("IPR1").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPR1").style.borderColor = "#9E1A1A"
    }

    if(IPR2 == "viens d'avoir")
    {
        document.getElementById("IPR2").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPR2").style.borderColor = "#9E1A1A"
    }

    if(IPR3 == "vient d'arriver")
    {
        document.getElementById("IPR3").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPR3").style.borderColor = "#9E1A1A"
    }

    if(IPR4 == "venons de décoller")
    {
        document.getElementById("IPR4").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPR4").style.borderColor = "#9E1A1A"
    }

    if(IPR5 == "venez de tenir")
    {
        document.getElementById("IPR5").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPR5").style.borderColor = "#9E1A1A"
    }

    if(IPR6 == "viennent de parler")
    {
        document.getElementById("IPR6").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPR6").style.borderColor = "#9E1A1A"
    }
}

function controlIPCA()
{
    var IPCA1 = document.getElementById("IPCA1").value;
    var IPCA2 = document.getElementById("IPCA2").value;
    var IPCA3 = document.getElementById("IPCA3").value;
    var IPCA4 = document.getElementById("IPCA4").value;
    var IPCA5 = document.getElementById("IPCA5").value;
    var IPCA6 = document.getElementById("IPCA6").value;

    if(IPCA1 == "ai bu")
    {
        document.getElementById("IPCA1").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCA1").style.borderColor = "#9E1A1A"
    }

    if(IPCA2 == "as eu")
    {
        document.getElementById("IPCA2").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCA2").style.borderColor = "#9E1A1A"
    }

    if(IPCA3 == "a connu")
    {
        document.getElementById("IPCA3").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCA3").style.borderColor = "#9E1A1A"
    }

    if(IPCA4 == "avons roulé")
    {
        document.getElementById("IPCA4").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCA4").style.borderColor = "#9E1A1A"
    }

    if(IPCA5 == "avez tenu")
    {
        document.getElementById("IPCA5").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCA5").style.borderColor = "#9E1A1A"
    }

    if(IPCA6 == "ont parlé")
    {
        document.getElementById("IPCA6").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCA6").style.borderColor = "#9E1A1A"
    }
}

function controlIPCE()
{
    var IPCE1 = document.getElementById("IPCE1").value;
    var IPCE2 = document.getElementById("IPCE2").value;
    var IPCE3 = document.getElementById("IPCE3").value;
    var IPCE4 = document.getElementById("IPCE4").value;
    var IPCE5 = document.getElementById("IPCE5").value;
    var IPCE6 = document.getElementById("IPCE6").value;

    if(IPCE1 == "suis parti")
    {
        document.getElementById("IPCE1").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCE1").style.borderColor = "#9E1A1A"
    }

    if(IPCE2 == "es tombé")
    {
        document.getElementById("IPCE2").style.borderColor = "green";
    }
    else if(IPCE2 == "es tombée")
    {
        document.getElementById("IPCE2").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCE2").style.borderColor = "#9E1A1A"
    }

    if(IPCE3 == "est sorti")
    {
        document.getElementById("IPCE3").style.borderColor = "green";
    }
    else if(IPCE3 == "est sortie")
    {
        document.getElementById("IPCE3").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCE3").style.borderColor = "#9E1A1A"
    }

    if(IPCE4 == "sommes passés")
    {
        document.getElementById("IPCE4").style.borderColor = "green";
    }
    else if(IPCE4 == "sommes passées")
    {
        document.getElementById("IPCE4").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCE4").style.borderColor = "#9E1A1A"
    }

    if(IPCE5 == "êtes venus")
    {
        document.getElementById("IPCE5").style.borderColor = "green";
    }
    else if(IPCE5 == "êtes venues")
    {
        document.getElementById("IPCE5").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCE5").style.borderColor = "#9E1A1A"
    }

    if(IPCE6 == "sont tournés")
    {
        document.getElementById("IPCE6").style.borderColor = "green";
    }
    else if(IPCE6 == "sont tournées")
    {
        document.getElementById("IPCE6").style.borderColor = "green";
    }
    else
    {
        document.getElementById("IPCE6").style.borderColor = "#9E1A1A";
    }
}

function controlSPCA()
{
    var SPCA1 = document.getElementById("UiDropdown1").value;
    var SPCA2 = document.getElementById("UiDropdown2").value;
    var SPCA3 = document.getElementById("UiDropdown3").value;
    var SPCA4 = document.getElementById("UiDropdown4").value;
    var SPCA5 = document.getElementById("UiDropdown5").value;

    if(SPCA1 == "2")
    {
        document.getElementById("correctSPCA1").innerHTML = "correct";
        document.getElementById("correctSPCA1").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCA1").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCA1").style.color = "#9E1A1A";
    }

    if(SPCA2 == "1")
    {
        document.getElementById("correctSPCA2").innerHTML = "correct";
        document.getElementById("correctSPCA2").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCA2").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCA2").style.color = "#9E1A1A";
    }

    if(SPCA3 == "2")
    {
        document.getElementById("correctSPCA3").innerHTML = "correct";
        document.getElementById("correctSPCA3").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCA3").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCA3").style.color = "#9E1A1A";
    }

    if(SPCA4 == "1")
    {
        document.getElementById("correctSPCA4").innerHTML = "correct";
        document.getElementById("correctSPCA4").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCA4").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCA4").style.color = "#9E1A1A";
    }

    if(SPCA5 == "2")
    {
        document.getElementById("correctSPCA5").innerHTML = "correct";
        document.getElementById("correctSPCA5").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCA5").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCA5").style.color = "#9E1A1A";
    }
}

function controlSPCF()
{
    var SPCF1 = document.getElementById("UiDropdown1").value;
    var SPCF2 = document.getElementById("UiDropdown2").value;
    var SPCF3 = document.getElementById("UiDropdown3").value;
    var SPCF4 = document.getElementById("UiDropdown4").value;
    var SPCF5 = document.getElementById("UiDropdown5").value;

    if(SPCF1 == "1")
    {
        document.getElementById("correctSPCF1").innerHTML = "Correct";
        document.getElementById("correctSPCF1").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCF1").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCF1").style.color = "#9E1A1A";
    }
    if(SPCF2 == "1")
    {
        document.getElementById("correctSPCF2").innerHTML = "Correct";
        document.getElementById("correctSPCF2").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCF2").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCF2").style.color = "#9E1A1A";
    }
    if(SPCF3 == "2")
    {
        document.getElementById("correctSPCF3").innerHTML = "Correct";
        document.getElementById("correctSPCF3").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCF3").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCF3").style.color = "#9E1A1A";
    }
    if(SPCF4 == "2")
    {
        document.getElementById("correctSPCF4").innerHTML = "Correct";
        document.getElementById("correctSPCF4").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCF4").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCF4").style.color = "#9E1A1A";
    }
    if(SPCF5 == "1")
    {
        document.getElementById("correctSPCF5").innerHTML = "Correct";
        document.getElementById("correctSPCF5").style.color = "green";
    }
    else
    {
        document.getElementById("correctSPCF5").innerHTML = "Probeer opnieuw";
        document.getElementById("correctSPCF5").style.color = "#9E1A1A";
    }
}

function controlTPCE()
{
    var TPCE1 = document.getElementById("TPCE1").value;
    var TPCE2 = document.getElementById("TPCE2").value;
    var TPCE3 = document.getElementById("TPCE3").value;
    var TPCE4 = document.getElementById("TPCE4").value;
    var TPCE5 = document.getElementById("TPCE5").value;

    if(TPCE1 == "est parti")
    {
        document.getElementById("correctTPCE1").innerHTML = "Correct";
        document.getElementById("correctTPCE1").style.color = "green";
        document.getElementById("TPCE1").style.borderColor = "green";
    }
    else
    {
        document.getElementById("correctTPCE1").innerHTML = "Probeer opnieuw";
        document.getElementById("correctTPCE1").style.color = "#9E1A1A";
        document.getElementById("TPCE1").style.borderColor = "#9E1A1A";
    }

    if(TPCE2 == "sont venues")
    {
        document.getElementById("correctTPCE2").innerHTML = "Correct";
        document.getElementById("correctTPCE2").style.color = "green";
        document.getElementById("TPCE2").style.borderColor = "green";
    }
    else
    {
        document.getElementById("correctTPCE2").innerHTML = "Probeer opnieuw";
        document.getElementById("correctTPCE2").style.color = "#9E1A1A";
        document.getElementById("TPCE2").style.borderColor = "#9E1A1A";
    }

    if(TPCE3 == "sommes arrivés")
    {
        document.getElementById("correctTPCE3").innerHTML = "Correct";
        document.getElementById("correctTPCE3").style.color = "green";
        document.getElementById("TPCE3").style.borderColor = "green";
    }
    else
    {
        document.getElementById("correctTPCE3").innerHTML = "Probeer opnieuw";
        document.getElementById("correctTPCE3").style.color = "#9E1A1A";
        document.getElementById("TPCE3").style.borderColor = "#9E1A1A";
    }

    if(TPCE4 == "est tombée")
    {
        document.getElementById("correctTPCE4").innerHTML = "Correct";
        document.getElementById("correctTPCE4").style.color = "green";
        document.getElementById("TPCE4").style.borderColor = "green";
    }
    else
    {
        document.getElementById("correctTPCE4").innerHTML = "Probeer opnieuw";
        document.getElementById("correctTPCE4").style.color = "#9E1A1A";
        document.getElementById("TPCE4").style.borderColor = "#9E1A1A";
    }

    if(TPCE5 == "sont rentrés")
    {
        document.getElementById("correctTPCE5").innerHTML = "Correct";
        document.getElementById("correctTPCE5").style.color = "green";
        document.getElementById("TPCE5").style.borderColor = "green";
    }
    else
    {
        document.getElementById("correctTPCE5").innerHTML = "Probeer opnieuw";
        document.getElementById("correctTPCE5").style.color = "#9E1A1A";
        document.getElementById("TPCE5").style.borderColor = "#9E1A1A";
    }
}

function controlCPCF()
{
    var CPCF1 = document.getElementById("CPCF1");
    var CPCF2 = document.getElementById("CPCF2");
    var CPCF3 = document.getElementById("CPCF3");
    var CPCF4 = document.getElementById("CPCF4");
    var CPCF5 = document.getElementById("CPCF5");

    if(CPCF1.checked == true)
    {
        document.getElementById("correctCPCF1").innerHTML = "Correct";
        document.getElementById("correctCPCF1").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPCF1").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPCF1").style.color = "#9E1A1A";
    }

    if(CPCF2.checked == false)
    {
        document.getElementById("correctCPCF2").innerHTML = "Correct";
        document.getElementById("correctCPCF2").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPCF2").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPCF2").style.color = "#9E1A1A";
    }

    if(CPCF3.checked == true)
    {
        document.getElementById("correctCPCF3").innerHTML = "Correct";
        document.getElementById("correctCPCF3").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPCF3").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPCF3").style.color = "#9E1A1A";
    }

    if(CPCF4.checked == false)
    {
        document.getElementById("correctCPCF4").innerHTML = "Correct";
        document.getElementById("correctCPCF4").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPCF4").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPCF4").style.color = "#9E1A1A";
    }

    if(CPCF5.checked == false)
    {
        document.getElementById("correctCPCF5").innerHTML = "Correct";
        document.getElementById("correctCPCF5").style.color = "green";
    }
    else
    {
        document.getElementById("correctCPCF5").innerHTML = "Probeer opnieuw"
        document.getElementById("correctCPCF5").style.color = "#9E1A1A";
    }
}