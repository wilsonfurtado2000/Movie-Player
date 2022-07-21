import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../firebase";
import { selectUser } from "./app/features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
import "./PlansScreen.css";
function PlansScreen() {
  const user = useSelector(selectUser);
  const [products, setProducts] = useState([]);
  const [subscriptions, setSubscriptions] = useState(null);

  useEffect(() => {
    db.collection("customers")
      .doc(user.uid)
      .collection("subscriptions")
      .get()
      .then((snap) => {
        snap.forEach(async (subscription) => {
          setSubscriptions({
            role: subscription.data().role,
            curr_peroid_end: subscription.data().current_peroid_end.seconds,
            curr_peroid_start: subscription.data().current_peroid_start.seconds,
          });
        });
      });
  }, []);
  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_session")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.date();

      if (error) {
        alert(`An error occurred :${error.message} `);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51ItTdwSAfqeFeWnIogZNXiQvrnw6nPSLnb89o9PAeB1nZv6a3ClBemEPbIWdXDCVn7wAQcp3iipNEjGLgDuxUgCA00yKeEYbRa"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((snap) => {
        const products = {};
        snap.array.forEach(async (element) => {
          products[element.id] = element.data();
          const priceSnap = await element.ref.collection("prices").get();
          priceSnap.docs.forEach((doc) => {
            products[element.id].prices = {
              priceId: doc.id,
              priceDate: doc.data(),
            };
          });
        });
        setProducts(products);
      });
  }, [products]);

  return (
    <div className="plans_screen">
      {subscriptions && (
        <p>
          Renewal Date:
          {new Date(subscriptions?.curr_peroid_end * 1000).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(([productId, productData]) => {
        const currPackage = productData.name
          ?.toLowerCase()
          .includes(subscriptions?.role);

        return (
          <div className="plan_plan">
            <div className="plan_info">
              <h5>{productData.name}</h5>
              <h5>{productData.description}</h5>
            </div>
            <button
              onClick={() =>
                !currPackage && loadCheckout(productData.prices.priceId)
              }
            >
              {currPackage ? "Current Package" : "Subscribe"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
