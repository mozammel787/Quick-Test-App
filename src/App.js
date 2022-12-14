import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Contact from './Components/Contact/Contact';
import QuizPage from "./Components/QuizPage/QuizPage";
import Statistics from "./Components/Statistics/Statistics";
import Error from "./Components/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          }, element: <Statistics></Statistics>
        },
        { path: 'blog', element: <Blog></Blog> },
        { path: 'contact', element: <Contact></Contact> },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizPage></QuizPage>
        },
      ], element: <Main></Main>
    },
    { path: '/*', element: <Error></Error> }

  ])

  return (
    <div data-theme="light">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
