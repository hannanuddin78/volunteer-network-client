import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderNavBer from '../Headers/HeaderNavBer/HeaderNavBer'

const NotCreate = () => {
    return (
        <Container>
            <HeaderNavBer/>
            <div style={{border: '1px solid black', padding:"20px", marginTop: '50px'}} className="w-50 m-auto shadow">
                <h2 className="text-center">This Page Not Create,,,, <br/> create some dayes letter</h2>
            </div>
        </Container>
    )
}

export default NotCreate
