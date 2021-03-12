import React from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import { createStream, startStream, stopStream, getAll, getStream } from './api';

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) => {
    if (props.color === 'red')
      return 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)';
    else if (props.color === 'blue')
      return 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)';
    else if (props.color === 'green')
      return 'linear-gradient(45deg, #16bb92 30%, #57ce1b 90%)';
    else return 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)';
  },
  border: 0,
  borderRadius: 3,
  boxShadow: (props) =>
    props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
});
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Wowza = () => {
  const classes = useStyles();
  const player = React.useRef(null);
  const [stream, setStream] = React.useState(null);
  React.useEffect(() => {
    
  }, [player]);

  const handleCreate = async () => {
    const { live_stream } = await createStream();
    console.log('create ', live_stream);
    const { player_hls_playback_url, id, name, source_connection_information } = live_stream;
    setStream({
      hls: player_hls_playback_url,
      id,
      name,
      source: source_connection_information,
    })
  }

  const handleStart = async () => {
    const result = await startStream(stream.id);
    console.log('handleStart ', result);
    setStream({ ...stream, started: true });
  }

  const handleStop = async () => {
    const result = await stopStream(stream.id);
    console.log('handleStart ', result);
    setStream({ ...stream, started: false });
  }

  const handleGetAll = async () => {
    const { live_streams } = await getAll();
    console.log('handleGetAll ', live_streams);
    const { id, name } = live_streams[4];    
    setStream({
      id,
      name,
    })
  }

  const handleGetOne = async () => {
    const { live_stream } = await getStream(stream.id);
    console.log('handleGetOne ', live_stream);
    const { player_hls_playback_url, id, name, source_connection_information } = live_stream;    
    setStream({
      hls: player_hls_playback_url,
      id,
      name,
      source: source_connection_information,
    })
  }

  console.log('stream ', stream);

  return (
    <>
      <Paper elevation={1}>
        <div className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Wowza Streaming
        </Typography>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <MyButton color='blue' onClick={handleGetAll}>Get All</MyButton>
            <MyButton color='blue' onClick={handleGetOne} disabled={!stream}>Get One</MyButton>
            <MyButton color='blue' onClick={handleCreate}>Create</MyButton>
            <MyButton color='green' onClick={handleStart} disabled={!stream}>Start</MyButton>
            <MyButton color='red' onClick={handleStop} disabled={!stream || !stream.started}>Stop</MyButton>
          </ButtonGroup>
        </div>
      </Paper>
      {stream ? <>
      <Paper elevation={1}>
        <Typography variant="h5" gutterBottom>
          {stream.name}
        </Typography>
      </Paper> 
      <Paper elevation={1}>
        <ReactPlayer
          className='react-player'
          ref={player} id="player"
          url={stream.hls}
          width='100%'
          height='100%'
        />
      </Paper></> : null}
    </>
    );
}
export default Wowza;
