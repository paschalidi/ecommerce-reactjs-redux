# ecommerce-reactjs-redux

### Boilerplate used for this project 
A very simple [React-BoilerPlate](https://github.com/react-boilerplate/react-boilerplate) 
is being used for this project.
Note that I have removed sagas, reselect and i18n from this boilerplate in order to keep things simple.


### Getting Started
Instruction for cloning, installing dependencies and running the server locally.
```
	> git clone https://github.com/paschalidi/ecommerce-reactjs-redux.git <your-folder-name>
	> cd <your-folder-name>
	> yarn install
	> yarn start
```
### Simple explanation of the implementation.

Containers :
  * ShoppingCardRenderer : takes the redux state of the dummy data and generated each shopping card that the store contains(meaning the 8 items that are being in sale.)
    * ShoppingCard :  dispatches the action ADD_ITEM 
                      that is being responsible for calling the action creator addItem(item).
                      addItem(item) is connected to the reducer that keeps track of all the data that are 
                      inside the basket. (we are gonna refer to this state as BasketCardReducer).
    
  * BasketCardRenderer : takes the redux state of all the items that are being added into the basket (meaning the BasketCardReducer state)
    * BasketCard : dispatches the action ADD_ITEM 
                  that is being responsible for calling the action creator deleteItem(key).
                  deleteItem(key) is connected to the reducer that keeps track of all the data that are 
                  inside the basket. (we are gonna refer to this state as BasketCardReducer).
