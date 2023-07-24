// update custo price
function customizedCost(customcategory,customprice){
    const CostBtn = document.getElementById(customcategory+'-cost-btn');
   
    CostBtn.innerText=customprice;
    
    
}
// customized Cost part and total part
function totalCost(){
    
      

const totalPrice =document.getElementById('total-price');
const delivery=document.getElementById('delivery-cost-btn').innerText;
const storage=document.getElementById('storage-cost-btn').innerText;
const memory=document.getElementById('memory-cost-btn').innerText;
    totalPrice.innerText=parseInt(delivery)+parseInt(storage)+parseInt(memory)+1299;
const total=document.getElementById('total');
total.innerText=totalPrice.innerText;
return total.innerText;
}

// custoized button click part


document.getElementById('memory-btn-2').addEventListener('click',function(){
    customizedCost('memory',180,'memory-btn-2'); 
    totalCost();
    
    
})
document.getElementById('memory-btn-1').addEventListener('click',function(){
    customizedCost('memory',0);
    totalCost();
    

})
document.getElementById('storage-btn-1').addEventListener('click',function(){
    customizedCost('storage',0);
totalCost();
    
    
})
document.getElementById('storage-btn-2').addEventListener('click',function(){
    customizedCost('storage',100);
    totalCost();
    
})
document.getElementById('storage-btn-3').addEventListener('click',function(){
    customizedCost('storage',180);
    totalCost();
    
})
document.getElementById('delivery-btn-1').addEventListener('click',function(){
    customizedCost('delivery',0);
    totalCost();
    
})
document.getElementById('delivery-btn-2').addEventListener('click',function(){
    customizedCost('delivery',20);
    totalCost();
    
})

// 20% discount promocode verification part
document.getElementById('apply').addEventListener('click',function(){
    const input=document.getElementById('input');
    const cost=totalCost();
    if(input.value=='stevekaku'){
        const total=document.getElementById('total');
        total.innerText=cost-cost*.20; 
    }
    else{
        total.innerText=cost; 
    }
    input.value=''; 
})


