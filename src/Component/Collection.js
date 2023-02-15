import React from 'react'
import '../asset/css/Collection.css'

export default function Collection() {
const collection=[
    {
        title:"COLLECTION",
        type:'select',
        id:1,
        values:[
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"},
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"}
        ]
    },
    {
        title:"PRICE RANGE",
        type:'select',
        id:1,
        values:[
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"}
        ]
    },
    {
        title:"LOCATION",
        type:'select',
        id:1,
        values:[
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"},
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"}
        ]
    },
    {
        title:"CURRENCY",
        type:'select',
        id:1,
        values:[
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"},
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"}
        ]
    },
    {
        title:"CATEGORIES",
        type:'select',
        id:1,
        values:[
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"}
        ]
    }
]


const platform=[
    {
        title:"PLATFORM",
        type:'platform',
        id:1,
        values:[
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"},
            {code:"collection1",colname:"colletion1"},
            {code:"collection2",colname:"colletion2"}
        ]
    }
]

const badges=[
    {title:'parity',
     type:"badge",
     id:1,
     values:[{common:"Common1"},]
    },
    {title:'',
     type:"badge",
     id:1,
     values:[{common:"Common2"},]
    },
    {title:'',
     type:"badge",
     id:1,
     values:[{common:"Common3"},]
    },

    {title:'',
     type:"badge",
     id:1,
     values:[{common:"Common4"},]
    },
    {title:'',
     type:"badge",
     id:1,
     values:[{common:"Common5"},]
    }
]

  return (
   
   <>
<div className='collection-parent'>
   <div className='colletion-data d-flex'>
   {
    collection.map((element,i)=>{
             
      const coldata=[...element.values]
    //   console.log(coldata);

   
      if(element.type==="select"){
        return  <div className='ms-3' key={i}>
        <p className='m-0'>{element.title}</p>
        <select id='collselect' class="form-select" aria-label="Default select example">
            {       

 coldata.map((el)=>{
   return <option selected >{el.code}</option>
 })        
     }
</select>
</div>
      }
            
    })
    
   }
   
   </div>
   <div className='parity-data'>
   <ul>
   <p className='m-0'>Parity</p>
    { 
         badges.map((element,i)=>{
            console.log(element.title);
            return (
                    
                        
                        
                            element.values?.map((ele,i)=>{
                                console.log(ele.common);
                                return <li key={i} className='badge'>{ele.common}</li>
                            })
                        
                    
                
                )
        }) 
    }
   </ul>
   
  
<div className='template  platform'>
   <div className='ms-3'>
<p className='m-0'>PlATFORM</p>
<select id='collselect' class="form-select" aria-label="Default select example">
    <option value="">Platform</option>
</select>
</div>

</div>

   </div>
   </div>
   </>
  )
}
