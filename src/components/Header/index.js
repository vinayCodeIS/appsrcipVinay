     
import './index.css'

const Header = () => {      
    return (
        <header >
           <div className='headercontainer'><div className='container'>
                <div> 
                <img src="/assests/screenshot 2025-11-01 144428.png" alt="E-Commerce Logo" className="logo" /></div>
                <h1 className='logo-name'>LOGO</h1>
                <div className="user-icon">
                    <button type='button' className='button'>
                        <img src="/assests/Screenshot 2025-11-01 152411.png" alt="Cart Icon" className="icons" />   
                    </button>
                    <button type='button' className='button'>
                        <img src="/assests/Screenshot 2025-11-01 151942.png" alt="User Icon" className="icons" />
                    </button>
                    <button type='button' className='button'>
                        <img src="/assests/Screenshot 2025-11-01 153006.png" alt="User Icon" className="icons" />
                    </button>
                    <button type='button' className='button'>
                        <img src="/assests/Screenshot 2025-11-01 153411.png" alt="User Icon" className="icons" />
                    </button>
                    <button type='button' className='button'>
                        <img src="/assests/Screenshot 2025-11-01 153549.png" alt="User Icon" className="iconsEng" />
                    </button>

                </div>
                
                  
            </div> 
            <div className='container-2'>
                    <button type='button' className='button2'>
                        SHOP
                    </button>
                    <button type='button' className='button2'>
                        SKILLS
                    </button>
                    <button type='button' className='button2'>
                        STORIES
                    </button>
                    <button type='button' className='button2'>
                        ABOUT US
                    </button>
                    <button type='button' className='button2'>
                        CONTACT US
                    </button >
                    

                </div>
                <img src="/assests/Screenshot 2025-11-01 163344.png" alt="Search Icon" className="topic" />
                </div>    
            
        </header>
    );
}
export default Header;
