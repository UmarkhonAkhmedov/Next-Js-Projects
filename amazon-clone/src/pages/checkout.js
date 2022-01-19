import Image from "next/image"
import { useSelector } from 'react-redux'
import CheckoutProduct from "../components/CheckoutProduct"
import { selectItems, selectTotal } from "../slices/basketSlice"
import CurrencyFormat from "react-currency-format"
import { useSession } from "next-auth/react"

function checkout() {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const { data: session } = useSession()

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
              <CheckoutProduct key={i} id={item.id} title={item.title} rating={item.rating} price={item.price} description={item.description}
                category={item.category} image={item.image} hasPrime={item.hasPrime}/>
            ))}

          </div>

        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">Subtotal ({items.length} items): {" "}
              <span className="fon-bold">
                <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />  
              </span></h2> 
              <button disabled={!session} className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                {!session ? 'Sing in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default checkout
