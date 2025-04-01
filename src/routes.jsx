import Root from "./routes/Root/Root.jsx";
import Home from "./routes/Home/Home.jsx";
import Shop from "./routes/Shop/Shop.jsx";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "shop",
                element: <Shop />
            }
        ]
    }
]

export default routes;