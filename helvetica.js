// Formatted bookmarklet javascript for reference
javascript:(function(){
document.documentElement.innerHTML='%3Chead%3E%3Cmeta%20name=%22viewport%22%20content=%22width=device-width,%20initial-scale=1%22%3E%3C/head%3E%3Cbody%3EParsing...%3C/body%3E';

var callback=document.createElement('script');

callback.innerHTML='
  function%20readThis(data){
    var%20newHtml=%22%3Ch1%3E%22+data.title+%22%3C/h1%3E%22+data.content;

    var style=document.createElement(%22style%22),
        styleContent=document.createTextNode(%22
          @import url(http://fonts.googleapis.com/css?family=Merriweather);
          body{
            font-family:'Helvetica Neue', Helvetica, sans-serif;
            color:#555;
            background:#fff;
            font-size:1.25em;
            line-height:1.5;
            max-width:768px;
            margin:0 auto;
            padding:32px;
          }
          a{
            color:#08a;
            text-decoration:none;
        }%22);
    style.appendChild(styleContent);
    document.getElementsByTagName(%22head%22)[0].appendChild(style);

    document.body.innerHTML=newHtml;
}';

document.body.appendChild(callback);  

var apiCall = document.createElement('script');
var url = 'http://www.readability.com/api/content/v1/parser?url=' + window.location.href + '&token=73327f0bb61592fd2f86adb3ca7dcf2b2ae3501f&callback=readThis';
apiCall.src = url;
document.body.appendChild(apiCall);

})();
