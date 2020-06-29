import React from 'react'
import { Modal, Col, Button } from 'react-bootstrap'
import './modal.scss'

const ModalComponent = ({ showModal, handleClose, modalData })=> {
    const  {Ratings = []} = modalData;
    return (
        <div>
            <Modal show={showModal} size='lg' centered>
                <Modal.Header>
                    <Modal.Title className='title'>{modalData.Title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Col>
                        <p className='rating_modal'>Rated: {modalData.Rated}</p>
                        <p className='rating_modal'>Language: {modalData.Language}</p>
                        <p className='details'>IMDB Rating: {modalData.imdbRating}</p>
                        {Ratings.length && Ratings.map((value) => {return (
                        <div className='ratings'>
                            <p className='details'>{value.Source}:</p>
                            <p className='details'>{value.Value}</p>
                        </div>
                        )})}
                        <p className='plot'>{modalData.Plot}</p>
                        <p className='details_pageone_upper'>IMDB Votes: {modalData.imdbVotes}</p>
                        <p className='details_year'>Year: {modalData.Year}</p>
                        <p className='details_released'>Released: {modalData.Released}</p>
                        <p className='details_pageone_upper'>Genre: {modalData.Genre}</p>
                        <p className='details_pageone_lower'>Actors: {modalData.Actors}</p>
                        <p className='details_pageone_lower'>Director: {modalData.Director}</p>
                    </Col>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalComponent;
