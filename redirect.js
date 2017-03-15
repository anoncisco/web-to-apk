/*!
 * iCORE Library v2.3  - Javascript magnifier
 * http://www.VariousNetwork.com
 * Copyright 2016, iCORE Fanatixx
 * Code: Aming W. Widonno
 * Re-Coded and updating Library v2.2.2
 * Coder URI: http://aming.id/
 * Jogja, March 03, 2017
 */
var icoreRedirect = {
    url : '',
    alertFrequency: 'always',
    init: function(options){
        this.url = options.url;
        this.alertFrequency = options.alertFrequency;
        return this;
    },
    redirectPage: function(){
        if(this.isOpenedOnMobileDevice() && this.isSiteHasIcoreApp() && this.isAbleToRedirect()){
            this.promtRedirectBox();
        }
        this.updateCookie();
        return this;
    },
    isOpenedOnMobileDevice: function(){
        userAgent = navigator.userAgent.toLowerCase();
        if(userAgent.match('android')){
            return true;
        }
        return false;
    },
    isSiteHasIcoreApp: function(){
        if(this.url != ''){
            return true;
        }
        return false;
    },
    isAbleToRedirect: function(){
        if(!this.getCookie('icoreShowAlert')){
            return true;
        }
        return false;
    },
    promtRedirectBox: function(){
        if (confirm("We have Android App! Install our App for better browsing.")){
            window.location.href = this.url;
        }  
    },
    updateCookie: function(){
        var days = 1;
        if(this.alertFrequency == "always"){
            days = -1;
        }
        if(this.alertFrequency == "once"){
            days = 30;
        }
        if(this.alertFrequency == "onceaweek"){
            days = 7;
        }
        this.setCookie("icoreShowAlert", true, days);
    },
    setCookie: function (c_name,value,exdays)
    {
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
    },
    getCookie: function (c_name)
    {
        var i,x,y,ARRcookies=document.cookie.split(";");
        for (i=0;i<ARRcookies.length;i++)
        {
            x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
            y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
            x=x.replace(/^\s+|\s+$/g,"");
            if (x==c_name)
            {
                return unescape(y);
            }
        }
        return null;
    }
}
