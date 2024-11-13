import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <div class="w-full py-4 bg-blue-800 shadow">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
          <div>
            <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
              <li>
                <a
                  class="hover:text-gray-200 hover:underline px-4"
                  href="/list"
                >
                  List
                </a>
              </li>
              <li>
                <a class="hover:text-gray-200 hover:underline px-4" href="#">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="flex items-center text-lg no-underline text-white pr-6">
            <Link class="" href="#">
              <i class="fab fa-facebook">123</i>
            </Link>
            <Link class="pl-6" href="#">
              <i class="fab fa-instagram">234</i>
            </Link>
            <Link class="pl-6" href="#">
              <i class="fab fa-twitter">345</i>
            </Link>
            <Link class="pl-6" href="#">
              <i class="fab fa-linkedin">456</i>
            </Link>
          </div>
        </div>
      </div>

      <div class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
          <a
            class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="#"
          >
            Minimal Blog
          </a>
          <p class="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
        </div>
      </div>

      <nav class="w-full py-4 border-t border-b bg-gray-100">
        <div class="block sm:hidden">
          <a
            href="#"
            class="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
          >
            Topics
          </a>
        </div>
        <div class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
          <div class="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Technology
            </a>
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Automotive
            </a>
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Finance
            </a>
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Politics
            </a>
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Culture
            </a>
            <a href="#" class="hover:bg-gray-400 rounded py-2 px-4 mx-2">
              Sports
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
