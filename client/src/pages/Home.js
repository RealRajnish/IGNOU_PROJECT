import React from 'react'
import styled from 'styled-components'
import FeatureProduct from '../components/FeatureProduct'
import HomeSectionOne from '../components/HomeSectionOne'
import { Container } from '../styles/Container'

const Home = () => {
    return (
        <Wrapper>
            <HomeSectionOne />
            <FeatureProduct />
        </Wrapper>
    )
}

const Wrapper = styled.section`

`;

export default Home