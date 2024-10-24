import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <section class="h-screen dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="text-primary-600 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl dark:text-white">
            {error || "404"}
          </h1>
          <p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <a
            href="/"
            class="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
