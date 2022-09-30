import { useQuery } from "@apollo/client"
import Link from "next/link"
import Layout from "../components/Layout"
import Loading from "../components/Loading"
import Order from "../components/Order"
import { GET_ORDERS_TEST } from "../graphql/queries/order.queries"


const Orders = () => {
    const { data, loading, error } = useQuery(GET_ORDERS_TEST)

    if (loading) return <Loading />

    const { getOrders } = data;
    return (
        <>
            <Layout>


                <h1 className='text-2xl text-gray-800 font-light'>Ordenes</h1>
                <Link href="/neworder">
                    <a className="bg-blue-800 rounded py-2 px-5 mt-5 inline-block text-white rounded text-sm hover:bg-gray-800 uppercase font-bold">
                        New Order
                    </a>
                </Link>
                {getOrders.length === 0 ? (
                    <p className="mt-5 text-center text-2xl">No orders yet.</p>
                ) : (
                    <>
                        {getOrders.map((element) => (
                            <Order key={element.id} element={element} />
                        ))}
                    </>
                )}
            </Layout>
        </>

    )
}

export default Orders