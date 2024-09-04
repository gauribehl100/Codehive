import React from 'react';
import Filter from '../Components/Core/catalog/Filter';
import Cards from '../Components/Core/catalog/Cards';
import Card from "../Components/Core/catalog/Card";
import Spinner from '../Components/Core/catalog/Spinner';
import { useState } from 'react';
import { useEffect } from 'react';
import { apiUrl, filterData  } from "../data/data";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

function Catalog() {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setCourses(output.data);
    }
    catch(error) {
         toast.error("Unable to fetch data form API");
        console.log("error")
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col bg-purple-200">
      <div>
       
      </div>
      <div className="bg-bgDark2">
        <div>
          <Filter 
          filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">

        {
        (courses.length === 0 || Object.keys(courses).length === 0) ? 
        (<div>No Courses Found</div>) : 
        (loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>))
        }

          {/* {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          } */}
        </div>
      </div>


    </div>
  );
};


export default Catalog;
