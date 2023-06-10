import { FiTruck, FiPhone } from 'react-icons/fi'

export const Header = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-primary text-4xl font-bold py-6">Dealerz.</div>
        <div className="flex gap-8">
          <div className="flex gap-2 items-center">
            <FiPhone />
            <span className="font-semibold">Call Center</span>
          </div>
          <div className="flex gap-2 items-center">
            <FiTruck />
            <span className="font-semibold">Shipping & Returns</span>
          </div>
        </div>
      </div>
    </div>
  )
}
