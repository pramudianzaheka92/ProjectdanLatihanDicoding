/* Membuat fungsi untuk menampung menu dropdown yang ada di html, tepatnya fungsi ini dibuat untuk menu pariwisata
karena di menu tersebut terdapat sub-menu seperti konten tentang pantai pasir putih, way kambas, dan pulau pahawang */
function FunctionPariwisata() {
    document.getElementById("DropdownPariwisata").classList.toggle("show-pariwisata");
}

/* Membuat fungsi untuk menampung menu dropdown yang ada di html, tepatnya fungsi ini dibuat untuk menu budaya
karena di menu tersebut terdapat sub-menu seperti konten tentang tapis lampung dan seni tari sigeh pengunten */
function FunctionBudaya() {
    document.getElementById("DropdownBudaya").classList.toggle("show-budaya");
}


/* Event untuk kedua menu dropdown yaitu menu pariwisata dan budaya. 
Jadi jika user meng-klik salah satu dari sub menu atau meng-klik 
diluar dropdown maka dropdown akan tertutup secara otomatis */
window.onclick = function(event) {

    /* Event untuk button menu pariwisata yang didalamnya terdapat konten tentang pasir putih, 
    way kambas, dan pulau pahawang. Jadi jika salah satu sub-menu diklik maka dropdown akan menutup */
    if (!event.target.matches(".dropbtnpariwisata")) {
        let dropdownspariwisata = document.getElementsByClassName("dropdown-pariwisata");
        let i;
        for (i = 0; i < dropdownspariwisata.length; i++) {
            let openDropdownPariwisata = dropdownspariwisata[i];
            if (openDropdownPariwisata.classList.contains("show-pariwisata")) {
                openDropdownPariwisata.classList.remove("show-pariwisata");
            }
        }
    }

    /* Event untuk button menu budaya yang didalamnya terdapat konten tentang tapis lampung, 
    dan seni tari sigeh pengunten. Jadi jika salah satu sub-menu diklik maka dropdown akan menutup */
    if (!event.target.matches(".dropbtnbudaya")) {
        let dropdownsbudaya = document.getElementsByClassName("dropdown-budaya");
        let i;
        for (i = 0; i < dropdownsbudaya.length; i++) {
            let openDropdownBudaya = dropdownsbudaya[i];
            if (openDropdownBudaya.classList.contains("show-budaya")) {
                openDropdownBudaya.classList.remove("show-budaya");
            }
        }
    }
}