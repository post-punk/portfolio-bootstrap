// function toggleGridList() {
//     var element = document.getElementsByClassName("portfolio-grid")[0];
//     element.classList.toggle("portfolio-list");
    
// }

var element = document.getElementsByClassName("portfolio-grid")[0];

function toggleList(){

      element.className = "portfolio-list"
}
function toggleGrid(){
  element.className = "portfolio-grid"
}
// element.className = "portfolio-grid"



// var element = document.getElementById("nenad");
// function toggleGrid(){

//       element.className = "grid"
// }
// function toggleList(){
//   element.className = "list"
// }

// element.className = "grid"





// function removeItems() {
//     var g = document.getElementsByClassName("grid-img")[3].remove()
// }



//function removeItemsExceptPrint() {
//    var allImages = document.getElementsByClassName("grid-img");
//    for (var i = 0; i < allImages.length; i++) {
//        allImages[i].style.display = "none";
//    }

//    var allPrintImages = document.getElementsByClassName("print");
//    for (var i = 0; i < allPrintImages.length; i++) {
//        allPrintImages[i].style.display = "block";
//    }
//}

//function removeItemsExceptWeb() {
//    var allImages = document.getElementsByClassName("grid-img");
//    for (var i = 0; i < allImages.length; i++) {
//        allImages[i].style.display = "none";
//    }

//    var allWebImages = document.getElementsByClassName("web");
//    for (var i = 0; i < allWebImages.length; i++) {
//        allWebImages[i].style.display = "block";
//    }
//}


function removeItems(imageCategory) {

    if (imageCategory == 'all') {
       var allImages = document.getElementsByClassName("grid-img");
       for (var i = 0; i < allImages.length; i++) {
           allImages[i].style.display = "block";
       }
       return;
    }



    var allImages = document.getElementsByClassName("grid-img");
    for (var i = 0; i < allImages.length; i++) {
        allImages[i].style.display = "none";
    }

    var selectedImages = document.getElementsByClassName(imageCategory);
    for (var i = 0; i < selectedImages.length; i++) {
        selectedImages[i].style.display = "block";
    }
}


//za tabove pod 'about'

function openContent(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





