import React from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import {MainRegisterPage} from './pages/MainRegisterPage'
import {AddPostPage} from './pages/AddPostPage'
import {DetailPage} from './pages/DetailPage'
import {MainUnregisterPage} from './pages/MainUnregisterPage'

export const useRouter = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <Switch>
                <Route path='/' exact>
                    <MainRegisterPage/>
                </Route>
                <Route path='/addpost' exact>
                    <AddPostPage/>
                </Route>
                <Route path='/detail/:id'>
                    <DetailPage/>
                </Route>
                <Redirect to='/'/>
            </Switch>
        )
    }

    return(
        <Switch>
            <Route path='/' exact>
                <MainUnregisterPage/>
            </Route>
            <Redirect to='/'/>
        </Switch>
    )
}
