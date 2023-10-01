// # Random Sayıyı Tahmin Etme Oyunu 

// 0 ile 100 arasında bilgisayar random bir sayı üretecek. Kullanıcı sayı girecek ve bilgisayar 
// sayıyı arttır veya azalt diye uyarı verecek bu 5 kere tekrarlanacak ve 100 üzerinden bildiğin tahmine göre 
// puan verilecek en sona bilgisayar random sayıyı ekrana yazdıracak.!!!!!!!

               
                var i, p, t, r, z;
                var y, a, b, c, k ;
                var x = (Math.floor(Math.random()*101));
               
                function tahmin(x){
        
               
                
        
                for(var i=1 ; i<=1 ; i++){
        
                     y = prompt(" sayı değeri giriniz")
        
                    if(y<x){
                       alert("sayı değerini arttırın")
                    }
                    else if (y>x){
                        alert("sayı değerini azaltın" )
                    }
                    else{
                        alert("1 tahminde bildiniz" )
                         alert("puanımız =80")
                    }
                   
                }
        
        
        
                for(var p=1 ; p<=1 ; p++){
        
                    a = prompt("  sayı değeri giriniz");
                
        
                if(a<x){
                   alert("sayı değerini arttırın" )
                }
                else if (a>x){
                    alert("sayı değerini azaltın" )
                }
                else{
                    alert("2 tahminde bildiniz" )
                    alert("puanımz =60")
                }
        
        
            }
        
        
        
        
        
                for(var t=1 ; t<=1 ; t++){
        
               b = prompt(" sayı değeri giriniz")
                
        
                if(b<x){
                    alert("sayı değerini arttırın" )
                }
                else if (b>x){
                    alert("sayı değerini azaltın")
                }
                else{
                    alert("3 tahminde bildiniz" )
                           alert("puanımz =40")
        
                }
        
        
            }
        
        
        
        
        
        
                for(var r=1 ; r<=1 ; r++){
        
                c = prompt(" sayı değeri giriniz")
                
        
                if(c<x){
                    alert("sayı değerini arttırın")
                }
                else if (c>x){
                    alert("sayı değerini azaltın" )
                }
                else{
                    alert( "4 tahminde bildiniz" )
                    alert( "puanımz= 20")
                }
        
                
        
            }
        
        
        
        
        
                for(var z=1 ; z<=1 ; z++){
        
                k = prompt(" sayı değeri giriniz")
                
        
                if(k<x){
                    alert("sayı değerini arttırın" )
                }
                else if (k>x){
                    alert("sayı değerini azaltın")
                }
                else{
                    alert("5. tahminde bildiniz" )
                     
                }
        
               alert("puanımız = 0" )
        
                }
            }
        
                document.write("sayı = " + x);
        
                tahmin(x)