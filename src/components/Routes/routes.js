import Blog from "../Blog/Blog";
import Root from "../Root/Root";
import Statics from "../Statics/Statics";
import TopicCart from "../TopicCart/TopicCart";
import Topics from "../Topics/Topics";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, children: [
            { path: '/', element: <TopicCart></TopicCart>, loader: () => {
                return fetch('https://openapi.programming-hero.com/api/quiz')
            } },
            { path: '/home', element: <TopicCart></TopicCart>, loader: () => {
                return fetch('https://openapi.programming-hero.com/api/quiz')
            } },
            { path: '/topics', element: <Topics></Topics> },
            { path: '/statics', element: <Statics></Statics> },
            { path: '/blog', element: <Blog></Blog> }
        ]
    }
])