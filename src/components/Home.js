import React from 'react';
import uuid from 'react-uuid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    marginRight: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Home = ({ books }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="flex flex-wrap min-h-0 mb-5 items-center justify-center mt-16 w-4/5 mx-auto">
      {books.map((book) => {
        const { author, country, imageLink, pages, link, title, year } = book;
        return (
          <div
            key={uuid()}
            className="bg-orange-600 w-48 m-3 rounded-lg shadow-2xl overflow-hidden"
          >
            <div>
              <img
                className="object-fit h-52 w-full overflow-hidden"
                src={imageLink}
                alt={author}
              />
            </div>
            <div className="p-2">
              <h1 className="text-xl overflow-hidden">Author: {author}</h1>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <a href={link} rel="noreferrer" target="_blank">
                  <p className="font-bold text-purple-900  text-xl">
                    Title: {title}
                  </p>
                </a>
                <div className="font-black">
                  <span>Year-{year} </span>
                  <span>Country-{country} </span>
                  <span>Pages-{pages}</span>
                </div>
              </Collapse>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
