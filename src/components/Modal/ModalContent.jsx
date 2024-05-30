import ItensCart from '../Cart/ItensCart';
import DeliveryLocation from '../Cart/DeliveryLocation';
import SummaryCart from '../Cart/SummaryCart';

const ModalContent = () => {
  return (
    <div id="modalContent" className="flex-1 overflow-auto overflow-x-hidden">
      <div className="container mx-auto">
        <ItensCart />

        <DeliveryLocation />

        <SummaryCart />
      </div>
    </div>
  );
};

export default ModalContent;
