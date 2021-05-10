# fly-buy
 e-commerce website using React, Firebase, and Stripe payment API. 

## Homepage
The home page is simple which contains products which can be added to the basket once added the counter in the header(Basket) will increase.

<span style="display:block;text-align:center">![](amazon-clone/images/home_page.png)</span>

## Loginpage
The login page is has two option signup and login. I have used Firebase auth for the login and signup.

<span style="display:block;text-align:center">![](amazon-clone/images/login.png)</span>

## Subtotal
After adding our Beats Headphone to the basket it will be displayed in the subtotal along with the total. You can remove your item product if you want proceeding further.

<span style="display:block;text-align:center">![](amazon-clone/images/subtotal.png)</span>

## Order
In order you can review your items and delivery. Delivery address along with payment method is given.

<span style="display:block;text-align:center">![](amazon-clone/images/order.png)</span>

You can enter the test card number provided by stripe in the card number.

<span style="display:block;text-align:center">![](amazon-clone/images/stripe_test_card.png)</span>

Before clicking on buy now it will process and backend will generate a secret key in the console. The seceret key will be unique and will change when items in the basket are changed.

<span style="display:block;text-align:center">![](amazon-clone/images/secret_key.png)</span>

Inside my vscode terminal the request along with successful payment is displayed

<span style="display:block;text-align:center">![](amazon-clone/images/stripe_request_terminal.png)</span>

## Orders (After Payment)
After the payment is successful it will take you to the orders page showing you do not have any futher orders.

<span style="display:block;text-align:center">![](amazon-clone/images/after_payment.png)</span>

## Stripe
After the payment of the Beats Headphone went through, my stripe page will display the amount that is recieved.

<span style="display:block;text-align:center">![](amazon-clone/images/stripe_home.png)</span>

You can see inside stripe payments the last entry[may 10th], the payment of the beats headphone [₹25,900] is recieved.

<span style="display:block;text-align:center">![](amazon-clone/images/stripe_payment_page.png)</span>



