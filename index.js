const assetMenuIcon = document.querySelector(".asset-menu-icon");

assetMenuIcon.addEventListener("click", function(){
    const assetIconInner = document.getElementById("assetIconInner");
    if(assetIconInner.style.display === "none" || assetIconInner.style.display === ""){
        assetIconInner.style.display = "block";
    } else {
        assetIconInner.style.display = "none";
    }
});

const lendingText = document.querySelector(".lending-text");

lendingText.addEventListener("click", function(){
    const cancelBtn = document.getElementById("cancelBtn");
    const popupContainer = document.querySelector(".popup-container");
    if(popupContainer.style.display === "none" || popupContainer.style.display === "") {
        popupContainer.style.display = "block";
    }
    cancelBtn.addEventListener("click", function(){
        popupContainer.style.display = "none";
    })
})

document.addEventListener('DOMContentLoaded', function () {
    // Select all images with the class 'toggle-image'
    const menuIcon = document.querySelectorAll('.menu-icon');

    // Add click event listener to each image
    menuIcon.forEach(menubtn => {
        menubtn.addEventListener('click', function () {
            // Toggle the 'show' class on the next sibling (the menu div)
            const menuIconInner = this.nextElementSibling;
            menuIconInner.classList.toggle('show');
        });
    });
});

const downArrow = document.getElementById("downArrow");
downArrow.addEventListener("click", function(){
    downArrow.classList.toggle("down-arrow");
})