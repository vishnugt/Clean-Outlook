function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function removeElementById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.parentNode.removeChild(element);
    }
}

function setDisplayStyleUsingElementById(id, styleValue) {
    if (document.getElementById(id)) {
        document.getElementById(id).style.display = styleValue;
    }
}

function setDisplayStyleUsingElementsByClass(className, styleValue) {
    var x = document.getElementsByClassName(className);
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = styleValue;
    }
}

// Variables to control
var recommendation = 'none';
var homeFeed = 'none';


function removeYoutubeElements() {

    //Home feed
    setDisplayStyleUsingElementsByClass("pBKjV", homeFeed);

    //Recommendations
    setDisplayStyleUsingElementsByClass("zCpRY", recommendation);
}

let observer = new MutationObserver((mutations) => {
    removeYoutubeElements();
})

observer.observe(document, {
    childList: true,
    subtree: true
})
