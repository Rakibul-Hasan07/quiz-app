import Blog from "../Blog/Blog";
import Cart from "../Cart/Cart";
import QuizTopic from "../QuizTopic/QuizTopic";
import Root from "../Root/Root";
import Statics from "../Statics/Statics";
import TopicCart from "../TopicCart/TopicCart";
import Topics from "../Topics/Topics";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/', element: <Root></Root>, children: [
            {
                path: '/', element: <TopicCart></TopicCart>, loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                }
            },
            {
                path: '/topics', element: <TopicCart></TopicCart>, loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                }
            },
            {
                path: '/topic/:topicId', element: <QuizTopic></QuizTopic>, loader: ({ params }) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
                }
            },
           
            { path: '/statics', element: <Statics></Statics> },
            { path: '/blog', element: <Blog></Blog> }
        ]
    }
])