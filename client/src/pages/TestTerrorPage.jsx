import React from "react";
import { Layout } from "../components/Layout.jsx";


export default function TestTerrorPage({data}) {
  console.log(data);
  

  return (
    <Layout title="Terror Data Quiz">

      <div className="part question">
      {/* {`When Country = ${d} and Year = ${2}, what is the Attack Type?`} */}
      </div>

      <div className="part answer">
        <input type="text" placeholder="Your Answer"/>
        <button>Submit Answer</button>
      </div>

      <div className="part result">
       קרעקרע
      </div>

      <div className="part foter">
      <button>Back to Data Page</button>
      <button>Next Question</button>
      </div>

      
    </Layout>
  );
}

