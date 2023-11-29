import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Layout } from './home/Layout.tsx';
import { IncarcaFisier } from './guest/IncarcaFisier.tsx';
import { SignIn } from './utilizator/sign-in/SignIn.tsx';
import Error404Page from '../components/404.page.tsx';
import { Home } from './home/home.tsx';
import { SignUp } from './utilizator/sign-up/SignUp.tsx';

export const AppRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: 'sign-in',
    element: <SignIn />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
  {
    path: 'guest',
    element: <IncarcaFisier />,
  },
  {
    path: '*',
    element: <Error404Page />,
  },
];

export const router = createBrowserRouter(AppRoutes);
