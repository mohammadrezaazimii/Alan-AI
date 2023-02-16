import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useState } from "react";
import NewsCards from "./newsCards/NewsCards";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "f5a070b049ee3eade1aff5f0cd7009622e956eca572e1d8b807a3e2338fdd0dc/stage";
const AlanAI = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    const alanBtnInstance = alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        console.log(articles);
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2 ? wordsToNumbers(number,{fuzzy:true}) : number;
           const article = articles[parsedNumber - 1];
           if(parsedNumber>20){
            alanBtnInstance?.playText('Please try that again.')
           }else if(article){
             window.open(article.url, '_blank');
             alanBtnInstance?.playText('Opening ...');
           }
        }
      },
      rootEl: document.getElementById("alan-btn"),
    });
    return () => {
      alanBtnInstance.remove();
    };
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Alan AI News Application
      </h1>
              <NewsCards articles={newsArticles} activeArticle={activeArticle} />             
    </div>
  );
};

export default AlanAI;
