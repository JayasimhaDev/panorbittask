import React,{useEffect,useState} from 'react';
import { useSearchParams,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { SetUserinformation } from './Action';
import { FaAngleDown, FaAngleUp, FaArrowCircleRight, FaRocketchat, IconName } from "react-icons/fa";


const Profile = () => {
    const [pagename, setPagename] =  useState()
    const navigate = useNavigate();
    const  queryParameters = new URLSearchParams(window.location.search);
    const name = queryParameters.get("name");
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
  const [userid, setUserid] = useState(name) 
  let filterusers =userinfo.filter(user=>user.name === userid);
  const [userpage, setuserpage] = useState(0)
  const [isActive, setIsActive] = useState(false);
  const [userpagev, setUserpagev] = useState()
  const [popup, setPopup] = useState(false);
  const popupfunction =()=>{
  if(popup === true){
    setPopup(false);
  }else{
    setPopup(true);
  }
}

  return (
    <div>
        <div className='main-section-card-section'>
          <div className='navbar-links-main-container'>
           <div className='ul-tag-main-section'>
              <ul>
                <li><div className='icon-li-page-navi' onClick={()=>{{setuserpage(0)};{setUserpagev("Profile")}}}><h4 style={{color:userpage===0?"#fff":"#B6B3B6"}} >Profile</h4><div className={userpage=== 0? "icon-div-arrow active" : "icon-div-arrow"}><FaArrowCircleRight className='fa-arrow-icon' /> </div></div></li>
                <li><div className='icon-li-page-navi' onClick={()=>{{setuserpage(1)};{setUserpagev("Posts")}}}><h4 style={{color:userpage===1?"#fff":"#B6B3B6"}}>Posts</h4><div className={userpage=== 1? "icon-div-arrow active" : "icon-div-arrow"}><FaArrowCircleRight className='fa-arrow-icon' /> </div></div></li>
                <li><div className='icon-li-page-navi' onClick={()=>{{setuserpage(2)};{setUserpagev("Gallery")}}}><h4 style={{color:userpage===2?"#fff":"#B6B3B6"}}>Gallery</h4><div className={userpage=== 2? "icon-div-arrow active" : "icon-div-arrow"}><FaArrowCircleRight className='fa-arrow-icon' /> </div></div></li>
                <li><div className='icon-li-page-navi' onClick={()=>{{setuserpage(3)};{setUserpagev("ToDo")}}}><h4 style={{color:userpage===3?"#fff":"#B6B3B6"}}>ToDo</h4><div className={userpage=== 3? "icon-div-arrow active" : "icon-div-arrow"}><FaArrowCircleRight className='fa-arrow-icon' /> </div></div></li>
              </ul>
           </div>
          </div>
          <div className='content-main-section'>
            {
            filterusers.map((item)=>{
            return(
            <div key={item.id}>
              <div className='main-bar-navbar-section'>
             <div className='user-poster-name-container'>
              <p>{userpage=== 0 ? "Profile" : userpagev}</p>
              <div className='user-img-name-div' onClick={popupfunction}>
                <img src={item.profilepicture} alt="hello"/>
                <p>{item.name}</p>
                </div>
                 </div>
                 <div className={popup=== true ? "popup-main-container active" : "popup-main-container"}>
                 <div className='profile-pic-user-div'>
                     <img src={item.profilepicture} alt="hello" />
                     <p>{item.name}</p>
                     <p>{item.email}</p>
                 </div>
                 <div className='user-profile-login-main-div'>
                    {
                        userinfo.map((info)=>{
                            return(
                                <div className='user-profile-login'key={info.id} onClick={()=>{setUserid(info.name)}}>
                                  <img src={info.profilepicture} alt="hello"/>
                                  <p>{info.name}</p>
                                </div>
                            )
                        })
                    }
                 </div>
                 <div className='button-log-out-div'>
                 <button className='sign-out-button' onClick={()=>navigate('/')}>Sign out</button>
                 </div>
              </div>
              </div>
              
                {
                   userpage === 0? (<div>
                      <div className='main-container-user-bio-div'>
                                 <div  className="map-div-container">
                                        <div className='main-user-section-info'>
                                            <div className='user-information-main-div'>
                                               <div className='user-pic-name-address-div'>
                                                <div className='user-big-img-name-div'>
                                                    <img src={item.profilepicture} alt="hello" />
                                                    <h4>{item.name}</h4>
                                                </div>
                                                <div className='user-gmail-bio-div'>
                                                    <div className='sub-gmail-div'>
                                                        <ul>
                                                            <li>
                                                            <div className='info-details-user-div'>
                                                              <p className='user-p-tag-heading'>Username</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.username}</p>
                                                            </div>
                                                            </li>
                                                            <li>
                                                            <div className='info-details-user-div'>
                                                            <p className='user-p-tag-heading'>e-mail</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.email}</p>
                                                            </div>
                                                            </li>
                                                            <li>
                                                              <div className='info-details-user-div'>
                                                                <p className='user-p-tag-heading'>Phone</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.phone}</p>
                                                              </div>  
                                                            </li>
                                                            <li>
                                                                <div className='info-details-user-div'>
                                                                    <p className='user-p-tag-heading'>Website</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.website}</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <div className='company-name-div'><p>Company</p></div>
                                                        <div className='sub-gmail-div'>
                                                        <ul>
                                                            <li>
                                                            <div className='info-details-user-div'>
                                                              <p className='user-p-tag-heading'>Name</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.company.name}</p>
                                                            </div>
                                                            </li>
                                                            <li>
                                                            <div className='info-details-user-div'>
                                                            <p className='user-p-tag-heading' style={{width:"100px",marginLeft:"-19px"}}>catchphrase</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.company.catchPhrase}</p>
                                                            </div>
                                                            </li>
                                                            <li>
                                                              <div className='info-details-user-div' style={{marginRight:"-17px"}}>
                                                                <p className='user-p-tag-heading'>bs</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.company.bs}</p>
                                                              </div>  
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                            <div className='user-location-main-div'>
                                               <div className='user-location-details-div'>
                                                   <h4>Address :</h4>
                                                   <div className='sub-gmail-div'>
                                                        <ul>
                                                            <li>
                                                            <div className='info-details-user-div'>
                                                              <p className='user-p-tag-heading'>Street</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.address.street}</p>
                                                            </div>
                                                            </li>
                                                            <li>
                                                            <div className='info-details-user-div'>
                                                            <p className='user-p-tag-heading'>Suite</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.address.suite}</p>
                                                            </div>
                                                            </li>
                                                            <li>
                                                              <div className='info-details-user-div'>
                                                                <p className='user-p-tag-heading'>City</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.address.city}</p>
                                                              </div>  
                                                            </li>
                                                            <li>
                                                                <div className='info-details-user-div'>
                                                                    <p className='user-p-tag-heading'>Zipcode</p>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<p className='user-p-tag-heading-value'>{item.address.zipcode}</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                               </div>
                                               <div className='user-location-img-map'>
                                                {/* <img src={map} alt="hello" /> */}
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7772.893850323314!2d77.56898391955947!3d13.070837508451692!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae180eeacc43fd%3A0x74c621aab240c48b!2sSatya%20greens%20apartment!5e0!3m2!1sen!2sin!4v1677948707253!5m2!1sen!2sin"  style={{border:"0"}}  loading="lazy"></iframe>
                                                <div className='lat-lng-details'>
                                                    <p>Lat:&nbsp;{item.address.geo.lat}&nbsp;&nbsp;&nbsp;Long:&nbsp;{item.address.geo.lng}</p>
                                                </div>
                                               </div>
                                               <div className='chatbox-main-section'>
                                               <div className='chatbox-main-conatiner'> 
                                               <div className="accordion-title"  onClick={() => setIsActive(!isActive)}>
                                               <div className='icon-name-chatbox'>
                                                <FaRocketchat color='#fff' size="25" /> Chats
                                               </div>
                                               <div>{isActive ? (<FaAngleUp color='#fff' size="20" />) : (<FaAngleDown color='#fff' size="20" />)}</div>
                                               </div>
                                               {isActive && <div className="accordion-content">
                                                {
                                                    userinfo.map((val)=>{
                                                        return(
                                                            <div key={val.id} className="active-user-list-div">
                                                            <div className='user-img-name-div-two'>
                                                              <img src={val.profilepicture} alt="hello"/>
                                                             <p>{val.name}</p>
                                                             </div> 
                                                             <div className='span-active-icon-dot'></div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                               </div>}
                                               </div>
                                               </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                        </div>) : null
                        }
                        {
                        userpage === 1? (<div className='main-section-pager-bar'>
                        
                        <h1 className='h1-tag-coming-soon'>Coming Soon</h1></div>) : null
                       }
                      {
                     userpage === 2? (<div className='main-section-pager-bar'><h1 className='h1-tag-coming-soon'>Coming Soon</h1></div>) : null
                    }
                   {
                   userpage === 3? (<div className='main-section-pager-bar'><h1 className='h1-tag-coming-soon'>Coming Soon</h1></div>) : null
                   }
                </div>
                            )
                        })
                    }      
              
        </div>
        </div>
    </div>
  )
}

export default Profile;