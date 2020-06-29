import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Col, Row, Toast } from 'react-bootstrap'
import './pageone.scss'
import ModalComponent from '../../common/Modal/modal'

const PageOne = ({ data }) => {

    const [movieName, setmovieName] = useState('')
    const [movieDate, setmovieDate] = useState('')
    const [moviesTile, setmoviesTile] = useState(false)
    const [errMsg, seterrMsg] = useState(false)
    const [showModal, setshowModal] = useState(false)
    const [showName, setShowName] = useState(false)
    const [showDate, setShowDate] = useState(false)

    const handleMovieName = (event) => {
        setmovieName(event.target.value)
    }

    const handleMovieDate = (event) => {
        setmovieDate(event.target.value)
    }

    const handleSubmit = (event, data)=> {
            if (typeof data === 'object' && movieName === data.Title) {
                setmoviesTile(true)
            } else if (movieDate.length == 0 && movieName.length == 0) {
                setShowDate(false)
                setShowName(false)
                seterrMsg(true)
            } else if (movieName.length == 0) {
                setShowName(true)
                setShowDate(false)
                seterrMsg(false)
            } else if (movieDate.length == 0) {
                setShowDate(true)
                setShowName(false)
                seterrMsg(false)
            }
    }

    const handleModal = ()=> {
        setshowModal(true)
    }

    const handleClose = ()=> {
        setshowModal(false)
    }

    return (
        <>
        <ModalComponent modalData={data} handleModal={handleModal} showModal={showModal} handleClose={handleClose} style={{zIndex: '1'}}/>
          <div style={{margin :'50px'}}>
            <Row>
            <InputGroup className="mb-3" size='sm'>
            <InputGroup.Prepend>
                <InputGroup.Text>Movie Name and Date</InputGroup.Text>
            </InputGroup.Prepend>
                <FormControl placeholder="Movie's name..." value={movieName} type='text' onChange={(event) => handleMovieName(event)}/>
                <FormControl placeholder="Movie's date..." value={movieDate} type='date' onChange={(event) => handleMovieDate(event)}/>
            </InputGroup>
            </Row>
                <Button variant="outline-primary" type='submit' size='sm' onClick={(event) => handleSubmit(event, data)}>Submit</Button>
  
            <div className='main'>
                <Row style={{justifyContent: 'space-between'}}>
                    <h4>Movie Information</h4>
                    {moviesTile && <Button className='modal_btn' variant="outline-warning" type='submit' size='sm' onClick={handleModal}>Show Modal!</Button>}
                </Row>

                {errMsg && <p className='err'>Enter Movie's Name and Date!!</p>}
                {showName && <p className='err'>Enter Movie's Name</p>}
                {showDate && <p className='err'>Enter Year</p>}

                {moviesTile &&
                <Row>
                    <Col xs={3}>
                        <img src={data.Poster} alt='movie_image'/>
                    </Col>
                    <Col>
                        <label className='rating'>{data.Rated}</label>
                        <label className='rating'>{data.imdbVotes}</label>
                        <label className='rating'>{data.imdbRating}/10</label>
                        <label className='rating'>{data.Language}</label>
                    <Col className='column'>
                        <p className='details_pageone'>Actors: {data.Actors}</p>
                        <p className='details_pageone'>Director: {data.Director}</p>
                        <p className='details_pageone'>Writer: {data.Writer}</p>
                                            
                        <p className='details_pageone'>Year: {data.Year}</p>
                        <p className='details_pageone'>Released: {data.Released}</p>
                        <p className='details_pageone'>Genre: {data.Genre}</p>
                    </Col>

                    </Col>
                </Row>
                }
            </div>
            </div>
            </>
    )
}

export default PageOne;
