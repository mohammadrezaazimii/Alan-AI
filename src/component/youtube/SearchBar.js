import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import "./SearchBar.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { BiMicrophone } from "react-icons/bi";
import { GiOldMicrophone } from "react-icons/gi";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("برنامه نویسی");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const { finalTranscript, resetTranscript } = useSpeechRecognition();
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    if (finalTranscript !== "") {
      // User has finished speaking, so add speech to the input
      setTerm(`${term} ${finalTranscript}`);
      // Create a fresh transcript to avoid the same transcript being appended multiple times
      resetTranscript();
    }
  }, [finalTranscript, resetTranscript]);

  useEffect(() => {
    const setTimeoutID = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(setTimeoutID);
    };
  }, [term]);
  const keydownHandler = (e) => {
    if (e.keyCode === 8 && e.ctrlKey) {
      setTerm("");
    }
    if (e.keyCode === 13 && e.ctrlKey) {
      SpeechRecognition.startListening({ language: "fa" });
    } else if (e.keyCode === 220 && e.ctrlKey)
      SpeechRecognition.stopListening();
  };
  useEffect(() => {
    if (debouncedTerm != "") onTermSubmit(debouncedTerm);
  }, [debouncedTerm]);

  useEffect(() => {
    document.addEventListener("keyup", keydownHandler);
  }, []);

  const onChange = (e) => {
    setTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    onTermSubmit(term);
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <span style={{ textAlign: "right" }}>
        مرورگر شما این قابلیت تبدیل صوت به متن را پشتیبانی نمی کند
      </span>
    );
  }
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <div className="details-microphone">
            <p>
              Microphone :
              {listening ? (
                <span style={{ color: "green" }}>On</span>
              ) : (
                <span style={{ color: "red" }}>Off</span>
              )}{" "}
            </p>
            <p style={{ textAlign: "center" }}>با صدای خود جستجو کنید</p>
          </div>

          <input
            style={{ textAlign: "right", fontFamily: "IranianSans" }}
            type="text"
            value={term}
            onChange={onChange}
          />
        </div>
        <button
          className="startBTN"
          onClick={SpeechRecognition.startListening}
          variant="contained"
          color="success"
        >
          <BiMicrophone style={{fontSize:'30px'}}/>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
