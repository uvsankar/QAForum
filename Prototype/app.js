require('css!./Vendor/css/sb-admin-2.css')

require('./Vendor/metisMenu.js')
require('./Vendor/sb-admin-2.js')


angular   = require('angular')
sanitize  = require('angular-sanitize')

vendors = [
  {
  id :'fontCss',
  url : 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'
}, {
  id : 'bootCss',
  url : 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
}]

loader = (arr) =>{
  arr.forEach((url)=>{
    if (!document.getElementById(url.id))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = url.id;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url.url;
        link.media = 'all';
        head.appendChild(link);
    }
  })
}
  loader(vendors)

angular.module('qaPlugin',['ngSanitize'])
require('./controllers.js')
require('./components.js')
