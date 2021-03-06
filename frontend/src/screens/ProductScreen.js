import React from 'react'
import {Link } from 'react-router-dom'
import {Row , Col,Image,ListGroup,card,Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


const ProductScreen = ({match}) => {

const product=products.find((p) => p._id === match.params.id)

    return(
    <>
       <Link className='btn btn-dark my-3' to='/'>
        Go back
       </Link>
       <Row>
           <Col>
           <Image src={product.image} alt={product.name} fluid/>
           
           </Col>           
           <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>
                    Price:${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description:${product.description}
                </ListGroup.Item>
            </ListGroup>
           </Col>
           <Col md={3}>
               <card>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                           <Row>
                               <Col> price: </Col>
                                 <Col> <strong>${product.price}</strong>
                               </Col>
                           </Row>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <Row>
                               <Col> status: </Col>
                                 <Col> 
                                  {product.countInStock > 0 ? 'In stock' : 'Out Of Stock'}
                               </Col>
                           </Row>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <Button className='btn-block' 
                           type='button' 
                           disabled={product.countInStock===0}
                           >
                               Add To Cart
                           </Button>
                       </ListGroup.Item>

                   </ListGroup>
                   
               </card>
           
           </Col>
       </Row>
    </>
    ) 
}

export default ProductScreen
