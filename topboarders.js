function changeimg(a,b) {

    var dopewyliebng1 = document.getElementById("dopewyliebng1");
    var dopewyliebng2 = document.getElementById("dopewyliebng2");
    var dopewyliebng3 = document.getElementById("dopewyliebng3");
    var dopewyliebng = document.getElementById("dopewyliebng")

    var dopeblizzardorg = document.getElementById("dopeblizzardorg");
    var dopeblizzardorg1 = document.getElementById("dopeblizzardorg1");
    var dopeblizzardorg2 = document.getElementById("dopeblizzardorg2");
    var dopeblizzardorg3 = document.getElementById("dopeblizzardorg3");
    var dopeblizzardorg4 = document.getElementById("dopeblizzardorg4");

    var dopeyeti = document.getElementById("dopeyeti");
    var dopeyeti1 = document.getElementById("dopeyeti1");
    var dopeyeti2 = document.getElementById("dopeyeti2");
    var dopeyeti3 = document.getElementById("dopeyeti3");
    var dopeyeti4 = document.getElementById("dopeyeti4");

    var blackyeti = document.getElementById("blackyeti");
    var blackyeti1 = document.getElementById("blackyeti1");
    var blackyeti2 = document.getElementById("blackyeti2");
    var blackyeti3 = document.getElementById("blackyeti3");
    var blackyeti4 = document.getElementById("blackyeti4");

    var sherpablack = document.getElementById("sherpablack");
    var sherpablack1 = document.getElementById("sherpablack1");
    var sherpablack2 = document.getElementById("sherpablack2");

    var switchbackblue = document.getElementById("switchbackblue");
    var switchbackblue1 = document.getElementById("switchbackblue1");
    var switchbackblue2 = document.getElementById("switchbackblue2");

    var snowgold = document.getElementById("snowgold");
    var snowgold1 = document.getElementById("snowgold1");
    var snowgold2 = document.getElementById("snowgold2");

    if(a == "dopewyliebng"){

        if(b == "dopewyliebng1" && dopewyliebng1.classList.contains("imgborder") == false){
            dopewyliebng2.classList.remove("imgborder");
            dopewyliebng3.classList.remove("imgborder");
            dopewyliebng1.classList.add("imgborder");
            dopewyliebng.style.backgroundImage = "url('images/products/blackandgold/blackandgold1.jpg')";
        }else if(b == "dopewyliebng2" && dopewyliebng2.classList.contains("imgborder") == false){
            dopewyliebng1.classList.remove("imgborder");
            dopewyliebng3.classList.remove("imgborder");
            dopewyliebng2.classList.add("imgborder");
            dopewyliebng.style.backgroundImage = "url('images/products/blackandgold/blackandgold2.jpg')";
        }else if(b == "dopewyliebng3" && dopewyliebng3.classList.contains("imgborder") == false){
            dopewyliebng1.classList.remove("imgborder");
            dopewyliebng2.classList.remove("imgborder");
            dopewyliebng3.classList.add("imgborder");
            dopewyliebng.style.backgroundImage = "url('images/products/blackandgold/blackandgold3.jpg')";
        }else{}

    }else if (a == "dopeblizzardorg"){
        if(b == "dopeblizzardorg1" && dopeblizzardorg1.classList.contains("imgborder") == false){
            dopeblizzardorg1.classList.add("imgborder");
            dopeblizzardorg2.classList.remove("imgborder");
            dopeblizzardorg3.classList.remove("imgborder");
            dopeblizzardorg4.classList.remove("imgborder");
            dopeblizzardorg.style.backgroundImage = "url('images/products/orange/orange1.jpg')";
        }else if(b == "dopeblizzardorg2" && dopeblizzardorg2.classList.contains("imgborder") == false){
            dopeblizzardorg2.classList.add("imgborder");
            dopeblizzardorg1.classList.remove("imgborder");
            dopeblizzardorg3.classList.remove("imgborder");
            dopeblizzardorg4.classList.remove("imgborder");
            dopeblizzardorg.style.backgroundImage = "url('images/products/orange/orange2.jpg')";
        }else if(b == "dopeblizzardorg3" && dopeblizzardorg3.classList.contains("imgborder") == false){
            dopeblizzardorg3.classList.add("imgborder");
            dopeblizzardorg1.classList.remove("imgborder");
            dopeblizzardorg2.classList.remove("imgborder");
            dopeblizzardorg4.classList.remove("imgborder");
            dopeblizzardorg.style.backgroundImage = "url('images/products/orange/orange3.jpg')";
        }else if(b == "dopeblizzardorg4" && dopeblizzardorg4.classList.contains("imgborder") == false){
            dopeblizzardorg4.classList.add("imgborder");
            dopeblizzardorg1.classList.remove("imgborder");
            dopeblizzardorg3.classList.remove("imgborder");
            dopeblizzardorg2.classList.remove("imgborder");
            dopeblizzardorg.style.backgroundImage = "url('images/products/orange/orange4.jpg')";
        }else{}
    }else if(a == "dopeyeti") {
        if(b == "dopeyeti1" && dopeyeti1.classList.contains("imgborder") == false){
            dopeyeti1.classList.add("imgborder");
            dopeyeti2.classList.remove("imgborder");
            dopeyeti3.classList.remove("imgborder");
            dopeyeti4.classList.remove("imgborder");
            dopeyeti.style.backgroundImage = "url('images/products/white/white1.jpg')";
        }else if(b == "dopeyeti2" && dopeyeti2.classList.contains("imgborder") == false){
            dopeyeti2.classList.add("imgborder");
            dopeyeti1.classList.remove("imgborder");
            dopeyeti3.classList.remove("imgborder");
            dopeyeti4.classList.remove("imgborder");
            dopeyeti.style.backgroundImage = "url('images/products/white/white2.jpg')";
        }else if(b == "dopeyeti3" && dopeyeti3.classList.contains("imgborder") == false){
            dopeyeti3.classList.add("imgborder");
            dopeyeti2.classList.remove("imgborder");
            dopeyeti1.classList.remove("imgborder");
            dopeyeti4.classList.remove("imgborder");
            dopeyeti.style.backgroundImage = "url('images/products/white/white3.jpg')";
        }else if(b == "dopeyeti4" && dopeyeti4.classList.contains("imgborder") == false){
            dopeyeti4.classList.add("imgborder");
            dopeyeti2.classList.remove("imgborder");
            dopeyeti3.classList.remove("imgborder");
            dopeyeti1.classList.remove("imgborder");
            dopeyeti.style.backgroundImage = "url('images/products/white/white4.jpg')";
        }
    }else if(a == "blackyeti") {
        if(b == "blackyeti1" && blackyeti1.classList.contains("imgborder") == false){
            blackyeti1.classList.add("imgborder");
            blackyeti2.classList.remove("imgborder");
            blackyeti3.classList.remove("imgborder");
            blackyeti4.classList.remove("imgborder");
            blackyeti.style.backgroundImage = "url('images/products/blackdopejacket/black1.jpg')";
        }else if(b == "blackyeti2" && blackyeti2.classList.contains("imgborder") == false){
            blackyeti2.classList.add("imgborder");
            blackyeti1.classList.remove("imgborder");
            blackyeti3.classList.remove("imgborder");
            blackyeti4.classList.remove("imgborder");
            blackyeti.style.backgroundImage = "url('images/products/blackdopejacket/black2.jpg')";
        }else if(b == "blackyeti3" && blackyeti3.classList.contains("imgborder") == false){
            blackyeti3.classList.add("imgborder");
            blackyeti2.classList.remove("imgborder");
            blackyeti1.classList.remove("imgborder");
            blackyeti4.classList.remove("imgborder");
            blackyeti.style.backgroundImage = "url('images/products/blackdopejacket/black3.jpg')";
        }else if(b == "blackyeti4" && blackyeti4.classList.contains("imgborder") == false){
            blackyeti4.classList.add("imgborder");
            blackyeti2.classList.remove("imgborder");
            blackyeti3.classList.remove("imgborder");
            blackyeti1.classList.remove("imgborder");
            blackyeti.style.backgroundImage = "url('images/products/blackdopejacket/black4.jpg')";
        }
    }else if (a == "sherpablack") {
        if (b == "sherpablack1" && sherpablack1.classList.contains("imgborder") == false){
            sherpablack1.classList.add("imgborder");
            sherpablack2.classList.remove("imgborder");
            sherpablack.style.backgroundImage = "url('images/products/quicksilverblack/1219431.jpg')";
    } else if(b == "sherpablack2" && sherpablack2.classList.contains("imgborder") == false){
        sherpablack2.classList.add("imgborder");
        sherpablack1.classList.remove("imgborder");
        sherpablack.style.backgroundImage = "url('images/products/quicksilverblack/1219433.jpg')";
    } else {}

    }else if (a == "switchbackblue") {
        if (b == "switchbackblue1" && switchbackblue1.classList.contains("imgborder") == false){
            switchbackblue1.classList.add("imgborder");
            switchbackblue2.classList.remove("imgborder");
            switchbackblue.style.backgroundImage = "url('images/products/quiksilverblue/1242433.jpg')";
    } else if(b == "switchbackblue2" && switchbackblue2.classList.contains("imgborder") == false){
        switchbackblue2.classList.add("imgborder");
        switchbackblue1.classList.remove("imgborder");
        switchbackblue.style.backgroundImage = "url('images/products/quiksilverblue/1242434.jpg')";
    } else {}

    }else if (a == "snowgold") {
        if (b == "snowgold1" && snowgold1.classList.contains("imgborder") == false){
            snowgold1.classList.add("imgborder");
            snowgold2.classList.remove("imgborder");
            snowgold.style.backgroundImage = "url('images/products/quicksilvergold/1238773.jpg')";
        } else if(b == "snowgold2" && snowgold2.classList.contains("imgborder") == false){
            snowgold2.classList.add("imgborder");
            snowgold1.classList.remove("imgborder");
            snowgold.style.backgroundImage = "url('images/products/quicksilvergold/1238774.jpg')";
            
        } else {}

    }else {}

}

function choosesize(a,b) {
    var xs = document.getElementById("xs");
    var s = document.getElementById("s");
    var m = document.getElementById("m");
    var l = document.getElementById("l");
    var xl = document.getElementById("xl");

    if(a == "dopewyliebng"){
        if(b == "xs"){
            xs.src = "images/xs.jpg";
            s.src = "images/sgrey.jpg";
            m.src = "images/mgrey.jpg";
            l.src = "images/lgrey.jpg";
            xl.src = "images/xlgrey.jpg";
        }else if(b == "s"){
            xs.src = "images/xsgrey.jpg";
            s.src = "images/s.jpg";
            m.src = "images/mgrey.jpg";
            l.src = "images/lgrey.jpg";
            xl.src = "images/xlgrey.jpg";
        }else if(b == "m"){
            xs.src = "images/xsgrey.jpg";
            s.src = "images/sgrey.jpg";
            m.src = "images/m.jpg";
            l.src = "images/lgrey.jpg";
            xl.src = "images/xlgrey.jpg";
        }else if(b == "l"){
            xs.src = "images/xsgrey.jpg";
            s.src = "images/sgrey.jpg";
            m.src = "images/mgrey.jpg";
            l.src = "images/l.jpg";
            xl.src = "images/xlgrey.jpg";
        }else if(b == "xl"){
            xs.src = "images/xsgrey.jpg";
            s.src = "images/sgrey.jpg";
            m.src = "images/mgrey.jpg";
            l.src = "images/lgrey.jpg";
            xl.src = "images/xl.jpg";
        }
    }else{}
}


function dropdown(id){
var windsnow = document.getElementById("windsnow");
var glasses = document.getElementById("glasses");
var ridingstyle = document.getElementById("ridingstyle");
var shape = document.getElementById("shape");
var delivery = document.getElementById("delivery");
var water = document.getElementById("water");

if (id == "windsnow"){
    if(windsnow.style.display == "block"){
        windsnow.style.display = "none";
        console.log("TURNED OFF");
    }else {
        windsnow.style.display = "block";
        console.log("TURNED ON");
    }
}else if(id == "glasses"){
    if(glasses.style.display == "block"){
        glasses.style.display = "none";
        console.log("TURNED OFF");
    }else {
        glasses.style.display = "block";
        console.log("TURNED ON");
    }
}else if(id == "ridingstyle"){
    if(ridingstyle.style.display == "block"){
        ridingstyle.style.display = "none";
    }else{
        ridingstyle.style.display = "block";
    }
}else if(id == "shape"){
    if(shape.style.display == "block"){
        shape.style.display = "none";
    }else{
        shape.style.display = "block";
    }
}else if (id == "delivery"){
    if(delivery.style.display == "block"){
        delivery.style.display = "none";
    }else{
        delivery.style.display = "block";
    }
}else if(id == "water"){
    if(water.style.display == "block"){
        water.style.display = "none";
    }else{
        water.style.display = "block";
    }
}else{}

console.log("ran");
}

function togglemenu() {
var dropdownmenu = document.getElementById("dropdownmenu");
console.log(dropdownmenu.style.display);

if(dropdownmenu.style.display != "block"){
dropdownmenu.style.display = "block";
}else if(dropdownmenu.style.display == "block"){
dropdownmenu.style.display = "none";
}else{}


}