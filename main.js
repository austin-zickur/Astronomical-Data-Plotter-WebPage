
var fileArrow = document.getElementById("f-arr");
var filebox = document.getElementById("f-box");

var upload = document.getElementById("upload");
var files = document.getElementById("file-inp");

var scrollFile = document.getElementById("scroll-file");
var uploadText = document.getElementById("up-txt");
var mainScreen = document.getElementById("screen");

var upMore = document.getElementById("up-more");
var inpWrap = document.getElementById("inp-wrap");
var nameFi = document.getElementById("filename");


var fileList = [];

//Blue background when clicked
function addActiveClass(file){
    for(const d of file){
        d.addEventListener("click", function(){
            file.forEach((el) => el.classList.remove('active-file'));
            d.classList.add('active-file');
           //d.classList.toggle('active-file')
        });
    };
}

//Display function 
function displayFile(file){

    for(const f of file){    
        f.addEventListener("click", function(){
            // DISPLAY FILE NAME AREA
            // REMOVE INPUT AREA
            // DISPLAY 'Upload More Files'
            nameFi.style.display = "block"
            inpWrap.style.display = "none"
            upMore.style.display = "block"
            //POPULATE FILE NAME
            nameFi.innerHTML = f.innerText;      
        });
    }};

/* DISPLAY INPUT AREA WHEN 'Upload More Files' IS CLICKED */
upMore.addEventListener("click", function(){
    //DISPLAY INPUT AREA
    // REMOVE FILE NAME AREA
    inpWrap.style.display = "flex"
    nameFi.style.display = "none"
})

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
        
        if(!fileList.includes(file.name)){
            scrollFile.insertAdjacentHTML("afterbegin", fileDiv);
            fileList.push(`${file.name}`);
            console.log(fileList.reverse());
        }else{
            continue;
        };
        //DEBUG
        console.log(`${file.name}`);
    };

    var fileCont = document.querySelectorAll(".file-cont")
    addActiveClass(fileCont)
    displayFile(fileCont)
    //CLEAR the FILE INPUT AFTER UPLOAD
    files.value = null;
    
    if (scrollFile.childElementCount > 1 ){
        uploadText.style.display = "none";
    };

});








