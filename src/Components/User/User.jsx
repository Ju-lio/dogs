import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserStats from './UserStats';
import UserPhotoPost from './UserPhotoPost';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/postar" element={<UserPhotoPost />} />
        <Route path="/estatisticas" element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default User;
