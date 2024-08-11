// typewriter effect adapted from: https://www.tutorialspoint.com/typing-and-deleting-effect-with-javascript-and-css 

import React, { useState, useEffect, useMemo } from 'react';
import './TypeWriter.css';

const Typewriter = ({ isDarkMode }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const sentenceToType = useMemo(() => [
    "Sangyu is a creative technologist based in Brooklyn, NY.",
    "Check out some projects she made!",
    "Welcome~"
  ], []);

  useEffect(() => {
    let timeout;

    const typeNow = () => {
      const text = sentenceToType[currentSentenceIndex];
      if (currentText !== text) {
        setCurrentText(text.substring(0, currentText.length + 1));
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    };

    const deleteNow = () => {
      if (currentText !== '') {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      } else {
        timeout = setTimeout(() => {
          setCurrentSentenceIndex((prevIndex) =>
            (prevIndex + 1) % sentenceToType.length
          );
          setIsTyping(true);
        }, 1000);
      }
    };

    if (isTyping) {
      const typingInterval = setInterval(typeNow, 100);
      return () => {
        clearInterval(typingInterval);
        clearTimeout(timeout);
      };
    } else {
      const deletingInterval = setInterval(deleteNow, 50);
      return () => {
        clearInterval(deletingInterval);
        clearTimeout(timeout);
      };
    }
  }, [currentText, currentSentenceIndex, isTyping, sentenceToType]);

  return (
    <div className="typing-container">
      <span id="typing">{currentText}</span>
      <span
        className="cursor"
        style={{
          animation: isTyping ? 'none' : 'blink 1.2s infinite',
          backgroundColor: isDarkMode ? 'white' : 'black'
        }}
      />
    </div>
  );
};

export default Typewriter;
