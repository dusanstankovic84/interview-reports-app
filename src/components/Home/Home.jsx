import React, {useEffect, useState} from 'react';
import {CandidateCard} from '../CandidateCard/CandidateCard'
import { getUserData } from "../../service/getData";
import Loading from '../partials/Loading/Loading'
import { Search } from '../partials/Search/Search';
import './Home.css';

// home (main) component for displaying search input and candidate cards

export const Home = ({setToken, token}) =>{
    const [users, setUsers] = useState([])
    const [showLoading, setShowLoading] = useState(false);
    const [search, setSearch] = useState('');    
  
  useEffect(() => {
    if (token === '') {                                         // 'loading' animation until token is received
      setShowLoading(true)      
    }
    else {                        
      setShowLoading(false)                                       // fetching user data when token is received
      getUserData(setToken,token).then(users => setUsers(users))
    }      
  },[token, setToken])

  const renderLoading = () => {           // helper function for loading animation
    return <Loading />
  }
  const renderCandidates = () => {        // helper function for showing candidate cards
    
    return <div className="home">
            <Search title={"Candidates"} search={search} setSearch={setSearch} />
            <div className="container">
              <div className="row candidates">
                {users.map((user) => {
                  const s = search.trim().toLowerCase();
                  if (
                    s === "" ||
                    user.name.toLowerCase().indexOf(s) !== -1 ||
                    user.email.toLowerCase().indexOf(s) !== -1
                  )
                    {return (                      
                      <CandidateCard                      
                        name={user.name}
                        email={user.email}
                        key={user.id}
                        users={user}
                      />
                    )}
                  else return null;
                })}
              </div>
            </div>
        </div>
  }
  return showLoading ? renderLoading() : renderCandidates();
}