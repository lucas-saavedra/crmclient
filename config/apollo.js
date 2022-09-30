import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";

const httplink = createHttpLink({
    uri: "http://localhost:4000/",
});
const authLink = setContext(() => {
    const token = localStorage.getItem("token");
    return {
        headers: { authorization: token ? `Bearer ${token}` : "" },
    };
});

const apolloClient = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache({
        typePolicies: {
            OrderGroup: {
                // In an inventory management system, products might be identified
                // by their UPC.
                keyFields: false,
            },
        }
    }),
    link: authLink.concat(httplink),
});

export default apolloClient;
