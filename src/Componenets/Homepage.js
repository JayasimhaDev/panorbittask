import axios from 'axios';
import React ,{useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SetUserinformation} from "./Action";
import {useNavigate , Link} from "react-router-dom"
import jaya from './Jaya.svg';
import Profile from './Profile';

const Homepage = () => {
    const userinfo = useSelector((state)=>state.user_information.userinfo);
    const dispatch= useDispatch();
    const fetchuserinfo = async ()=>{
        const response = await axios.get("https://panorbit.in/api/users.json").catch((err)=>{
            console.log("Err :", err);
        })
        dispatch(SetUserinformation(response.data.users));
    };
    useEffect(()=>{
        fetchuserinfo();
    },[]);
   return (
    <div className='select-main-container'>
        <div className='content-sub-section'>
            <div className='name-div-container'>
                <p>Select an account</p>
            </div>
            <div className='scroll-div-container'>
                {
                    userinfo.map((item)=>{
                      return(
                        <Link key={item.id} className="profile-mapping-div" to={`/Profile/?name=${item.name}`}>
                           <img src={item.profilepicture} alt="hello"/>
                           <p>{item.name}</p>
                        </Link>
                      )
                    })  
                }
            </div>  
        </div>
    </div>
  )
}

export default Homepage;