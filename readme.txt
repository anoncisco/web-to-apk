/*!
 * iCORE Library v2.3  - Javascript magnifier
 * http://www.VariousNetwork.com
 * Copyright 2016, iCORE Fanatixx
 * Code: Aming W. Widonno
 * Re-Coded and updating Library v2.2.2
 * Coder URI: http://aming.id/
 * Jogja, March 03, 2017
 */

Script ini digunakan jika kamu pengin memaksimalkan ketersediaan aplikasi Android kamu;
Misal, website kamu udah memiliki aplikasi berbasis Android, sedangkan kunjungan ke website kamu kebanyakan melalui smartphone Android, mau gag mau kamu juga musti ngikutin trend dong biar gag ketinggalan, yo nggak?!

Nah, sialnya, ketika kamu udah susah² build aplikasi Androidnya atau bahkan membeli jasa Android Developer tapi aplikasi tersebut dikit banget yang donwload, maka kamu perlu untuk memaksimalkannya, caranya kurang lebih ya memaksa pengunjung web/blogmu untuk mendownload aplikasi dan menginstalnya;

Script ini juga bisa digunakan untuk memaksimalkan Cost Per Install jika kamu monetizing website kamu dengan CPI misal seperti UC Union, EcoMobile dll.

How To;
1. Upload file redirect.js di host, lebih baik satu host dengan website.
2. Upload file .APK-nya di host (path folder sesuaikan) bisa juga URL aplikasi di Google Play.
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

Happy thinkering!
AMING.id™
