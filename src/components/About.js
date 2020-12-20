import React, { useContext } from 'react';
import { ThemeContext } from '../App';
const About = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? '#fff' : 'black',
    color: darkTheme ? 'black' : '#fff',
  };
  return (
    <div
      style={themeStyles}
      className="container-about p-2 w-4/5 mx-auto m-5 justify-center justify-items-center text-justify"
    >
      <p className="font-serif">
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
