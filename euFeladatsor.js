const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]



function Tablazat(vizsgaltTomb){
    let tabla=document.querySelector("#euTablazat")

    for(let i=0;i<vizsgaltTomb.length;i++){
        let adatSor=tabla.insertRow()
        let orszag=adatSor.insertCell()
        let csatlakozas=adatSor.insertCell()

        orszag.innerHTML=vizsgaltTomb[i].orszag
        csatlakozas.innerHTML=vizsgaltTomb[i].csatlakozas
    }
}
Tablazat(EuropaiUnio)




// 1. feladat

function EUTagokSzama(vizsgaltTomb){
    return vizsgaltTomb.length
}


function EUTagokSzamaKiir(){
    let tagokSzama=EUTagokSzama(EuropaiUnio)
    
    document.querySelector("#f1").innerHTML=`${tagokSzama} tagja van az EU-nak.`
}

document.querySelector("#f1Gomb").addEventListener("click",EUTagokSzamaKiir)



// 2. feladat

function EvszamKiszedo(){
    let adottEvszam=document.querySelector("#adottEv").value
    return adottEvszam
}

function CsatlakozasAdottEvben(vizsgaltTomb,adottEv){
    let szamlalo=0
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].csatlakozas.substr(0,4)==adottEv){
            szamlalo++
        }
    }
    return szamlalo
}


function CsatlakozasAdottEvbenKiir(){
    let uzenet=document.querySelector("#f2")
    let adottEv=EvszamKiszedo()
    let hanyOrszagCsatlakozott=CsatlakozasAdottEvben(EuropaiUnio,adottEv)

    if(adottEv==""){
        uzenet.innerHTML=`Kérlek adj meg egy évszámot.`
    }

    else{
        uzenet.innerHTML=`${adottEv} évjében ${hanyOrszagCsatlakozott} ország csatlakozott az EU-hoz.`
    }
}

document.querySelector("#f2Gomb").addEventListener("click",CsatlakozasAdottEvbenKiir)



// 3. feladat

function OrszagKiszedo(){
    let adottOrszag=document.querySelector("#adottEvszam").value
    return adottOrszag
}


function VoltECsatlakozas(vizsgaltTomb,adottOrszag){
    let voltCsatlakozas=false
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].orszag.toLowerCase()==adottOrszag.toLowerCase()){
            voltCsatlakozas=true
        }
    }
    return voltCsatlakozas
}


function VoltECsatlakozasKiir(){
    let uzenet=document.querySelector("#f3")
    let adottOrszag=OrszagKiszedo()
    let voltECsatlakozas=VoltECsatlakozas(EuropaiUnio,adottOrszag)

    if(adottOrszag==""){
        uzenet.innerHTML=`Kérlek adj meg egy országot.`
    }

    else if(voltECsatlakozas==true){
        uzenet.innerHTML=`${adottOrszag} csatlakozott az EU-hoz.`
    }
    else{
        uzenet.innerHTML=`${adottOrszag} NEM csatlakozott az EU-hoz`
    }
}

document.querySelector("#f3Gomb").addEventListener("click",VoltECsatlakozasKiir)



// 4. feladat

function HonapKiszedo(){
    let honapId=document.querySelector("#honapok").value
    return honapId
}


function AdottHonapbanCsatlakozas(vizsgaltTomb,adottHonap){
    let voltECsatlakozas=false
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].csatlakozas.substr(5,2)==adottHonap){
            voltECsatlakozas=true
        }
    }
    return voltECsatlakozas
}


function HonapNeve(honapAz){
    if(honapAz=="01"){
        return "Január"
    }
    else if(honapAz=="02"){
        return "Február";
    }
    else if(honapAz=="03"){
        return "Március";
    }    
    else if(honapAz=="04"){
        return "Április";
    }
    else if(honapAz=="05"){
        return "Május";
    }
    else if(honapAz=="06"){
        return "Június";
    }
    else if(honapAz=="07"){
        return "Július";
    }
    else if(honapAz=="08"){
        return "Augusztus";
    }
    else if(honapAz=="09"){
        return "Szeptember";
    }
    else if(honapAz=="10"){
        return "Október";
    }
    else if(honapAz=="11"){
        return "November";
    }
    else{
        return "December";
    }
}



function AdottHonapbanCsatlakozasKiir(){
    let uzenet=document.querySelector("#f4")
    let adottHonap=HonapKiszedo()
    let voltECsatlakozas=AdottHonapbanCsatlakozas(EuropaiUnio,adottHonap)

    if(voltECsatlakozas==true){
        uzenet.innerHTML=`${HonapNeve(adottHonap)} hónapban volt csatlakozás.`
    }
    else{
        uzenet.innerHTML=`${HonapNeve(adottHonap)} hónapban NEM volt csatlakozás.`
    }
}

document.querySelector("#f4Gomb").addEventListener("click",AdottHonapbanCsatlakozasKiir)



// 5. feladat

function UtoljaraCsatlakozott(vizsgaltTomb){
    let utolsoCsatlakozas=vizsgaltTomb[0].csatlakozas.substr(0,4)
    let utoljaraCsatlakozott=vizsgaltTomb[0].orszag
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i].csatlakozas.substr(0,4)>utolsoCsatlakozas){
            utolsoCsatlakozas=vizsgaltTomb[i].csatlakozas.substr(0,4)
            utoljaraCsatlakozott=vizsgaltTomb[i].orszag
        }
    }
    return utoljaraCsatlakozott
}


function UtoljaraCsatlakozottKiir(){
    let utoljaraCsatlakozott=UtoljaraCsatlakozott(EuropaiUnio)

    document.querySelector("#f5").innerHTML=`${utoljaraCsatlakozott} csatlakozott utoljára az EU-hoz.`
}

document.querySelector("#f5Gomb").addEventListener("click",UtoljaraCsatlakozottKiir)



// 6. feladat

function EvszamKivalogato(vizsgaltTomb){
    let evLista=[]
    for(let i=0;i<vizsgaltTomb.length;i++){
        let adottEv=vizsgaltTomb[i].csatlakozas.substr(0,4)
        let szerepelE=false
        for(let j=0;j<evLista.length;j++){
            if(adottEv==evLista[j]){
                szerepelE=true
            }
        }
        if(szerepelE==false){
            evLista.push(adottEv)
        }
    }
    evLista.sort()
    return evLista
}


function EvszamMegszamolo(vizsgaltTomb,evekListaja){
    let evekMennyisege=[]
    for(let i=0;i<evekListaja.length;i++){
        evekMennyisege.push(0)
    }
    for(let i=0;i<vizsgaltTomb.length;i++){
        let adottEv=vizsgaltTomb[i].csatlakozas.substr(0,4)
        for(let j=0;j<evekListaja.length;j++){
            if(adottEv==evekListaja[j]){
                evekMennyisege[j]++
            }
        }
    }
    return evekMennyisege
}



function StatisztikaTablazat(){
    let tabla=document.querySelector("#statisztikaTabla")
    let evszamok=EvszamKivalogato(EuropaiUnio)
    let evekMennyisege=EvszamMegszamolo(EuropaiUnio,evszamok)

    for(let i=0;i<evszamok.length;i++){
        let adatSor=tabla.insertRow(1)
        let csatlakozasEv=adatSor.insertCell(0)
        let csatlakozasMennyiseg=adatSor.insertCell(1)

       csatlakozasEv.innerHTML=evszamok[i]
       csatlakozasMennyiseg.innerHTML=evekMennyisege[i]
    }
    document.querySelector("#f6Gomb").removeEventListener("click",StatisztikaTablazat)

}

document.querySelector("#f6Gomb").addEventListener("click",StatisztikaTablazat)


const feladat1=document.querySelector("#feladat01").style
const feladat2=document.querySelector("#feladat02").style
const feladat3=document.querySelector("#feladat03").style
const feladat4=document.querySelector("#feladat04").style
const feladat5=document.querySelector("#feladat05").style
const feladat6=document.querySelector("#feladat06").style

const feladatUzenetMezo=document.querySelector("#feladatUzenet")

document.querySelector("#f01").addEventListener("click",()=>{
    feladat2.display="none"
    feladat3.display="none"
    feladat4.display="none"
    feladat5.display="none"
    feladat6.display="none"

    if(feladat1.display==="block"){
        feladat1.display="none"
        feladatUzenetMezo.classList.remove("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=``
    }
    else{
        feladat1.display="block"
        feladatUzenetMezo.classList.add("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=`1. feladat`
        
    }
})

document.querySelector("#f02").addEventListener("click",()=>{
    feladat1.display="none"
    feladat3.display="none"
    feladat4.display="none"
    feladat5.display="none"
    feladat6.display="none"

    if(feladat2.display==="block"){
        feladat2.display="none"
        feladatUzenetMezo.classList.remove("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=``
    }
    else{
        feladat2.display="block"
        feladatUzenetMezo.classList.add("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=`2. feladat`
    }
})

document.querySelector("#f03").addEventListener("click",()=>{
    feladat1.display="none"
    feladat2.display="none"
    feladat4.display="none"
    feladat5.display="none"
    feladat6.display="none"

    if(feladat3.display==="block"){
        feladat3.display="none"
        feladatUzenetMezo.classList.remove("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=``
    }
    else{
        feladat3.display="block"
        feladatUzenetMezo.classList.add("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=`3. feladat`
    }
})

document.querySelector("#f04").addEventListener("click",()=>{
    feladat1.display="none"
    feladat2.display="none"
    feladat3.display="none"
    feladat5.display="none"
    feladat6.display="none"

    if(feladat4.display==="block"){
        feladat4.display="none"
        feladatUzenetMezo.classList.remove("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=``
    }
    else{
        feladat4.display="block"
        feladatUzenetMezo.classList.add("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=`4. feladat`
    }
})

document.querySelector("#f05").addEventListener("click",()=>{
    feladat1.display="none"
    feladat2.display="none"
    feladat4.display="none"
    feladat3.display="none"
    feladat6.display="none"

    if(feladat5.display==="block"){
        feladat5.display="none"
        feladatUzenetMezo.classList.remove("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=``
    }
    else{
        feladat5.display="block"
        feladatUzenetMezo.classList.add("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=`5. feladat`
    }
})

document.querySelector("#f06").addEventListener("click",()=>{
    feladat1.display="none"
    feladat2.display="none"
    feladat4.display="none"
    feladat5.display="none"
    feladat3.display="none"

    if(feladat6.display==="block"){
        feladat6.display="none"
        feladatUzenetMezo.classList.remove("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=``
    }
    else{
        feladat6.display="block"
        feladatUzenetMezo.classList.add("bg-dark","text-light","p-3")
        feladatUzenetMezo.innerHTML=`6. feladat`
    }
})