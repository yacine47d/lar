import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardImg, CardBody, CardText , Button} from 'reactstrap';
import {Link} from "react-router-dom"
import Rate from './Rate';

const MovieCard = ({ movie: {id , title, posterUrl, description, rate } ,key }) => {
  return (
    <div key={key} className='col-4 mt-2'>
      <Card style={{ height: `500px` }}>
        <CardTitle>
          <div className='row justify-content-center mt-2'>
            <h6>{title}</h6>
          </div>
        </CardTitle>
        <CardImg
          top
          width='100%'
          style={{ height:`300px`}}
          src={posterUrl}
          alt='Card image cap'
        />
        <CardBody>
          <div className='row'>
            <CardText>{description}</CardText>
          </div>
          <div className='row'>
            <Rate rating={rate} />
          </div>
        </CardBody>
      <Button>
        <Link to={`${id}`}
        
        state={{Trailer : posterUrl , description : description}}>See more</Link>
      </Button>
      </Card>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;