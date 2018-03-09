import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Martins'>
        <Member name='Renato' />
        <Member name='Daniela' />
        <Member name='Theo' />
    </Family>
, document.getElementById('app'))
