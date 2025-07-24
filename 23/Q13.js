const checkout = {
  items: [],
  total: 0,
  
  addItem(item) {
    const priceNum = Number(item.price);
    if (typeof item !== "object" ||typeof item.name !== "string" ||!item.name.trim() ||isNaN(priceNum) ||
      priceNum < 0
    ) {
      console.error("Invalid item or price.");
      return false;
    }
    this.items.push({ ...item, price: priceNum }); 
    this.total = total + priceNum;
    return true;
  },

  getTotal() {
    return `Total: rs ${this.total.toFixed(2)}`;
  }
};

checkout.addItem({ name: "Coffee Maker", price: "99.95" }); 
checkout.addItem({ name: "Milk", price: 3.50 });            
checkout.addItem({ name: "Invalid", price: "abc" });       

console.log(checkout.getTotal()); 

console.log(checkout.items);

