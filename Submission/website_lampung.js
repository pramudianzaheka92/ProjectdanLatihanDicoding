/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function FunctionPariwisata() {
    document.getElementById("DropdownPariwisata").classList.toggle("show-pariwisata");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) 
{
    if (!event.target.matches('.dropbtnpariwisata')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-pariwisata");
        var i;
        for (i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show-pariwisata")) 
            {
                openDropdown.classList.remove("show-pariwisata");
            }
        }
    }
}

function FunctionBudaya() {
    document.getElementById("DropdownBudaya").classList.toggle("show-budaya");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) 
{
    if (!event.target.matches('.dropbtnbudaya')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-budaya");
        var i;
        for (i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show-budaya")) 
            {
                openDropdown.classList.remove("show-budaya");
            }
        }
    }
}