
function create() {
    if(document.getElementById("E-mail").value.length < 1 && document.getElementById("E-mail").value.length != "@" ) {
        document.getElementById("E-mail").style.borderColor = "red"; 
        document.getElementById("E-mail3").innerText = "Email is incorrect" 
    } else if (document.getElementById("password").value.length <8) {
        document.getElementById("password").style.borderColor = "red";
        document.getElementById("password_P").innerText = "The password must be 8 characters long"
    } else if (document.getElementById("comfirm_M").value != document.getElementById("password").value) {
        document.getElementById("comfirm_M").style.borderColor = "red";
        document.getElementById("password_C").innerText = "The password is different" 
    
    } else if(document.getElementById("Username").value.length < 6) {
        document.getElementById("Username").style.borderColor = "red";
        document.getElementById("User_N").innerText = "The username must be 8 letters long"  
    } else {
        if (localStorage.count < 5) {
            localStorage.count = Number(localStorage.count)+1;
        } else {
            localStorage.count = 1 
        }
        if (localStorage.count == 1) {
            localStorage.accents = [document.getElementById("Username").value]
            localStorage.pass = [document.getElementById("password").value]
        } else if(localStorage.count == 2) {
            localStorage.accents1 = [document.getElementById("Username").value]
            localStorage.pass1 = [document.getElementById("password").value]
        } else if(localStorage.count == 3) {
            localStorage.accents2 = [document.getElementById("Username").value]
            localStorage.pass2 = [document.getElementById("password").value]
        } else if(localStorage.count == 4) {
            localStorage.accents3 = [document.getElementById("Username").value]
            localStorage.pass3 = [document.getElementById("password").value]
        } else if(localStorage.count ==5) {
            localStorage.accents4 = [document.getElementById("Username").value]
            localStorage.pass4 = [document.getElementById("password").value]
        }
         window.open("https://egdraconic.github.io/YelpCamp/main.html");
    }

}


function logado() {
    localStorage.conta = 0
    if (document.getElementById("Password_1").value != localStorage.pass && document.getElementById("Password_1").value != localStorage.pass1 && document.getElementById("Password_1").value != localStorage.pass2 && document.getElementById("Password_1").value != localStorage.pass3 && document.getElementById("Password_1").value != localStorage.pass4) {
        document.getElementById("Password_1").style.borderColor = "red";
        document.getElementById("L-password").innerText = "The password is wrong"
    } else if(document.getElementById("Username").value != localStorage.accents2 && document.getElementById("Username").value != localStorage.accents1 && document.getElementById("Username").value != localStorage.accents && document.getElementById("Username").value != localStorage.accents3 && document.getElementById("Username").value != localStorage.accents4){
        document.getElementById("Username").style.borderColor = "red";
        document.getElementById("L-username").innerText = "The username is wrong";
    } else if (document.getElementById("Username").value == localStorage.accents && document.getElementById("Password_1").value == localStorage.pass) {
        localStorage.conta = Number(localStorage.conta) + 1
        window.open("https://egdraconic.github.io/YelpCamp/main.html");
    } else if (document.getElementById("Username").value == localStorage.accents1 && document.getElementById("Password_1").value == localStorage.pass1) {
        localStorage.conta = Number(localStorage.conta) + 2
        window.open("https://egdraconic.github.io/YelpCamp/main.html");
    }else if (document.getElementById("Password_1").value == localStorage.pass2 && document.getElementById("Username").value == localStorage.accents2) {
        localStorage.conta = Number(localStorage.conta) + 3
        window.open("https://egdraconic.github.io/YelpCamp/main.html");
    } else if (document.getElementById("Username").value == localStorage.accents3 && document.getElementById("Password_1").value == localStorage.pass3) {
        localStorage.conta = Number(localStorage.conta) + 4
        window.open("https://egdraconic.github.io/YelpCamp/main.html");
    } else if (document.getElementById("Username").value == localStorage.accents4 && document.getElementById("Password_1").value == localStorage.pass4) {
        localStorage.conta = Number(localStorage.conta) + 5
        window.open("https://egdraconic.github.io/YelpCamp/main.html");
    } 
}

if(document.getElementById("body_2") != null) {
    if(localStorage.conta == 1) {
        document.getElementById("image_S").style.position.absolute = "top:316px"
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_5").style.display = "none"
        document.getElementById("login_8").style.display = "none"
        document.getElementById("USN").style.display = "inline"
        document.getElementById("Out").style.display = "inline"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("image_S").style.display = "none"
        document.getElementById("image_N").style.display = "inline"
        document.getElementById("USN").innerText = localStorage.accents
        document.getElementById("USNI").innerText = localStorage.accents
    } else if(localStorage.conta == 2) {
        document.getElementById("image_S").style.position.absolute = "top:316px"
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_5").style.display = "none"
        document.getElementById("login_8").style.display = "none"
        document.getElementById("USN").style.display = "inline"
        document.getElementById("Out").style.display = "inline"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("image_S").style.display = "none"
        document.getElementById("image_N").style.display = "inline"
        document.getElementById("USN").innerText = localStorage.accents1
        document.getElementById("USNI").innerText = localStorage.accents1
    } else if(localStorage.conta == 3) {
        document.getElementById("image_S").style.position.absolute = "top:316px"
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_5").style.display = "none"
        document.getElementById("login_8").style.display = "none"
        document.getElementById("USN").style.display = "inline"
        document.getElementById("Out").style.display = "inline"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("image_S").style.display = "none"
        document.getElementById("image_N").style.display = "inline"
        document.getElementById("USN").innerText = localStorage.accents2
        document.getElementById("USNI").innerText = localStorage.accents2
    } else if(localStorage.conta == 4) {
        document.getElementById("image_S").style.position.absolute = "top:316px"
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_5").style.display = "none"
        document.getElementById("login_8").style.display = "none"
        document.getElementById("USN").style.display = "inline"
        document.getElementById("Out").style.display = "inline"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("image_S").style.display = "none"
        document.getElementById("image_N").style.display = "inline"
        document.getElementById("USNI").innerText = localStorage.accents3
        document.getElementById("USN").innerText = localStorage.accents3
    } else if(localStorage.conta == 5) {
        document.getElementById("image_S").style.position.absolute = "top:316px"
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_5").style.display = "none"
        document.getElementById("login_8").style.display = "none"
        document.getElementById("USN").style.display = "inline"
        document.getElementById("Out").style.display = "inline"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("image_S").style.display = "none"
        document.getElementById("image_N").style.display = "inline"
        document.getElementById("USNI").innerText = localStorage.accents4
        document.getElementById("USN").innerText = localStorage.accents4
    }


    document.getElementById("Outo").addEventListener("click", function(){
        document.getElementById("login_2").style.display = "inline"
        document.getElementById("create_3").style.display = "inline"
        document.getElementById("login_4").style.display = "inline"
        document.getElementById("create_3").style.display = "inline"
        document.getElementById("USN").style.display = "none"
        document.getElementById("Out").style.display = "none"
        document.getElementById("USNI").style.display = "none"
        document.getElementById("Outo").style.display = "none"
        document.getElementById("image_S").style.display = "inline"
        document.getElementById("image_N").style.display = "none"
        localStorage.conta = 0
    })

}

if (document.getElementById("Menu") != null ) {

    document.getElementById("Menu").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "inline"
        document.getElementById("Menu").style.display = "none"
    })

    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "none"
        document.getElementById("Menu").style.display = "inline"
    })
}

if (document.getElementById("Menu_1") != null ) {

    document.getElementById("Menu_1").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "inline"
        document.getElementById("Menu").style.display = "none"
    })

    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "none"
        document.getElementById("Menu").style.display = "inline"
    })
}

if (document.getElementById("Menu_3") != null ) {

    document.getElementById("Menu_3").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "inline"
        document.getElementById("login_10").style.display = "inline"
        document.getElementById("USNI").style.display = "inline"
        document.getElementById("USNI").style.display = "Outou"
        document.getElementById("Menu_3").style.display = "none"
        document.getElementById("USNI").innerText = localStorage.accents


        if(localStorage.conta == 1) {
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("login_10").style.display = "inline"
            document.getElementById("USNI").style.display = "inline"
            document.getElementById("USNI").style.display = "Outou"
            document.getElementById("Menu_3").style.display = "none"
            document.getElementById("USNI").innerText = localStorage.accents
        } else if(localStorage.conta == 2) {
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("login_10").style.display = "inline"
            document.getElementById("USNI").style.display = "inline"
            document.getElementById("USNI").style.display = "Outou"
            document.getElementById("Menu_3").style.display = "none"
            document.getElementById("USNI").innerText = localStorage.accents1
        } else if(localStorage.conta == 3) {
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("login_10").style.display = "inline"
            document.getElementById("USNI").style.display = "inline"
            document.getElementById("USNI").style.display = "Outou"
            document.getElementById("Menu_3").style.display = "none"
            document.getElementById("USNI").innerText = localStorage.accents2
        } else if(localStorage.conta == 4) {
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("login_10").style.display = "inline"
            document.getElementById("USNI").style.display = "inline"
            document.getElementById("USNI").style.display = "Outou"
            document.getElementById("Menu_3").style.display = "none"
            document.getElementById("USNI").innerText = localStorage.accents3
        } else if(localStorage.conta == 5) {
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("login_10").style.display = "inline"
            document.getElementById("USNI").style.display = "inline"
            document.getElementById("USNI").style.display = "Outou"
            document.getElementById("Menu_3").style.display = "none"
            document.getElementById("USNI").innerText = localStorage.accents4
        }

    })

    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "none"
        document.getElementById("Menu_3").style.display = "inline"
    })
}

if (document.getElementById("Menu_2") != null ) {

    document.getElementById("Menu_2").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "inline"
        document.getElementById("Menu_2").style.display = "none"
    })

    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "none"
        document.getElementById("Menu_2").style.display = "inline"
    })
}

 if (document.getElementById("Menu_4") != null) {
    document.getElementById("Menu_4").addEventListener("click", function() {
        document.getElementById("login_9").style.display = "inline"
        document.getElementById("C_menu").style.display = "inline"
    })
 }


if (document.getElementById("body_3") != null) {
    if(localStorage.conta == 1) {
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_6").style.display = "none"
        document.getElementById("login_7").style.display = "none"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("usn").style.display = "inline"
        document.getElementById("usn").style.marginLeft = "597px"
        document.getElementById("out").style.display = "inline"
        document.getElementById("usn").innerText = localStorage.accents
        document.getElementById("USNI").innerText = localStorage.accents
    } else if(localStorage.conta == 2) {
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_6").style.display = "none"
        document.getElementById("login_7").style.display = "none"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("usn").style.display = "inline"
        document.getElementById("usn").style.margin = "margin: 37px 50px 0 597px;"
        document.getElementById("out").style.display = "inline"
        document.getElementById("usn").innerText = localStorage.accents1
        document.getElementById("USNI").innerText = localStorage.accents1
    } else if(localStorage.conta == 3) {
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_6").style.display = "none"
        document.getElementById("login_7").style.display = "none"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("usn").style.display = "inline"
        document.getElementById("usn").style.margin = "margin: 37px 50px 0 597px;"
        document.getElementById("out").style.display = "inline"
        document.getElementById("usn").innerText = localStorage.accents2
        document.getElementById("USN").innerText = localStorage.accents2
    } else if(localStorage.conta == 4) {
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_6").style.display = "none"
        document.getElementById("login_7").style.display = "none"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("usn").style.display = "inline"
        document.getElementById("usn").style.margin = "margin: 37px 50px 0 597px;"
        document.getElementById("out").style.display = "inline"
        document.getElementById("usn").innerText = localStorage.accents3
        document.getElementById("USN").innerText = localStorage.accents3
    } else if(localStorage.conta == 5) {
        document.getElementById("login_2").style.display = "none"
        document.getElementById("login_4").style.display = "none"
        document.getElementById("login_6").style.display = "none"
        document.getElementById("login_7").style.display = "none"
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo").style.display = "inline"
        document.getElementById("usn").style.display = "inline"
        document.getElementById("usn").style.margin = "margin: 37px 50px 0 597px;"
        document.getElementById("out").style.display = "inline"
        document.getElementById("usn").innerText = localStorage.accents4
        document.getElementById("USN").innerText = localStorage.accents4
    }
    
    function clicado_1() {
        if (localStorage.conta == 0) {
            document.getElementById("img_B1").style.display = "none"
            document.getElementById("no_Ac").style.display = "block"
            document.getElementById("background_4").style.display = "block"
            document.getElementById("Ok").style.display = "block"
        }
        function clicado_2() {
            document.getElementById("img_B1").style.display = "inline"
            document.getElementById("no_Ac").style.display = "none"
            document.getElementById("background_4").style.display = "none"
            document.getElementById("Ok").style.display = "none"
        }

        if (localStorage.conta != 0) {
            window.open("https://egdraconic.github.io/Mount Ulap/camp.html");
        }

        document.getElementById("Ok").addEventListener("click", clicado_2)
    }
    
     if (localStorage.comment_N == 1) {  // começoif
        document.getElementById("name1").innerText = localStorage.user1
        document.getElementById("Cm1").innerText = localStorage.commentC1
    } else if (localStorage.comment_N == 2 ) {
        document.getElementById("name1").innerText = localStorage.user2
        document.getElementById("Cm1").innerText = localStorage.commentC2
        document.getElementById("name2").innerText = localStorage.user1
        document.getElementById("Cm2").innerText = localStorage.commentC1
    } else if (localStorage.comment_N == 3) {
        document.getElementById("name1").innerText = localStorage.user3
        document.getElementById("Cm1").innerText = localStorage.commentC3
        document.getElementById("name2").innerText = localStorage.user2
        document.getElementById("Cm2").innerText = localStorage.commentC2
        document.getElementById("name3").innerText = localStorage.user1
        document.getElementById("Cm3").innerText = localStorage.commentC1
    } else if (localStorage.comment_N == 1) {
        document.getElementById("name1").innerText = localStorage.user1
        document.getElementById("Cm1").innerText = localStorage.commentC1
        document.getElementById("name2").innerText = localStorage.user3
        document.getElementById("Cm2").innerText = localStorage.commentC3
        document.getElementById("name3").innerText = localStorage.user2
        document.getElementById("Cm3").innerText = localStorage.commentC2
    } else if (localStorage.comment_N == 2) {
        document.getElementById("name1").innerText = localStorage.user2
        document.getElementById("Cm1").innerText = localStorage.commentC2
        document.getElementById("name2").innerText = localStorage.user1
        document.getElementById("Cm2").innerText = localStorage.commentC1
        document.getElementById("name2").innerText = localStorage.user3
        document.getElementById("Cm2").innerText = localStorage.commentC3
    } else if (localStorage.comment_N == 3) {
        document.getElementById("name1").innerText = localStorage.user3
        document.getElementById("Cm1").innerText = localStorage.commentC3
        document.getElementById("name2").innerText = localStorage.user2
        document.getElementById("Cm2").innerText = localStorage.commentC2
        document.getElementById("name2").innerText = localStorage.user1
       document.getElementById("Cm2").innerText = localStorage.commentC1
    } else  if (localStorage.comment_N == 1) {  // começoif
        document.getElementById("name1").innerText = localStorage.user1
        document.getElementById("Cm1").innerText = localStorage.commentC3
        document.getElementById("name2").innerText = localStorage.user3
        document.getElementById("Cm2").innerText = localStorage.commentC2
        document.getElementById("name2").innerText = localStorage.user2
       document.getElementById("Cm2").innerText = localStorage.commentC1
    } else if (localStorage.comment_N == 2 ) {
        document.getElementById("name1").innerText = localStorage.user2
        document.getElementById("Cm1").innerText = localStorage.commentC3
        document.getElementById("name2").innerText = localStorage.user1
        document.getElementById("Cm2").innerText = localStorage.commentC2
        document.getElementById("name2").innerText = localStorage.user3
       document.getElementById("Cm2").innerText = localStorage.commentC1
    } else if (localStorage.comment_N == 3) {
        document.getElementById("name1").innerText = localStorage.user3
        document.getElementById("Cm1").innerText = localStorage.commentC3
        document.getElementById("name2").innerText = localStorage.user2
        document.getElementById("Cm2").innerText = localStorage.commentC2
        document.getElementById("name3").innerText = localStorage.user1
        document.getElementById("Cm3").innerText = localStorage.commentC1
    } else if (localStorage.comment_N == 1) {
        document.getElementById("name1").innerText = localStorage.user1
        document.getElementById("Cm1").innerText = localStorage.commentC1
        document.getElementById("name2").innerText = localStorage.user3
        document.getElementById("Cm2").innerText = localStorage.commentC3
        document.getElementById("name3").innerText = localStorage.user2
        document.getElementById("Cm3").innerText = localStorage.commentC2
    } else if (localStorage.comment_N == 2) {
        document.getElementById("name1").innerText = localStorage.user2
        document.getElementById("Cm1").innerText = localStorage.commentC2
        document.getElementById("name2").innerText = localStorage.user1
        document.getElementById("Cm2").innerText = localStorage.commentC1
        document.getElementById("name2").innerText = localStorage.user3
        document.getElementById("Cm2").innerText = localStorage.commentC3
    } else if (localStorage.comment_N == 3) {
        document.getElementById("name1").innerText = localStorage.user3
        document.getElementById("Cm1").innerText = localStorage.commentC3
        document.getElementById("name2").innerText = localStorage.user2
        document.getElementById("Cm2").innerText = localStorage.commentC2
        document.getElementById("name2").innerText = localStorage.user1
       document.getElementById("Cm2").innerText = localStorage.commentC1
    }

    console.log("ola")

    document.getElementById("coments_1").addEventListener("click", clicado_1)
    document.getElementById("Outo").addEventListener("click", function() {
        localStorage.conta = 0;
    })
}

if (document.getElementById("body_6")) {
    if(localStorage.conta == 1) {
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outou").style.display = "inline"
        document.getElementById("USNI").innerText = localStorage.accents
    } else if(localStorage.conta == 2) {
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outou").style.display = "inline"
        document.getElementById("USNI").innerText = localStorage.accents1
    } else if(localStorage.conta == 3) {
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outo")
        document.getElementById("USNI").innerText = localStorage.accents2
    } else if(localStorage.conta == 4) {
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outou").style.display = "inline"
        document.getElementById("USNI").innerText = localStorage.accents3
    } else if(localStorage.conta == 5) {
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outou").style.display = "inline"
        document.getElementById("USNI").innerText = localStorage.accents4
    }
    
}

 if (document.getElementById("Alert_tx") != null) {
    document.getElementById("Outou").addEventListener("click", function() {
        document.getElementById("Alert_tx").style.display = "inline"
    })
    document.getElementById("Outou").addEventListener("click", function() {
        document.getElementById("USNI").style.display = "none"
        document.getElementById("Outou").style.display = "none"
        document.getElementById("Alert_tx").style.display = "inherit"
    })

    document.getElementById("No_thanks").addEventListener("click", function() {
        document.getElementById("USNI").style.display = "block"
        document.getElementById("Outou").style.display = "block",
        document.getElementById("Alert_tx").style.display = "none"
    })

    document.getElementById("Log_out").addEventListener("click", function() {
        localStorage.conta = 0
    })
 }
if (document.getElementById("uSn")!= null) {
    document.getElementById("Menu_4").addEventListener("click", function() {
        if(localStorage.conta == 1) {
        } else if(localStorage.conta == 1) {
            document.getElementById("USNIO").style.display = "block"
            document.getElementById("oUt").style.display = "inline"
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("USNIO").innerText = localStorage.accents
        } else if(localStorage.conta == 2) {
            document.getElementById("USNIO").style.display = "block"
            document.getElementById("oUt").style.display = "inline"
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("USNIO").innerText = localStorage.accents1
        } else if(localStorage.conta == 3) {
            document.getElementById("USNIO").style.display = "block"
            document.getElementById("oUt").style.display = "inline"
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("USNIO").innerText = localStorage.accents2
        } else if(localStorage.conta == 4) {
            document.getElementById("USNIO").style.display = "block"
            document.getElementById("oUt").style.display = "inline"
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("USNIO").innerText = localStorage.accents3
        } else if(localStorage.conta == 5) {
            document.getElementById("USNIO").style.display = "block"
            document.getElementById("oUt").style.display = "inline"
            document.getElementById("C_menu").style.display = "inline"
            document.getElementById("uSn").innerText = localStorage.accents4
        }
    })
    

    document.getElementById("oUt").addEventListener("click", function() {
        document.getElementById("no_Ac").style.display = "inline"
        document.getElementById("USNIO").style.display = "none"
        document.getElementById("oUt").style.display = "none"
        document.getElementById("close").style.display = "none"
        document.getElementById("background_4").style.position = "unset"
        document.getElementById("close_1").style.display = "inline"
    })

    document.getElementById("close").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "none"
    })

    document.getElementById("close_1").addEventListener("click", function() {
        document.getElementById("C_menu").style.display = "none"
        document.getElementById("no_ace").style.display = "none"
    })
}



if (document.getElementById("body_8") != null) {
    localStorage.alert = 0
    if (localStorage.alert = 0) {
        alert("Ola este é um projeto que eu pegei o design na internet, por favor se algo estiver quebrado ou com o código errado me perdoem é que ainda estou aprendendo já que estudo sozinho e o site é responsivel. Só mais uma coisa se o site estiver todo fora do lugar vá no responsivo e coloque a resulução: 1359px x 975px")
        localStorage.alert = Number(localStorage.alert) + 1
    }
}


if (document.getElementById("body_4") != null) {
    if(localStorage.conta == 1) {
        document.getElementById("uSn").style.display = "inline"
        document.getElementById("oUt").style.display = "inline"
        document.getElementById("uSn").innerText = localStorage.accents
    } else if(localStorage.conta == 2) {
        document.getElementById("uSn").style.display = "inline"
        document.getElementById("oUt").style.display = "inline"
        document.getElementById("uSn").innerText = localStorage.accents1
    } else if(localStorage.conta == 3) {
        document.getElementById("uSn").style.display = "inline"
        document.getElementById("oUt").style.display = "inline"
        document.getElementById("uSn").innerText = localStorage.accents2
    } else if(localStorage.conta == 4) {
        document.getElementById("uSn").style.display = "inline"
        document.getElementById("oUt").style.display = "inline"
        document.getElementById("uSn").innerText = localStorage.accents3
    } else if(localStorage.conta == 5) {
        document.getElementById("uSn").style.display = "inline"
        document.getElementById("oUt").style.display = "inline"
        document.getElementById("uSn").innerText = localStorage.accents4
    }
    function clicado_3() {
        document.getElementById("no_Ac").style.display = "block"
        document.getElementById("background_4").style.display = "block"
        document.getElementById("Ok").style.display = "block"

    }

    function clicado_4() {
        document.getElementById("no_Ac").style.display = "none"
        document.getElementById("background_4").style.display = "none"
        document.getElementById("Ok").style.display = "none"
        localStorage.conta = 0
    }
    function Post() {

        if (document.getElementById("comment_1").value.length != 0) {
        if (localStorage.comment_N < 3) {
            localStorage.comment_N = Number(localStorage.comment_N)+1;
        } else {
            localStorage.comment_N = 0 
        }
        if(localStorage.comment_N == 1 ) {
            localStorage.commentC1 = document.getElementById("comment_1").value
            if (localStorage.conta == 1) {
                localStorage.user1 = localStorage.accents
            } else if (localStorage.conta  == 2) {
                localStorage.user1 = localStorage.accents1
            } else if (localStorage.conta  == 3) {
                localStorage.user1 = localStorage.accents2
            } else if (localStorage.conta  == 4) {
                localStorage.user1 = localStorage.accents3
            } else if (localStorage.conta  == 5) {
                localStorage.user1 = localStorage.accents4
            }
        } else if(localStorage.comment_N == 2) {
            localStorage.commentC2 = document.getElementById("comment_1").value
            if (localStorage.conta == 1) {
                localStorage.user2 = localStorage.accents
            } else if (localStorage.conta  == 2) {
                localStorage.user2 = localStorage.accents1
            } else if (localStorage.conta  == 3) {
                localStorage.user2 = localStorage.accents2
            } else if (localStorage.conta  == 4) {
                localStorage.user2 = localStorage.accents3
            } else if (localStorage.conta  == 5) {
                localStorage.user2 = localStorage.accents4
            }
        } else if(localStorage.comment_N == 3) {
            localStorage.commentC3 = document.getElementById("comment_1").value
            if (localStorage.conta == 1) {
                localStorage.user3 = localStorage.accents
            } else if (localStorage.conta  == 2) {
                localStorage.user3 = localStorage.accents1
            } else if (localStorage.conta  == 3) {
                localStorage.user3 = localStorage.accents2
            } else if (localStorage.conta  == 4) {
                localStorage.user3 = localStorage.accents3
            } else if (localStorage.conta  == 5) {
                localStorage.user3 = localStorage.accents4
            }
        }
        window.open("https://egdraconic.github.io/Mount Ulap/camp.html");
    }
    }
    
    document.getElementById("oUt").addEventListener("click", clicado_3)
    document.getElementById("Ok").addEventListener("click", clicado_4)
    document.getElementById("Post_1").addEventListener("click", Post)

}

function sair() {
    if (sair) {
        document.getElementById("login_2").style.display = "inline"
        document.getElementById("create_3").style.display = "inline"
        document.getElementById("USN").style.display = "none"
        document.getElementById("Out").style.display = "none"
        document.getElementById("image_S").style.display = "inline"
        document.getElementById("image_N").style.display = "none"
        localStorage.conta = 0
    }
}

function saindo() {
    if (saindo) {
        document.getElementById("login_2").style.display = "inline"
        document.getElementById("create_3").style.display = "inline"
        document.getElementById("usn").style.display = "none"
        document.getElementById("out").style.display = "none"
        localStorage.conta = 0

    }
}
    if (document.getElementById("Out") != null) {
        document.getElementById("Out").addEventListener("click", sair)
    }

    if (document.getElementById("out") != null) {
        document.getElementById("out").addEventListener("click", saindo)
    }
 if (document.getElementById("login") != null) {
    document.getElementById("login").addEventListener("click", logado)
 }
if (document.getElementById("body_1") != null) {
    document.getElementById("create").addEventListener("click", create)
}
