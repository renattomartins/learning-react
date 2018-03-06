import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Martins'>
        <Member name='Renato' />
    </Family>
, document.getElementById('app'))
