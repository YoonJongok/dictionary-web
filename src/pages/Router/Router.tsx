import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Home from '../Home';

export const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Layout>
  );
};

