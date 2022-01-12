
import React from "react";

function SearchData(props){
const area = props.country

// { Object.keys(area).map((keyName,i)=>(
//     <tr>
//         <th>{keyName}</th>
//            {/* <td>{i}</td> */}
//            <td>{area.keyName}</td>
//     </tr> 
// ))}
    return(<>
        <div className="element">
            <table style={{padding:"20px", margin:"50px" ,textAlign:"left", border:"1px solid #ddd"  }}>
                
             <tr>
              <th>Sub-Region</th>
               <td style={{padding:"20px"}}>{area.subregion}</td>
               </tr>
               <tr>
               <th>Capital</th>
               <td style={{padding:"20px"}}>{area.capital}</td>
               </tr>     
               <tr>
               <th>TimeZones</th>
               <td style={{padding:"20px"}}>{area.timezones}</td>
               </tr>
               <tr>
               <th>Population</th>
               <td style={{padding:"20px"}}>{area.population}</td>
               </tr>
               
                </table>
        </div>
        </>);

}

export default SearchData;