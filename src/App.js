
import './App.css';
import CheckoutPage from '../src/pages/checkout/checkout.component'
import {HomePage} from './pages/homepage/homepage.component.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selector'
//import { createStructuredSelector } from 'reselect'
import { checkUserSession } from './redux/user/user.actions'




const App = () => {

  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()


 useEffect(() => {
   dispatch(checkUserSession())
 }, [dispatch] )
  


  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ?(<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  )
}

// const mapStateToProps =  createStructuredSelector({
//   currentUser: selectCurrentUser
// })

// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession())
// })


// -- OLD WAY - using the {connect} hier order component and passing it  mapStateToProps & mapDispatchToProps
//export default connect(mapStateToProps,mapDispatchToProps)(App);

// -- NEW WAY - using Hooks from react-redux
export default App