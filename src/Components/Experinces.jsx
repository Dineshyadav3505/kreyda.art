import React from 'react';
import Experince from './Experince';


const Experinces = () => {

  const data =[
    {title1:'Web design',       title2:'landing page',            title3:'corporate website',       title4:'online Store' ,          title5:'' ,                     title6:"",   bg:'#C7D6DF'  },
    {title1:'Product design',   title2:'UX UI DESIGN',            title3:'SAAS PLATFORMS',          title4:'WEB APPLICATIONS',       title5:'Mobile apps',           title6:"",   bg:'#D4E2DA'  },
    {title1:'Web development',  title2:'webflow',                 title3:'frontend devlopment',     title4:'',                       title5:'' ,                     title6:"",   bg:'#DEE7D3'  },
    {title1:'Branding',         title2:'logo',                    title3:'packaging',               title4:'naming',                 title5:'CORPORATE IDENTITY',    title6:"",   bg:'#DFDACD'  },
    {title1:'Mobile apps',      title2:'ios',                     title3:'android',                 title4:'development',            title5:'',                      title6:"",   bg:'#D5D9E6'  },
    {title1:'Graphics',         title2:'2D & 3D ILLUSTRATIONS',   title3:'Motion design',           title4:'marketing materials',    title5:'',                      title6:"",   bg:'#DFE0E2'  },
  ]

  return (
    <div className='py-10'>
      {data.map((item, index)=>(
        <Experince key={index} item={item} index={index} />
      ))}

      
    </div>
  );
}

export default Experinces;
