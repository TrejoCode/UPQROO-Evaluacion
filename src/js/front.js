/**
 * Name: Front.js
 * Description: Interactividad del sitio
*/


// Carga la fuenta de Google de manera asíncrona

WebFontConfig = {
    google: { families: ['Open Sans:400,600,700', 'sans-serif'] }
};
(function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();