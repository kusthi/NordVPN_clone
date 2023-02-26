let prevTabSelector = '.youtube-tab';
let prevContentContainerSelector = 'reviews-container';
let bottomBorderID = 'default-border-bottom';
let noDisplayClass = 'no-display';

function toggleContent(selector) {
    var contentElement = document.getElementById(selector)
    contentElement.style.display = (contentElement.style.display != "block") ? "block" : "none"
}

function removeId(selector) {
    document.querySelector(selector).removeAttribute('id');
}

function toggleDisplayContainers(prevSelector, activeSelector) {
    var prevContentElement = document.getElementsByClassName(prevSelector);
    var activeContentElement = document.getElementsByClassName(activeSelector);
    prevContentElement[0].classList.toggle(noDisplayClass);
    activeContentElement[0].classList.toggle(noDisplayClass);
    setTimeout(function(){ 
        activeContentElement[0].style.opacity = '1'; //wait for html to render after toggling the display prop
      }, 100);  
    prevContentElement[0].style.opacity = '0';  
}

function addBottomBorder(tabSelector, contentContainerSelector) {
    removeId(prevTabSelector); //to remove bottom border
    document.querySelector(tabSelector).id = bottomBorderID; 
    prevTabSelector = tabSelector;
    toggleDisplayContainers(prevContentContainerSelector, contentContainerSelector);
    prevContentContainerSelector = contentContainerSelector;
}

function toggleDropDownContent(selector, dropDownArrowSelector) {
    var arrowElement = document.getElementById(dropDownArrowSelector);
    let rotateDeg = (arrowElement.style.rotate != '0.5turn') ? '0.5turn' : '0turn';
    arrowElement.style.rotate = rotateDeg;
    var contentElement = document.getElementById(selector);
    let mheight = contentElement.style.maxHeight;
    mheight = (mheight != '500px') ? '500px' : '0';
    if (mheight != '0') 
    {
        setTimeout(function(){ 
            contentElement.style.marginTop = '10px';
            contentElement.style.maxHeight = mheight; 
        }, 100); 
        toggleContent(selector);
    }
    setTimeout(function(){ 
        contentElement.style.opacity = (contentElement.style.opacity != '1') ? '1' : '0';
    }, 100); 
    if (mheight == '0')
    {
        contentElement.style.maxHeight = mheight;
        contentElement.style.marginTop = '0';
        setTimeout(function(){ 
            toggleContent(selector); //wait for max-height transition-duration to complete
        }, 1000);    
    }
}
