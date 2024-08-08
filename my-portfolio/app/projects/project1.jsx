'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Project1() {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <>
      <Head>
        <title>Project 1</title>
      </Head>
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Project 1</h1>
          <p className="mt-4">This is a detailed description of Project 1.</p>
          <button
            onClick={() => router.push('/projects')}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Back to Projects
          </button>
        </motion.div>
      </div>
    </>
  );
}
