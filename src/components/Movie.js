import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'


class Movie extends React.Component {

    render(){
        return(
            <>
            {(this.props.addMovie.length !==0 && this.props.display)&& this.props.addMovie.map(item=>{
                return(
                    <div className='movieDIV' style={{ display: 'flex', flexDirection: 'row', display:'inline-block', margin:'auto'}}>
                    <Card className="movieCard" style={{ width: '20rem' ,margin:'20px', marginBottom:'30px' ,borderColor:'#007BFE', flex:'1' }} >
  <Card.Img variant="top" src={item.posterPath} style={{ width: '19.9rem', height: '15rem', margin:'auto' }} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text className="over-view" style={{ height:'5rem', overflow:'auto' }} >
    Over View: {item.overview}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush" >
    <ListGroup.Item style={{borderColor:'#007BFE', margin:'0'}}>Average Votes: {item.averageVotes}</ListGroup.Item>
    <ListGroup.Item style={{borderColor:'#007BFE' , margin:'0'}}>Total Votes: {item.totalVotes}</ListGroup.Item>
    <ListGroup.Item style={{borderColor:'#007BFE' , margin:'0'}}>Popularity: {item.popularity}</ListGroup.Item>
  <ListGroup.Item style={{borderColor:'#007BFE', margin:'0'}}> Release Date: {item.releaseDate}</ListGroup.Item>
  </ListGroup>
  </Card>
  </div>
                )
            })}
            </>
        )
    }
}

export default Movie;