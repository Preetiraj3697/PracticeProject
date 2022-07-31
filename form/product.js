
let cartLS=JSON.parse(localStorage.getItem("Products"))||[];
let container=document.getElementById("container");


function Display(){
container.innerHTML=null;
cartLS.forEach(function(ele,index){
    let product=document.createElement("div");
    let img=document.createElement("img");
    img.src=ele.image;
    let head=document.createElement("h3");
    head.textContent=ele.name;
    let price=document.createElement("h4");
    price.textContent=ele.Price;
    let category=document.createElement("p");
    category.textContent=ele.category;
    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete"
    deleteBtn.addEventListener("click",function(){
      DeleteCart(index);
    })
    let BuyBtn=document.createElement("button");
    BuyBtn.textContent=ele.sold;
    if(BuyBtn.textContent==="False"){
        BuyBtn.style.backgroundColor="green"
    }else{
        BuyBtn.style.backgroundColor="red";
    }
    product.append(img,head,price,category,deleteBtn,BuyBtn)
    container.append(product);
    
});
}

Display(cartLS);

function DeleteCart(index){
  let deletedCart= cartLS.filter(function(el,i){
     return i != index;
   })
   Display(deletedCart);
   localStorage.setItem("Products",JSON.stringify(deletedCart))
}
