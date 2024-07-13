import React from 'react'
import Candidate from './Candidate'
import { candidates } from '../data'
import styled from 'styled-components'

const Container=styled.div`
    display: flex;
    flex-direction: column;
   

`

const Candidates = () => {
    
  return (
    <Container>
        {candidates.map(item=>(
            <Candidate item={item} key={item.id}/>
        ))

        }
    </Container>
  )
}

export default Candidates