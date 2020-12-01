// "DOMContentLoaded" – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may not yet have loaded.
// "load" – not only HTML is loaded, but also all the external resources: images, styles etc.
// "beforeunload"/"unload" – the user is leaving the page.


let log=console.log; 



// 1-DOMContentLoaded
document.addEventListener('DOMContentLoaded', function(){
    log('html DOM loaded ');
});



// 2- load => it is attached to window 
// hint : in the browser this function gets executed after the above one not because it is written secendly
//but because the event happens after the above one
window.onload =function(){
    log('external resourses[imgs , vids ] loaded');
};



//you can also check loading page and its resourses via document.readyState
// The document.readyState property tells us about the current loading state.

// There are 3 possible values:

// "loading" – the document is loading.
// "interactive" – the document was fully read.
// "complete" – the document was fully read and all resources (like images) are loaded too.
document.addEventListener('readystatechange', () => log('readyState:' + document.readyState));

