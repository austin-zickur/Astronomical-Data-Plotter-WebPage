
// file arrow down function
var fileArrow = document.getElementById("f-arr");
var filebox = document.getElementById("f-box");

fileArrow.addEventListener("click", function(){
    // if box height is 25% change to 10% else change to 25%
    filebox.style.height = (filebox.style.height === "25%") ? "4%" : "25%";
    // if box height is 25% rotate arrow 90deg else rotate arrow 25deg
    fileArrow.style.rotate = (filebox.style.height === "25%") ? "90deg" : "-90deg";
    
});

