
var fileArrow = document.getElementById("f-arr");
var filebox = document.getElementById("f-box");

var upload = document.getElementById("upload");
var files = document.getElementById("file-inp");

var scrollFile = document.getElementById("scroll-file");
var uploadText = document.getElementById("up-txt");

/* FILE ARROW DOWN FUNCTION */
fileArrow.addEventListener("click", function(){
    // if box height is 25% change to 10% else change to 25%
    filebox.style.height = (filebox.style.height === "25%") ? "4%" : "25%";
    // if box height is 25% rotate arrow 90deg else rotate arrow 25deg
    fileArrow.style.rotate = (filebox.style.height === "25%") ? "90deg" : "-90deg";
    scrollFile.style.height = (filebox.style.height === "25%") ? "80%" : "0";
});

 /* UPLOAD FUNCTION */
 upload.addEventListener("click", function(){
    //CREATE IN ELEMENT IN FILE BOX FOR EACH FILE UPLOADED
    for (const file of files.files) {
        var fileDiv = `
        <div class="file-cont center">
        <img src="images/icons8-file-48.png">
        <p>${file.name}<p>
        </div>`;
        
        scrollFile.insertAdjacentHTML("afterbegin", fileDiv)
        //DEBUG
        console.log(`${file.name}`);
    };
    //CLEAR the FILE INPUT AFTER UPLOAD
    files.value = null;
    console.log(scrollFile.childElementCount);
    if (scrollFile.childElementCount > 1 ){
        uploadText.style.display = "none";
    };
});



