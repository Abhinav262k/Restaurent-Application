import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Restreview({reviews}) {
    const [open, setOpen] = useState(false);
    console.log(reviews)
  return (
    <>
        {  
        <><Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
              >
                  Reviews
              </Button><Collapse in={open}>
                      <div id="example-collapse-text">
                         
                         {
                            reviews.map(item=>(
                                <div>
                                    <h4>{item.name} -/- <span>{item.date}</span></h4>
                                    <p>Rating: {item.rating}</p>
                                    <p className='text-muted'>{item.comments}</p>
                                    
                                </div>
                            ))
                         }
                      </div>
                  </Collapse></>
        
     
        }

    </>
  )
}

     
export default Restreview