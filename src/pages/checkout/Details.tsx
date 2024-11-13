import React, { useEffect, useState } from 'react';
import '../../styles/checkout/detail.css'
import '../../styles/checkout/detail2.css'
import '../../styles/checkout/detail3.css'
import CheckoutNav from '../../components/checkout-components/nav/Nav';
import OrderSummary from '../../components/checkout-components/order-summary-bar/OrderSummary';
import PrcessTracker from '../../components/checkout-components/process-tracker/ProcessTracker';
import DetailsSection from '../../components/checkout-components/details-page';
import CheckoutFooter from '../../components/checkout-components/footer/Footer';
import { useParams } from 'react-router-dom';
import allIndivialPuppies from '../../data/individual-puppy-data/individual_puppy1.json'


function getObjectById(array: any[], id: string | undefined): any | undefined {
  return array.find(item => item.puppy_id === id);
}
interface Props{
}
const CheckoutDetail: React.FC<Props> = ({}) => {
    const { puppyId } = useParams();
    const [ puppyInfo, setPuppyInfo ] = useState(getObjectById(allIndivialPuppies, puppyId))
   
    useEffect(() =>{
        document.title = "Find the Right Puppy for Your Family | PuppySpot | PuppySpot";
    }, []);

    

  return (
    <>
      <CheckoutNav/>
      <section className='tw-max-w-7xl tw-mx-auto tw-mb-4 sm:tw-px-6'>
        <PrcessTracker page={"detail"} />


           <div className='tw-flex tw-flex-col tw-justify-between tw-items-start tw-gap-8 lg:tw-flex-row sm:tw-mt-12'>
            
             <DetailsSection puppyInfo={puppyInfo}/>


              <OrderSummary puppyInfo={puppyInfo}/>

           </div>


      </section>
      <CheckoutFooter />
      {/* <OrderSummary/> */}
    </>
  );
}

export default CheckoutDetail;
