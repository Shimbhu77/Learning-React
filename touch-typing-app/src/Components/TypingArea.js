import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  updateTypedText,
  updateTypingSpeed,
  updateTypingAccuracy,
} from '../Redux/actions';

const TypingArea = ({
  typedText,
  typingSpeed,
  typingAccuracy,
  updateTypedText,
  updateTypingSpeed,
  updateTypingAccuracy,
}) => {
  useEffect(() => {
    // Calculate typing speed and accuracy
    // Update Redux state with typing speed and accuracy
    
  }, [typedText]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    updateTypedText(text);
  };

  return (
    <div>
      <textarea value={typedText} onChange={handleInputChange} />
      <p>Typing Speed: {typingSpeed} WPM</p>
      <p>Typing Accuracy: {typingAccuracy}%</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  typedText: state.typedText,
  typingSpeed: state.typingSpeed,
  typingAccuracy: state.typingAccuracy,
});

const mapDispatchToProps = {
  updateTypedText,
  updateTypingSpeed,
  updateTypingAccuracy,
};

export default connect(mapStateToProps, mapDispatchToProps)(TypingArea);
