// # Kullanıcıdan Girilen 10 Nota Göre Geçme - Kalma Ve Ortalamanın Bulunması

var toplamnot = 0;
        var ortalama;

        for (i=0 ; i<10 ; i++){
            var x = prompt(" Bir not değeri giriniz =")
            toplamnot += parseInt(x) ;
        }
        document.write(toplamnot)

        ortalama = parseInt(toplamnot / 10) ;

        if(ortalama>=50){
            document.write("**DERSTEN GEÇTİNİZ**")
        }
        else{
            document.write("**DERSTEN KALDINIZ**")
        }

        document.write("<br>" + "DÖNEM ORTALAMANIZ ==>" + ortalama)