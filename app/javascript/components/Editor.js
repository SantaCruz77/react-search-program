import React, { useState, useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import ProgramList from './ProgramList';
import { Routes, Route } from 'react-router-dom';
import Program from './Program'

const Editor = () => {
  const [searchs, setSearchs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch('/api/searchs');
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setSearchs(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="grid">
      {isError && <p>Something went wrong. Check the console.</p>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProgramList searchs={searchs} />
          
          <Routes>
            <Route path=":id" element={<Program searchs={searchs} />} />
          </Routes>
        </>
      )}
      </div>
      <Footer />
    </>
  );
};

export default Editor;