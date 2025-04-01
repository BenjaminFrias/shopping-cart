import Root from "./routes/Root/Root.jsx";
import Shop from "./routes/Shop/Shop.jsx";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "shop",
                element: <Shop />
            }
        ]
    }
]

export default routes;