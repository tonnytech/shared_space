import React, {useState} from 'react';
import './ServiceList.css'

const ServiceList = () => {
    const [openDesk, setOpenDesk] = useState(true);
    const [openPrinter, setOpenPrinter] = useState(false);
    const [openSupport, setOpenSupport] = useState(false);

    const ToggleDesk = ()=> {
        setOpenDesk(true);
        setOpenPrinter(false);
        setOpenSupport(false);
    }

    const TogglePrinter = ()=> {
        setOpenDesk(false);
        setOpenPrinter(true);
        setOpenSupport(false);
    }

    const ToggleSupport = () => {
        setOpenDesk(false);
        setOpenPrinter(false);
        setOpenSupport(true);
    }

    return (
    <div>
        <ul className='ul_container'>
            <li>
                <div className={openDesk ? 'title_wrapper title_wrapper_active' : 'title_wrapper'}>
                    <p onClick={ToggleDesk}>DEDICATED DESK</p>
                </div>
                <p className={openDesk ? 'open_detail' : 'close_detail'}>
                    As far as we know, most of our
                    customers prefer this main rental
                     service – namely paying an hourly 
                     fee for getting a desk, a laptop, 
                     free WiFi & delicious tea, 
                     coffee & snacks catering!
                </p>
            </li>
            <li>
                <div className={openPrinter ? 'title_wrapper title_wrapper_active' : 'title_wrapper'}>
                    <p onClick={TogglePrinter}>PRINTER</p>
                </div>
                <p className={openPrinter ? 'open_detail' : 'close_detail'}>As far as we know, most of our
                    customers prefer this main rental
                     service – namely paying an hourly 
                     fee for getting a desk, a laptop, 
                     free WiFi & delicious tea, 
                     coffee & snacks catering!</p>
            </li>
            <li>
                <div className={openSupport ? 'title_wrapper title_wrapper_active' : 'title_wrapper'}>
                    <p onClick={ToggleSupport}>CLIENT SUPPORT</p>
                </div>
                <p className={openSupport ? 'open_detail' : 'close_detail'}>
                As far as we know, most of our
                    customers prefer this main rental
                     service – namely paying an hourly 
                     fee for getting a desk, a laptop, 
                     free WiFi & delicious tea, 
                     coffee & snacks catering!
                </p>
            </li>
        </ul>
    </div>
    );
}
 
export default ServiceList;