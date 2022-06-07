import React, { useState } from "react";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loadng/Loading";
import OrdersRow from "./OrdersRow";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  //react query
  
  const [total, setTotal] = useState(110);

//function for adding items to cart
  let handleCart = (item) => {
   
    setTotal(total + item.price);
  };
const navigate = useNavigate()
 
  

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://inventory-billing-app-server.herokuapp.com/order?email=${email}`).then(
      (res) => res.json()
      
    )
   
  );

  
  
  

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
    <div>
      <h2 className="text-3xl text-center font-bold mt-12 text-green-500 mb-3">
        My Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th onChange={()=>setTotal(total+orders.price)}>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, index) => (
              <OrdersRow
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
               
                    handleCart={handleCart}
              ></OrdersRow>
              
            ))}
             
                  <div className="col-lg-12 text-center">
                    <h6>Total:{total}</h6>
                  </div>
              
          </tbody>
        </table>
        
      </div>
      
    </div>
    
    <div>
      
    <button className="btn btn-lg" onClick={()=>navigate("/home")}>Pay</button>
  </div>
  </>
  );
};

export default MyOrders;
