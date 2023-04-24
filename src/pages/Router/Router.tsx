import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Dictionary from '../Dictionary';

export const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dictionary />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Layout>
  );
};

