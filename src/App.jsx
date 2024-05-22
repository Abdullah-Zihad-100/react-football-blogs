import { useState } from 'react';
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header';

function App() {

  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0)

  const handleBookmarks=(blog)=>{
const newBookmarks=[...bookmarks,blog];
setBookmarks(newBookmarks)
// console.log('click')
  }



  const handleReadingTime=(id,time)=>{
    setReadingTime(readingTime+time)

    const reaminingBookmarks= bookmarks.filter(bookmark=>bookmark.id !==id)
    setBookmarks(reaminingBookmarks)
  }


  return (
    <div className="max-w-7xl p-3 mx-auto">
      <Header></Header> <br />
      <div className="m-1 md:flex justify-between gap-5">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App
