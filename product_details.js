const product = document.getElementById("pro-d2");
const specifications = document.getElementById("spe-div");
const verified = document.getElementById("fe-div");
const verified2 = document.getElementById("fe-div2");

// let toggleProduct = false;

const openProductDetail = () => {
  product.style.display = "block";
  // If You want to make the button a switch
  //   toggleProduct = !toggleProduct;
  //   console.log(toggleProduct);
  //   if (toggleProduct) product.style.display = "block";
  //   else product.style.display = "none";
};

const openSpecifications = () => {
  specifications.style.display = "block";
};

const openVerifiedCustomerFeedback = () => {
  verified.style.display = "block";
  verified2.style.display = "block";
};
