import Image from "next/image"
import { useSelector } from 'react-redux'
import { selectItems } from "../slices/basketSlice"

function checkout() {
  const items = useSelector(selectItems)
  return (
    <div className="bg-gray-100">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image src="https://links.papareact.com/ikj" width={1020} height={250} objectFit="contain"/>
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4w">
              {items.length === 0 ? "Your Amazon Basket is empty." : "Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              
            ))}

          </div>

        </div>

        {/* Right */}
      </main>
    </div>
  )
}

export default checkout
