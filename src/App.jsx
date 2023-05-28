import { useState, useEffect } from 'react'
import './App.css'
import { fetchDataFromApi } from './utils/Api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from "./store/HomeSlice";
function App() {


  const dispatch = useDispatch();
  const url = useSelector((state) => state.home);
  console.log(url)

  useEffect(() => {
    apiTest();
  }, []);

  const apiTest = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log(res);
        dispatch(getApiConfiguration(res));
      });
  }

  return (
    <>
      <div className='app'></div>
    </>
  )
}

export default App
