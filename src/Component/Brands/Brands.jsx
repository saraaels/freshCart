import React from 'react'
import style from './Brands.module.css'
import { Circles } from 'react-loader-spinner';
import axios from 'axios';
import { useQuery } from 'react-query';
export default function Brands() {
  function getAllBrands() {
    return axios.get('https://route-ecommerce.onrender.com/api/v1/subcategories')
  }
  let { isLoading, data, isError, isFetching, error } = useQuery("allBrands", getAllBrands, {


  })
  console.log(data);
  if (isError) {
    return <h1>{error.response.data.message}</h1>
  }


  return (
    <>

      <div className="container">

        {isLoading == false ? <div className="row ">
          {data?.data.data.map((brand) => <div className="col-md-3 py-2" key={brand._id}>

            <div className="card   ">
    
            
              <p className='text-main text-center p-4'>{brand.name}</p>



            </div>
          </div>
          )}

        </div> : <div className=' d-flex justify-content-center  '> <Circles
          height="50%"
          width="50%"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /></div>}

      </div>

    </>)
}
