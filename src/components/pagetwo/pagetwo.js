import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Col, Image, Row } from 'react-bootstrap'
import './pagetwo.scss'

const PageTwo = ({ imagedata }) => {

    const { Search = [] } = imagedata

    const [movieName, setmovieName] = useState('')
    const [movieDate, setmovieDate] = useState('')
    const [totalResults, settotalResults] = useState(0)
    const [showTiletwo, setshowTiletwo] = useState(false)
    const [errMsg, seterrMsg] = useState(false)
    const [showName, setShowName] = useState(false)
    const [showDate, setShowDate] = useState(false)

    const handleMovieName = (event) => {
        setmovieName(event.target.value)
    }

    const handleMovieDate = (event) => {
        setmovieDate(event.target.value)
    }

    const handleSubmitTwo = (event, imagedata)=> {
        if(typeof imagedata === 'object') {
            setshowTiletwo(true)
            settotalResults(imagedata.totalResults)
        } else if(movieDate.length == 0 && movieName.length == 0) {
            setShowDate(false)
            setShowName(false)
            seterrMsg(true)
        } else if (movieName.length == 0) {
            setShowName(true)
            setShowDate(false)
            seterrMsg(false)
        } else if(movieDate.length == 0) {
            setShowDate(true)
            setShowName(false)
            seterrMsg(false)
        }
}

    return (
        <div className='pagetwo_cont'>
            <InputGroup className="mb-3" size='sm'>
            <InputGroup.Prepend>
                <InputGroup.Text>Movie Name and Date</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl placeholder="Movie's name..." value={movieName} type='text' onChange={(event) => handleMovieName(event)}/>
            <FormControl placeholder="Movie's date..." value={movieDate} type='date' onChange={(event) => handleMovieDate(event)}/>
            </InputGroup>
                <Button variant="outline-primary" type='submit' size='sm' onClick={(event) => handleSubmitTwo(event, imagedata)}>Submit</Button>
                <Col className='main'>
                    <h4>Total Results: {totalResults}</h4>
                    
                {errMsg && <p className='err'>Enter Movie's Name and Date!!</p>}
                {showName && <p className='err'>Enter Movie's Name</p>}
                {showDate && <p className='err'>Enter Year</p>}

                <Row>
                    {typeof imagedata === 'object' && Search.map((value, index) => {
                    return (
                    <>{showTiletwo && 
                    <Col key={index} style={{width: '30%'}}>
                        <h6>{value.Title}</h6>
                        <Image src={value.Poster} alt='image' fluid />
                        <p>Year: {value.Year}</p>
                    </Col>}
                    </>
                    )})}
                </Row>
                </Col>
                
        </div>
    )
}

export default PageTwo;
