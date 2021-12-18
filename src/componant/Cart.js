import { useState, useEffect } from "react";

export const Cart = () => {
  const [productsArray, setProductsArray] = useState([
    { name: "T-shirt", qty: 0, price: 100 },
    { name: "Jeans", qty: 0, price: 200 },
    { name: "Full Sleave T-shirt", qty: 0, price: 300 },
    { name: "Shorts", qty: 0, price: 400 },
    { name: "shirt", qty: 0, price: 500 },
    { name: "Chinos Trousers", qty: 0, price: 600 }
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  var [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    setTotalPrice(productsArray.reduce((r, t) => r + t.price * t.qty, 0));
    setTotalQty(productsArray.reduce((r, t) => r + t.qty, 0));
  }, [productsArray]);

  const handleClick = (index, qty) => {
    var chnageqty = [...productsArray];
    chnageqty[index] = { ...chnageqty[index], qty: qty };
    setProductsArray(chnageqty);
  };

  return (
    <div>
      <div>
        <h1>Cart</h1>
      </div>
      {productsArray?.map((item, i) => (
        <div key={i}>
          <h2>
            {item.name} = Price:{item.price} Qty:{item.qty}
          </h2>
          <div>
            <button onClick={() => handleClick(i, item.qty + 1)}>+</button>
            <button
              onClick={() =>
                item.qty != 0 ? handleClick(i, item.qty - 1) : null
              }
            >
              -
            </button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total item:{totalQty}</h2>
        <h2>total Amount:{totalPrice}</h2>
      </div>
    </div>
  );
};
