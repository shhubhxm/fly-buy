import React from 'react'
import './Orders.css'
function Orders() {
    return (
        <div className="orders">
			<div className="orders__container">
				<div className="orders__title">
					<h3>Your Orders</h3>
				</div>

				<div className="orders__order">

					{/* {orders.length === 0 && ( */}
						<div className="checkout__main">
							<img
								className="checkout__image"
								src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
							/>
							<h3 className="checkout__emptyCart">You have no orders</h3>
						</div>
					{/* )} */}

					{/* {orders?.map((order) => (
						<Order order={order} />
					))} */}
				</div>
			</div>
		</div>
    )
}

export default Orders
