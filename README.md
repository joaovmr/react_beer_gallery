The purpose of this project is to train React skills.

All the data was fetched from the punkAPI. I do not own any of it.
This is their documentation website: https://punkapi.com/documentation/v2

The project consist in a beer catalog where you can buy any of the fetched beers.
The price and quantity was not originally present in the data object so i did a math just to simulate it.

Quantity is given by floor of ph * 20
Price is given by floor of (ibu * 30)/2

The shopping cart icon will open a modal displaying the beers that you added to the cart. 
It is shown the total price of the cart and each beer have its own quantity that can be changed.
Inside the modal, if you click on buy, you will go to the checkout page where you can see the list of itens that was in the cart.
If you finish the purchase in the checkout page, the cart will be cleaned and you'll be back to Home page