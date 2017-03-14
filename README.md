# web-to-apk
/*!
 * iCORE Library v2.3  - Javascript magnifier
 * http://www.VariousNetwork.com
 * Copyright 2016, iCORE Fanatixx
 * Coder: Aming W. Widonno
 * Re-Coded and updating of Library v2.2
 * Coder URI: http://aming.id/
 * Jogja, 03 March 2017
 */

How To;
1. Upload file redirect.js di host, lebih baik satu host dengan website.
2. Upload file .APK-nya di host (path folder sesuaikan).
3. Upload file redirect.js (path folder sesuaikan).
3. Paste-kan script dibawah ini bisa ditaruh di header sebelum </head> atau footer sebelum tutup tag </body>, 

<script type="text/javascript" src="http://www.domain.com/path/redirect.js"></script>
<script type="text/javascript">
    icoreRedirect.init({
        url: "http://www.domain.com/path/file_dot_APK",
        alertFrequency: "once"
    }).redirectPage();
</script>

4. Script diatas tersebut men-setup hanya 1 (satu) kali warning untuk tiap IP/user visits. 
Jika ingin diganti agar setiap kali user dgn IP yg sama diberikan warning bahwa kita memiliki APK maka merubah 
alertFrequency: "once" menjadi alertFrequency: "always" 
Jika ingin alert seminggu sekali maka dirubah menjadi alertFrequency: "onceaweek" 

\m/
Happy Coding

AMING.id™
