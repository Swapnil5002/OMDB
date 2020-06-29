import React, { useEffect, useState } from 'react'
import PageOne from '../pageone/pageone'
import PageTwo from '../pagetwo/pagetwo'
import { Tabs, Tab, Toast } from 'react-bootstrap'
import './home.scss'
import { fetchPageOneData, fetchPageTwoData } from '../../api'

const Home = () => {

    const [data, setdata] = useState('No Data')
    const [imagedata, setimageData] = useState('No Image Data')
    const [show, setShow] = useState(false);

    useEffect(() => {
        fetchPageOneData()
        .then(res => {
            setdata(res)
         })
        .catch(error => {
           
        })

        fetchPageTwoData()
        .then(response => {
            setimageData(response)
        })
        .catch(error => 
            console.log('Unable to fetch Image API'))
    }, []);


    return (
        <div>
            <Tabs defaultActiveKey="home" id="tab">
                <Tab eventKey="home" title="Page One">
                    <PageOne data={data}/>
                </Tab>
                <Tab eventKey="profile" title="Page two">
                    <PageTwo imagedata={imagedata}/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Home;
