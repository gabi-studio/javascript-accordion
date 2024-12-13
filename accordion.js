

function accordionToggle(target){
    console.log("open");
    console.log(target);

//create a reference to an element with the
// same name as the target variable


    // whatever is visible, hide it before opening one
    // use the class name
    
    var hideDivs = document.getElementsByClassName("accordion-section");
    //loop through each section
    for(var i=0; i<hideDivs.length; i++){
        //hide each section
        hideDivs[i].style.display = "none";
    }

    
    var content = document.getElementById(target); // it was hardcoded at section-1, but now it will apply to any target
    
    
    // check if the content is currently displayed
    if(content.style.display === "block"){
        //hide the content
        content.style.display="none";
    } else{
        //otherwise display it
        content.style.display ="block";
    }

}
