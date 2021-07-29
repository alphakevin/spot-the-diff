import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import React from 'react';
import { Picture } from './types';
import './PicView.css';

type Props = {
  pic?: Picture;
}

function PicView(props: Props): JSX.Element {
  const { pic } = props;
  const [merged, setMerged] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [answerShowed, setAnswerShowed] = useState(false);

  useEffect(() => {
    setAnswerShowed(false);
  }, [pic]);

  if (!pic) {
    return (
      <div>
        no pic is selected
      </div>
    )
  }
  const { level, url, title } = pic;
  // the 1.diff.jpg
  const diffUrl = url.replace(/^(\d+)/, '$1.diff');
  return (
    <div className="PicView">
      <div className="header">
        <h1>Level {level} - {title}</h1>
        <Button onClick={() => setMerged(!merged)}>{merged ? 'separate' : 'merge'}</Button>
        <Button onClick={() => setInverted(!inverted)}>{inverted ? 'white' : 'black'}</Button>
        <Button onClick={() => setAnswerShowed(!answerShowed)}>{answerShowed ? 'Hide' : 'Show'} Answer</Button>
      </div>
      <div className={clsx('box', { merged, inverted: merged && inverted })}>
        <div className="pic left">
          <img src={`${process.env.PUBLIC_URL}/pics/${url}`} alt={`Left: ${title}`} />
        </div>
        <div className="pic right">
          <img src={`${process.env.PUBLIC_URL}/pics/${url}`} alt={`Right: ${title}`} />
        </div>
      </div>
      <div className={clsx('answer', { showed: answerShowed })}>
        <img src={`${process.env.PUBLIC_URL}/pics/${diffUrl}`} alt={`Answer to: ${title}`} />
      </div>
    </div>
  )
}

export default PicView;
