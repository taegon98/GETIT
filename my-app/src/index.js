import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/attendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import Card from './chapter_13/Card';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* //챕터 4
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000); 
  */
  

/* //챕터5
root.render(
  <React.StrictMode>
    <CommentList />
  </React.StrictMode>
);  */


/* //챕터6
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);  */

/* // 챕터7
root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
);  */

/* // 챕터8
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);  */

// 챕터9
/*root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
); */

 // 챕터10
/*root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);  */

// 챕터11
/*root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
); */

// 12챕터
 /*root.render(
   <React.StrictMode>
     <Calculator />
   </React.StrictMode>
 );*/


/* // 13챕터
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
); */

// 14챕터
root.render(
  <React.StrictMode>
    <DarkOrLight />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();