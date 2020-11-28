import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import CardList from '../Components/CardList';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../action';

function App() {

    const dispatch = useDispatch()
    const { searchField } = useSelector((state) => state.searchRobots)
    const { robots, isPending, error } = useSelector((state) => state.requestRobots)

    useEffect(() => {
        const onRequestRobots = () => {
            dispatch(requestRobots())
        }
        onRequestRobots();
    }, [dispatch])

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    
    if(isPending) {
        return <h1>Loading...</h1>
    }
       
    if (!error) {
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

export default App;