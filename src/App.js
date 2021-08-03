
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react'
import Dashboard from './pages/1role_warehouse/1dashboard/dashboard';
import Login from './pages/login/login';
import Navbar from './component/Navbar/Navbar'
import { Context } from './config/Context';
import styled from 'styled-components'
import { StockRequest } from './pages/1role_warehouse/2stockrequest/StockRequest';
import { InStock } from './pages/1role_warehouse/2stock/inStock/InStock';
import { CurrentStock } from './pages/1role_warehouse/2stock/currentStock/CurrentStock';
import { OutStock } from './pages/1role_warehouse/2stock/outStock/OutStock';
import { OutStock1 } from './pages/1role_warehouse/2stock/outStock/OutStock1';
import { Print } from './pages/1role_warehouse/2stock/outStock/component/Print';
import { GapStock } from './pages/1role_warehouse/2stock/gapStock/GapStock';
import { Courier } from './pages/1role_warehouse/3courier/Courier';
import { Purchansing } from './pages/1role_warehouse/4Purchasing/Purchansing';
import { Cart } from './pages/1role_warehouse/5cart/Cart';
import { DetailsCart } from './pages/1role_warehouse/6DetailsCart/DetailsCart';
import { cookiesGet } from './config/Cookies';
import { History } from './pages/1role_warehouse/2stock/outStockHistory/History';
import { DeliveryHistory } from './pages/1role_warehouse/2stock/deliveryHistory/DeliveryHistory';


const Wrapper = styled.div`
padding-left : 260px;
transition:450ms;

@media (max-width: 768px){
  padding-left:0px;
}
`

function App() {
  const { showSideBar } = useContext(Context)

  const token = cookiesGet({ key: 'token' })


  return (
    <>
      {/* <Loading></Loading> */}
      <div className="header">
        <Navbar />
      </div>
      <Switch>
        {
          token ?
            <Wrapper ShowSideBar={showSideBar} className={showSideBar ? 'content active' : 'content'}>
              <Route path="/" exact component={Dashboard} />
              <Route path="/StockReuest" component={StockRequest} />
              <Route path="/Stock/instock" component={InStock} />
              <Route path="/Stock/currentStock" component={CurrentStock} />
              <Route path="/Stock/outstock" component={OutStock1} />
              <Route path="/Stock/outstocks/history" component={History} />
              <Route path="/Stock/delivery/history" component={DeliveryHistory} />
              <Route path="/Stock/gapstock" component={GapStock} />
              <Route path="/Courier" component={Courier} />
              <Route path="/Purchasing" component={Purchansing} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Carts/Details" component={DetailsCart} />
              <Route path="/review" component={Print} />
            </Wrapper>
            : <Redirect to="/login" />
        }
      </Switch>
    </>
  );
}

export default App;
