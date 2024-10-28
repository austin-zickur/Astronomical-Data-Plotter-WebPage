
var fileArrow = document.getElementById("f-arr");
var filebox = document.getElementById("f-box");

var upload = document.getElementById("upload");
var files = document.getElementById("file-inp");

var scrollFile = document.getElementById("scroll-file");

// file arrow down function
fileArrow.addEventListener("click", function(){
    // if box height is 25% change to 10% else change to 25%
    filebox.style.height = (filebox.style.height === "25%") ? "4%" : "25%";
    // if box height is 25% rotate arrow 90deg else rotate arrow 25deg
    fileArrow.style.rotate = (filebox.style.height === "25%") ? "90deg" : "-90deg";
    scrollFile.style.height = (filebox.style.height === "25%") ? "80%" : "0";


});

upload.addEventListener("click", function(){
   for (const file of files.files) {
        var fileDiv = `
        <div class="file-cont center">
        <img src="images/icons8-file-48.png">
        <p>${file.name}<p>
        </div>`
        
        scrollFile.insertAdjacentHTML("afterbegin", fileDiv)
        
        console.log(`${file.name}`);
    
    };
    
})


