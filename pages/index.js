import Layout from "../components/Layout";
import { useQuery } from "@apollo/client";
import { GET_CLIENTS_SELLER } from "../graphql/queries/GET_CLIENTS_SELLER";
import { useRouter } from "next/router";
import Link from "next/link";
import Client from "../components/Client";
import Loading from "../components/Loading";

export default function Home() {
  const { data, loading, error } = useQuery(GET_CLIENTS_SELLER);
  const router = useRouter();
  if (loading) {
    return <Loading />
  }
  if (!data?.getClientsSeller) {
    router.push("/login");
  }
  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Clients</h1>
      <Link href="/newclient">
        <a className="bg-blue-800 rounded py-2 px-5 mt-5 inline-block text-white rounded text-sm hover:bg-gray-800 uppercase font-bold">
          New Client
        </a>
      </Link>
      <table className="table-auto shadow-md mt-10 w-full w-lg">
        <thead className="bg-gray-800">
          <tr className="text-white ">
            <th className="w-1/5 py-2">Name</th>
            <th className="w-1/5 py-2">Organization</th>
            <th className="w-1/5 py-2">Email</th>
            <th className="w-1/5 py-2">Edit</th>
            <th className="w-1/5 py-2">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {!data ? < p > No clients registered</p> :
            data.getClientsSeller.map((client, index) => (
              <Client key={client.id} client={client} />
            ))}
        </tbody>
      </table>
    </Layout >
  );
}
