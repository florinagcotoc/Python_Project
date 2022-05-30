import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import ProductsScreen from './screens/ProductsScreen'
import HomeScreen from './screens/HomeScreen';
import DetailProdScreen from './screens/DetailProdScreen';

import ActivateAccountScreen from './screens/ActivateAccountScreen';
import LoginScreen from './screens/LoginScreen';
import ResetPasswordConfirmScreen from './screens/ResetPasswordConfirmScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import SignUpScreen from './screens/SignUpScreen';
import ProductsByCategoryScreen from './screens/ProductsByCategoryScreen';
import CartScreen from './screens/CartScreen';
// import {Provider } from 'react-redux';
// import store from './store';

// const App = () => (
//   <Provider store={store}>

  
//   {/* // return ( */}
//     <Router>
//       <Header />
//       <main className='py-3'>
//         <Container>
//           <Routes>
//             <Route path='/' element={<HomeScreen/>}></Route>
//             <Route path='/products/' element={<ProductsScreen/>}></Route>
//             <Route path='/produs/:id' element={<DetailProdScreen/>}></Route>
//             <Route path='/login' element={<LoginScreen/>}></Route>
//             <Route path='/signup' element={<SignUpScreen/>}></Route>
//             <Route path='/reset-password' element={<ResetPasswordScreen/>}></Route>
//             <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirmScreen/>}></Route>
//             <Route path='/activate/:uid/:token' element={<ActivateAccountScreen/>}></Route>

//           </Routes>
//         </Container>
//       </main>
//       <Footer />
//     </Router>
//   </Provider>
//   // );
// )



function App(){
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen/>}></Route>
            <Route path='/produse/' element={<ProductsScreen/>}></Route>
            <Route path='/produs/:id/' element={<DetailProdScreen/>}></Route>
            <Route path='/login' element={<LoginScreen/>}></Route>
            <Route path='/signup' element={<SignUpScreen/>}></Route>
            <Route path='/reset-password' element={<ResetPasswordScreen/>}></Route>
            <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirmScreen/>}></Route>
            <Route path='/:category/produse/' element={<ProductsByCategoryScreen/>}></Route>
            <Route path='/cos-cumparaturi/' element={<CartScreen/>}></Route>
            <Route path='/cos-cumparaturi/:id/:qty' element={<CartScreen/>}></Route>
            <Route path='/activate/:uid/:token' element={<ActivateAccountScreen/>}></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}


export default App;
