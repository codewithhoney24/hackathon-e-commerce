import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import FollowUsSection from '../components/Topheader';

const LoginPage = () => {
  return (
    <>
      <FollowUsSection />
      <Navbar />
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 sm:p-10 border border-[#E5E5E5]">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#252B42] mb-2">Welcome Back</h2>
            <p className="text-[#737373] text-sm">Please sign in to your account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-[#252B42] mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] bg-[#F9F9F9] focus:outline-none focus:border-[#23A6F0] focus:ring-1 focus:ring-[#23A6F0] transition-colors"
                placeholder="name@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-[#252B42] mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] bg-[#F9F9F9] focus:outline-none focus:border-[#23A6F0] focus:ring-1 focus:ring-[#23A6F0] transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-[#737373] cursor-pointer">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-[#23A6F0] focus:ring-[#23A6F0]" />
                Remember me
              </label>
              <a href="#" className="text-[#23A6F0] font-bold hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#23A6F0] text-white font-bold py-3 rounded-md hover:bg-blue-500 transition-colors"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-[#737373]">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-[#23A6F0] font-bold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;