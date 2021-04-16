import React from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";

function Payment() {
    const [{ user, basket }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">

                {/* item review and delivery */}

                <div className="payment__left">
                    <div className="payment__left__title">
                        <h3>
                            Review Items and Delivery | <span>{basket?.length} items</span>
                        </h3>
                    </div>

                    <div className="payment__items">
                        {basket.length === 0 && (
                            <div className="checkout__main">
                                <img
                                    className="checkout__image"
                                    src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                                />

                                <h3 className="checkout__emptyCart">
                                    You have no orders to review
								</h3>
                            </div>
                        )}

                        {basket.map((item) => (
                            <div className="checkout__product">
                                <CheckoutProduct
                                    index={0}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* delivery address and payment method */}

                <div className="payment__right">

                    {/* delivery address */}

                    {user !== null && (
                        <div className="payment__right__top">
                            <div className="payment__right__title">
                                <h3>Delivery Address</h3>
                            </div>
                            <div className="payment__right__address">
                                <p>
                                    <strong>Email: </strong>
                                    {user?.email}
                                </p>
                                <p>
                                    <strong>Street: </strong>123 Rawanda Lane
								</p>
                                <p>
                                    <strong>State: </strong>Addis Ababa, ET
								</p>
                            </div>
                        </div>
                    )}

                    {/* payment method */}

                    <div className="payment__right__bottom">
                        <div className="payment__right__title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__right__details">
                            <form >
                                <div className="payment__right__details__priceContainer">
                                    {/* <CardElement
										className="payment__card"
										onChange={handleChange}
									/> */}

                                    {/* <CurrencyFormat
										renderText={(value) => (
											<p>
												<strong>Order Total: {value}</strong>
											</p>
										)}
										decimalScale={2}
										value={getBasketTotal(basket)}
										displayType={"text"}
										thousandSeparator={true}
										prefix={"$"}
									/> */}
                                    <button
                                        className="payment__button"
                                    // disabled={processing || disabled || succeeded}
                                    >
                                        <span><strong>{"Buy Now"}</strong></span>
                                    </button>
                                </div>

                                {/* {error && <div>{error}</div>} */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
