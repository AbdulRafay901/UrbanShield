
fetch('components/sidebar.html')
    .then(response => response.text())
    .then(data =>{
        document.getElementById("sidebarComponent").innerHTML = data
}) 
 