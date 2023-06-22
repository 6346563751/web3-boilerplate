import Image from 'next/image'

import MyComponent from "../components/modal";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <nav class="border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
              <span class="self-center text-2xl font-semibold whitespace-nowrap">Boilerplate</span>
          </a>
          <div class="w-full md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col rounded-lg flex-row space-x-8">
              <li>
                <MyComponent />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  )
}
