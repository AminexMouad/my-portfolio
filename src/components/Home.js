import React from 'react';

function Home() {
  return (
    <main>
      <img
        src='https://images.unsplash.com/photo-1545665277-5937489579f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        alt='Portfolio'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 font-bold cursive leading-non lg:leading-snug home-name'>
          Hello, I'm MOUAD Amine
        </h1>
      </section>
    </main>
  );
}

export default Home;
