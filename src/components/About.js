import React from 'react';

const About = () => {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  return (
    <div className="container-about min-h-0 font-serif mb-5 p-2 mt-20 justify-center justify-items-center text-justify w-4/5 mx-auto">
      <p>
        Book's Library is the world's leading site for book recommendations by
        thought leaders, helping you find the most recommended books for any
        subject.
      </p>
      <p>
        - It includes recommendations for a wide gamut of topics, from startups,
        marketing and finance, through javascript, artificial intelligence and
        bitcoin, to fitness, history and personal development.
      </p>
      <p>
        - Only the very best books are featured on Book's Library. To keep our
        site objective and unbiased, ratings are calculated purely based on
        data. We do not honor requests to feature books, nor are we getting any
        money from publishers or authors
      </p>
    </div>
  );
};

export default About;
