import React, { useState, useEffect, createRef } from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import imgUrl from "../../../images/news.jpg";
import styles from "./NewsCard.module.css";

const NewsCard = ({ article, index, activeArticle }) => {
  const { description, publishedAt, source, title, url, urlToImage } = article;
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => {
    return window.scroll(0, ref?.current?.offsetTop - 50);
  };

  useEffect(() => {
    window.scroll(0, 0);
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => createRef())
    );
  }, []);
  useEffect(() => {
    if (index === activeArticle) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [index, activeArticle, elRefs]);

  return (
    <Card
      ref={elRefs[index]}
      className={
        index === activeArticle
          ? `${styles.card} ${styles.activeCard}`
          : `${styles.card}`
      }
    >
      <CardActionArea href={url} target="_blank">
        <CardMedia className={styles.media} image={urlToImage || imgUrl} />
        <div className={styles.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
        <Typography className={styles.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.cardActions}>
        <Button size="small" color="primary" href={url} >
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
