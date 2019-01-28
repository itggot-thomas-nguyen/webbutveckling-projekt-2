function BollKlick(event){
    if (event === "two"){
        var boll1 = document.getElementById("two")

    }
    else if(event === "one"){
        var boll1 = document.getElementById("one")
    }
    else if(event === "three"){
        var boll1 = document.getElementById("three")

    }
    else if(event === "four"){
        var boll1 = document.getElementById("four")

    }
    else if(event === "five"){
        var boll1 = document.getElementById("five")

    }
    else if(event === "six"){
        var boll1 = document.getElementById("six")

    }
    else if(event === "seven"){
        var boll1 = document.getElementById("seven")

    }
    else if(event === "eight"){
        var boll1 = document.getElementById("eight")

    }
    else if(event === "nine"){
        var boll1 = document.getElementById("nine")

    }
    else if(event === "ten"){
        var boll1 = document.getElementById("ten")

    }
    else if(event === "eleven"){
        var boll1 = document.getElementById("eleven")

    }
    else if(event === "twelve"){
        var boll1 = document.getElementById("twelve")

    }
    else if(event === "thirteen"){
        var boll1 = document.getElementById("thirteen")

    }
    else if(event === "fourteen"){
        var boll1 = document.getElementById("fourteen")

    }
    else if(event === "fifteen"){
        var boll1 = document.getElementById("fifteen")

    }
    else if(event === "sixteen"){
        var boll1 = document.getElementById("sixteen")

    }
    else if(event === "seventeen"){
        var boll1 = document.getElementById("seventeen")

    }
    else if(event === "eighteen"){
        var boll1 = document.getElementById("eighteen")

    }
    else if(event === "nineteen"){
        var boll1 = document.getElementById("nineteen")

    }
    else if(event === "twenty"){
        var boll1 = document.getElementById("twenty")

    }
    else if(event === "twentyone"){
        var boll1 = document.getElementById("twentyone")

    }
    else if(event === "twentytwo"){
        var boll1 = document.getElementById("twentytwo")

    }
    else if(event === "twentythree"){
        var boll1 = document.getElementById("twentythree")

    }
    else if(event === "twentyfour"){
        var boll1 = document.getElementById("twentyfour")

    }
    
    //  else {
    //     var boll1 = document.querySelector(".bollfakta")
    // }

    boll1.classList.toggle("bollaktivering")
    console.log("Det funkar!")
}

function BollKlickBort(event){
    let bollfakta = document.querySelector(".bollfakta")
    bollfakta.classList.toggle("bollaktivering")
    console.log("Det funkar!")

}
