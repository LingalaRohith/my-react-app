import { useLocation } from 'react-router-dom';

function OrderSummary() {
  const location = useLocation();
  const { selectedSeats } = location.state || {}; 

}
export default OrderSummary; 