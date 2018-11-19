import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

const reducers = combineReducers({
    nothing: "temp"
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <div>Ok</div>
    </Provider>
, document.getElementById('app'))
