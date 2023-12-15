import React from 'react'
import Header from '../../components/layout/header'
import { Card } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../../components/layout/footer'
function Orderlist() {
  return (
    <div className='bg-white'>
      <Header />
<div className="continer" >
  <div className="row mt-5 mb-5">
    <div className="col-sm-12">
  <div className="cards">
  <Card style={{ width: '58rem' }}>
  <ListGroup className='' variant="flush">
    <ListGroup.Item className='color1'>Your Orders  <Link className="okman" to=''>
    <i class="fa-solid fa-wifi"></i>
                </Link><p className='okman'>ALL</p> </ListGroup.Item>
    
    
    <ListGroup.Item className='color2'>17 Sep 2021, 01:57 PM <h6>EVL009152151</h6> <button className='okman_3'>PENDING</button></ListGroup.Item>
    <ListGroup.Item> 13 Sep 2021, 03:55 PM <h6>EVL009152151</h6> <button className='okmans'>CANCEL</button></ListGroup.Item>
    <ListGroup.Item></ListGroup.Item>
  </ListGroup>
</Card>

  </div>
    
    </div>
  </div>
</div>
     <Footer/>
    </div>
  )
}

export default Orderlist
