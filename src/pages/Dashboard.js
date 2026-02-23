import '../App.css';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [time, setTime] = useState(new Date());
  const [fadeAlt, setFadeAlt] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fadeTimer = setInterval(() => setFadeAlt(prev => !prev), 4000);
    return () => clearInterval(fadeTimer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const displayHours = (hours % 12 || 12).toString().padStart(2, '0');

  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const dayName = days[time.getDay()];
  const dd = time.getDate().toString().padStart(2, '0');
  const mm = (time.getMonth() + 1).toString().padStart(2, '0');
  const yyyy = time.getFullYear();
  const dateStr = `${dayName}.${dd}.${mm}.${yyyy}`;

  return (
    <div className={`dashboard${fadeAlt ? ' fade-alt' : ''}`}>
      <div className='frame'>
        <div className='txt any1'>
          AI-powered<br />
          Real-time<br />
          Subtitle System<br />
        </div>
        <div className='txt2 any2'>
          AI 실시간<br />
          자막 시스템<br />
        </div>
      </div>
      <div className='right-txt'>
        <div className='timeWrap'>
          <p className='time'>{displayHours}:{minutes}<span>{ampm}</span></p>
          <p className='yoil'>{dateStr}</p>
        </div>
        <div className='infoWrap'>
          <div className='anyWrap'>
            <span className='any1'>AI 실시간 자막 시스템</span>
            <span className='any2'>AI-powered Real-time<br />Subtitle System</span>
          </div>
          <p>AIベースのリアルタイム字幕システム<br />基于AI的实时字幕系统</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
