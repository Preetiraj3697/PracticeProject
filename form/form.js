function Products(n,c,i,p,g,s){
  this.name=n;
  this.category=c;
  this.image=i;
  this.price=p;
  this.gender=g;
  this.sold=s;
}








function storeData(e){
  e.preventDefault()
  let form=document.getElementById("product_form");
  let name= form.name.value;
  let category =form.category.value;
  let image =form.image.value;
  let price =form.price.value;
  let gender =form.gender.value;
  let sold =form.sold.value;

  let product1= new Products(name,category,image,price,gender,sold)
  //1.console.log(name,category,image,price,gender,sold)
  //2.console.log(product1)
  let data=JSON.parse(localStorage.getItem("Products"))||[];
  data.push(product1);
  localStorage.setItem("Products",JSON.stringify(data))
}


