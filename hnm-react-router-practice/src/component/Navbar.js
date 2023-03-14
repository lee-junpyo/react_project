import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch,faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아','아동', 'H&M HOME', 'Sale', '지속가능성']
    const navigate = useNavigate();
    let [width, setWidth] = useState(0);
    const goToLogin = () => {
        navigate('/login');
    }
    const search = (event) => {
        if(event.key === "Enter"){
           //입력한 검색어를 외워서
           let keyword = event.target.value;
           //url을 바꿔준다.
           navigate(`/?q=${keyword}`);
        }
    }

    const logout = () => {
        setAuthenticate(false);
    }
  return (
    <div>
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>
                {authenticate === false ?(
                    <div className='login-button' onClick={goToLogin}>
                        <FontAwesomeIcon icon={faUser} />
                        <div className='login-text'>로그인</div>
                    </div>
                ) : (
                    <div className='login-button' onClick={logout}>
                        <FontAwesomeIcon icon={faUser} />
                        <div className='login-text'>로그아웃</div>
                    </div>
                )}
            </div>
        </div>
        <div className='nav-section' onClick={()=>navigate('/')}>
            <img width={100} src='https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYt80C%2FbtqDeJAYUBo%2FJQbTuukRladq2AUOeqgiEK%2Fimg.jpg' />
        </div>
        <div className='menu-area'>
            <ul className='menu-list'>
                {menuList.map((menu)=>(
                <li>{menu}</li>))}
            </ul>
            <div className='search-box landing-search-box'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' onKeyPress={(event)=>search(event)}></input>
            </div>
        </div>
    </div>
  )
}

export default Navbar