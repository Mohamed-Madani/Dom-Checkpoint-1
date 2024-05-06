// ITEM 1
let price = document.getElementById('price');
let total = document.getElementById('total');
let qt = document.getElementById('total');
let moins = document.getElementById('moins');
let plus = document.getElementById('plus');
let item = document.getElementById('item');
let soldeTotal = document.getElementById('allprice');


     qtBtc =0
     priceBtc = 62.869
     soldeBtc = 0

     plus.addEventListener('click', () =>{
          qtBtc++;
          qtBtc= (qtBtc<10)? "0" + qtBtc : qtBtc;
          qt.innerHTML=qtBtc;
          soldeBtc = qtBtc * priceBtc;
          soldeTotal.innerHTML = qtBtc * priceBtc;
     })
     
     moins.addEventListener('click', () =>{
          if(qtBtc> 0){
               qtBtc--;
               qtBtc= (qtBtc<10)? "0" + qtBtc : qtBtc;
               qt.innerHTML=qtBtc;
               soldeBtc = qtBtc * priceBtc;
               soldeTotal.innerHTML = soldeBtc + soldeAda + soldeEth
          }

     })

     function supp(){
          item.remove();
          soldeTotal.innerHTML = soldeAda + soldeEth
     }

     // ITEM 2
let price1 = document.getElementById('price1');
let total1 = document.getElementById('total1');
let qt1 = document.getElementById('total1');
let moins1 = document.getElementById('moins1');
let plus1 = document.getElementById('plus1');
let item1 = document.getElementById('item1');

     qtEth=0
     priceEth = 3.176,70
     soldeEth = 0
     plus1.addEventListener('click', () =>{qtEth++;
          qtEth= (qtEth<10)? "0" + qtEth : qtEth;
          qt1.innerHTML=qtEth;
          soldeEth = qtEth * priceEth;
          soldeTotal.innerHTML = soldeBtc + soldeEth
     })
     
     moins1.addEventListener('click', () =>{
          if(qtEth > 0){
               qtEth--;
               qtEth= (qtEth<10)? "0" + qtEth : qtEth;
               qt1.innerHTML=qtEth;
               soldeEth = qtEth * priceEth;
               soldeTotal.innerHTML = soldeAda + soldeEth + soldeBtc
          }

     })



     function supp1(){
          item1.remove();
          soldeTotal.innerHTML = soldeAda + soldeBtc
     }

     // ITEM 2
let price2 = document.getElementById('price2');
let total2 = document.getElementById('total2');
let qt2 = document.getElementById('total2');
let moins2 = document.getElementById('moins2');
let plus2 = document.getElementById('plus2');
let item2 = document.getElementById('item2');

     qtAda=0
     priceAda = 0.46
     soldeAda = 0
     plus2.addEventListener('click', () =>{qtAda++;
          qtAda= (qtAda<10)? "0" + qtAda : qtAda;
          qt2.innerHTML=qtAda;
          soldeAda = qtAda * priceAda;
          soldeTotal.innerHTML = soldeAda + soldeEth + soldeBtc
          
     })
     
     moins2.addEventListener('click', () =>{
          if(qtAda > 0){
               qtAda--;
               qtAda= (qtAda<10)? "0" + qtAda : qtAda;
               qt2.innerHTML=qtAda;
               soldeAda = qtAda * priceAda;
               soldeTotal.innerHTML = soldeAda + soldeEth + soldeBtc
          }

     })

     function supp2(){
          item2.remove();
          soldeTotal = soldeBtc + soldeEth
     } 


let heart = document.getElementById('heart');
let heart1 = document.getElementById('heart1');
let heart2 = document.getElementById('heart2');

heart.addEventListener('click', () =>{
     heart.style.backgroundColor = '#6E56CF'
})
heart1.addEventListener('click', () =>{
     heart1.style.backgroundColor = '#6E56CF'
})
heart2.addEventListener('click', () =>{
     heart2.style.backgroundColor = '#6E56CF'
})