// Dependencies 
import React from 'react'
import { render } from 'react-dom'

// Css
import css from './styles/style.styl'

// Components
import App from './components/App'
import Single from './components/Single'
import PhotoGrid from './components/PhotoGrid'

// Router deps
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path='/view/:postId' component={Single}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))