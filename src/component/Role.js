import React,  { useState, useEffect } from 'react';
import axios from "axios";
import { Menu } from "antd";
import "../css/style.css";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { Link, useNavigate } from "react-router-dom";

function Role() {

    const [data, setData] = useState ({
        // roleresponsibilitiesid: "b95f189a-d3e6-4e1f-9231-44cf7ed99c7d",
        designationid: "",
        roles: "",
        responsibility: "",
        activity: "",
      })

      const handleInput = (event) => {
        setData ({... data, [event.target.id]: event.target.value})
      }

      function Responsibility(event){
        event.preventDefault()
        axios.post("http://localhost:5247/api/RoleResponsibilities/CreateRole", data)
        .then(response => console.log(response))
        .catch(err => console.log(err));
      }
 
  const [isMenuOpen, setMenuOpen]  = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [theme, setTheme] = useState("theme");

    const toggleTheme = () => {
        if (theme === "dark-theme"){
            setTheme('light-theme')
        }

        else {
            setTheme ("dark-theme")
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const navigate = useNavigate();

    return (
        
        <>

   <div className='form-data' style={{ display: 'flex', }}>

 <div className='sidebar'>

<img src="/images/Frame 1.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div className="imgic">
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>

<div className='imgic2'>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
</div>

</div>
<div>

<div id='sidemenu'  style={{
  width:  '220px',
  display: isMenuOpen ? 'none' : 'block',
}}
>

<h2>Homes</h2>
<img src="/images/Layer 1.png" />
<div className='sideline'>
<Menu 
onChange={(e) => window.location.href = e.target.value}
mode="inline"
items={[
    {
        label: "Organization",
        key: "Organization", 
        children: [
            {
            label: (
            <Link to="/">
             Department
            </Link>
          ),
          value: "/",
        },
    {
        label: (
            <Link to="/Designation">
            Designation
            </Link>
          ),
          value: "/Designation",
          },
    {
        label: (
            <Link to="/Project">
              Project
            </Link>
          ),
          value: "/Project",
        },
        {
            label: (
                <Link to="/Role">
                 Role & Responsibilities
                </Link>
              ),
              value: "/Role",
            },
          {
              label: (
            <Link to="/Team">
             Team
            </Link>
    ),
    value: "/Team",
}, ], },
  ]}
  className='labelside'
  >

</Menu>
<ul>

<li>
<Link to="/Board" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Dashboard</Link> 
</li>
<li>
 <Link to="/Employee" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Employee Information</Link> 
</li>
<li>
<Link to="/Medical" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Medical & Health</Link> 
</li>
<li>
<Link to="/Education" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Education History</Link> 
</li>
<li>
<Link to="/Consent" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Consent & Authorized</Link> 
</li>

</ul>
</div>
</div>
</div> 
</div>
                <div className='Acc-from'>
                    <div className='navbar11'>
                        <input type='checkbox' name='' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
                                </form>
                        </div>
                        <ul>

                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                  
                        <div className='text'>     
                          <label className="switchh">
                          <input type="checkbox"  onClick={() => toggleTheme()} />
                      <span className="sliders"></span>
                                 </label>
                        </div>
                        <div className='text2'>
                           <p className='pra'> Welcome </p>
                           <p className='para'> Heydim (Admin) </p>
                        </div>

                        <div className='text3'>
                            <img src="/images/Ellipse 47.png" />
                        </div>
                        </ul>                   
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>

                 <form onSubmit={Responsibility}>
                    <h2> Role & Responsibilities </h2>
<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">DesignationId FK</label>
                <input type="text" className="form-control" onChange={handleInput} id='designationid'
                   />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Role</label>
                <input type="text" className="form-control" onChange={handleInput} id='roles'
                 />
            </div>
        </div>
    </div>
</div>


<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Responsibility</label>
                <input type="text" className="form-control" onChange={handleInput} id='responsibility'
                    />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Activity</label>
                <input type="text" className="form-control" onChange={handleInput} id=' activity'
                  />
            </div>
        </div>
    </div>
</div>

<button type='submit' className='Tbtn'> Save</button>
</form> 
     </div>
</div>
        </>
    )
}
export default Role;