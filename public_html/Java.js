var xmlhttp= new XMLHttpRequest();  
        xmlhttp.open("GET","Destinacije.xml",false);
        xmlhttp.send();
        xmldoc=xmlhttp.responseXML;
        
        x=xmldoc.getElementsByTagName("Destinacija");
function prikazi(){
    max=document.getElementById("max");
    rank=document.getElementById("padajuca");
    ind=true; indmax=true;
   
    if(max.value=="")
    {
        ind=false;
        indmax=false;
        max.style.border="red solid 1px";
    }
    else
        max.style.border="green solid 1px";
   

    if(ind)
    {
        
        document.getElementById("tab").innerHTML="<th>Mesto</th><th>Vodic</th><th>Cena</th>";
        
     
    
        for(i=0;i<x.length;i++)
        {
            x_dubina=x[i].getElementsByTagName("Dubina")[0].childNodes[0].nodeValue;
            x_stepen=x[i].getElementsByTagName("Stepen")[0].childNodes[0].nodeValue;
            
           
            var maxval=parseFloat(max.value);
            var rankval=parseInt(rank.value);
            
            
            var x_dubinaval=parseFloat(x_dubina);
            var x_rankval=parseInt(x_stepen);
            
            if( x_dubinaval<=maxval && x_rankval<= rankval)
            {
                x_naziv=x[i].getElementsByTagName("Naziv")[0].childNodes[0].nodeValue;
                x_vodic=x[i].getElementsByTagName("ImeVod")[0].childNodes[0].nodeValue;
                x_cena=x[i].getElementsByTagName("Cena")[0].childNodes[0].nodeValue;
                
                document.getElementById("tab").innerHTML+="<tr onclick='Ispisi("+i+")'><td>"+x_naziv+"</td><td>"+x_vodic+"</td><td>"+x_cena+"</td></tr>";
            }
                  
        }

    }
    else
    {
        document.getElementById("tab").innerHTML="Neispravni podaci pretrage.";
        if(indmax==false) document.getElementById("tab").innerHTML+="Pogresan podatek o maksimalnoj dubini.";
    }
    
}
function Ispisi(ind){
    tekst=x[ind].getElementsByTagName("Opis")[0].childNodes[0].nodeValue;
    slika=x[ind].getElementsByTagName("Slika")[0].childNodes[0].nodeValue;
    document.getElementById("opis").innerHTML=tekst+"<img src='Slike/"+slika+"'>";
}    
//Listaj slike

function listaj1(){
    document.getElementById("ListaSlika").src = "Slike/korali.jpg"; 
}
function listaj2(){
    document.getElementById("ListaSlika").src = "Slike/pecurke.jpg"; 
}
function listaj3(){
    document.getElementById("ListaSlika").src = "Slike/dive.jpg"; 
}
