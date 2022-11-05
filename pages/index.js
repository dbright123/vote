import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react";
import PU from "../database/polling_unit"
export default function Home(props) {
  const {data} = props;
  const [Data, setData] = useState(data);
  useEffect(()=>{
    if(data != null){
      setData(data);
    }else{
      return(<><h1>Please wait, system is loading data</h1></>);
    }
  },[data])
  
  return (   
    <>
      <Head>
        <meta name="theme-color" content="#712cf9"/>
      </Head>
      <style jsx>{`
        .bd-placeholder-img {
          font-size: 1.125rem;
          text-anchor: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
  
        @media (min-width: 768px) {
          .bd-placeholder-img-lg {
            font-size: 3.5rem;
          }
        }
  
        .b-example-divider {
          height: 3rem;
          background-color: rgba(0, 0, 0, .1);
          border: solid rgba(0, 0, 0, .15);
          border-width: 1px 0;
          box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
        }
  
        .b-example-vr {
          flex-shrink: 0;
          width: 1.5rem;
          height: 100vh;
        }
  
        .bi {
          vertical-align: -.125em;
          fill: currentColor;
        }
  
        .nav-scroller {
          position: relative;
          z-index: 2;
          height: 2.75rem;
          overflow-y: hidden;
        }
  
        .nav-scroller .nav {
          display: flex;
          flex-wrap: nowrap;
          padding-bottom: 1rem;
          margin-top: -1px;
          overflow-x: auto;
          text-align: center;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
        }

        @media (min-width: 992px) {
          .rounded-lg-3 { border-radius: .3rem; }
        }
  
      `}
    </style>
    <div className="b-example-divider"></div>

    <div className="px-4 py-5 my-5 text-center">
      <Image className="d-block mx-auto mb-4" src="/vote.png" alt="vote" width="72" height="57"/>
      <h1 className="display-5 fw-bold">Polling Unit</h1>
      <div className="col-lg-6 mx-auto">
      <hr />
      <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">S/N</th>
              <th scope="col">Number</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              
            </tr>
          </thead>
          <tbody>
            {
              data.map((data,ind)=>{
                return(
                  <>
                    {
                      (ind > 0)
                        ? 
                        <tr key={ind}>
                          <th scope="row">{ind}</th>
                          <td>{data[5]}</td>
                          <td>{data[6]}</td>
                          <td>{data[7]}</td>
                        </tr>
                        : 
                        <></>
                    }
                    
                  </>
                );
              })
            }
            
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            
          </tbody>
        </table>
        <hr />
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
<div className="b-example-divider"></div>
    </>
  )
}

export async function getServerSideProps(context){
  console.log("Stage 1 is done");
  const data = new PU();
  console.log(data);
  
  return{
    props : {data}
  }
}