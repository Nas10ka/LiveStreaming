import React from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import ReactPlayer from 'react-player'
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import { 
  createStream, startStream, stopStream, 
  getAll, getStream, patchStream, getStreamState,
  checkVideo,
} from './api';
// https://api.docs.cloud.wowza.com/current/tag/live_streams/#operation/createLiveStream

const LIVE_STREAM_STATES = {
  STOPPED: 'stopped',
  RESETING: 'resetting',
  STARTING: 'starting',
  STARTED: 'started',
}
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
  textTransform: 'none',
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
    const {
      player_hls_playback_url,
      id, 
      name, 
      source_connection_information,
      player_embed_code,
      player_id,
    } = live_stream;
    setStream({
      hls: player_hls_playback_url,
      id,
      name,
      source: source_connection_information,
      embed: player_embed_code,
      player: player_id,
    })
  }

  const handleStart = async () => {
    const result = await startStream(stream.id);
    console.log('handleStart ', result);
    // setStream({ ...stream, started: true });
  }

  const handleStop = async () => {
    const result = await stopStream(stream.id);
    console.log('handleStart ', result);
    setStream({ ...stream, started: false, state: result.state });
  }

  const handleGetAll = async () => {
    const { live_streams } = await getAll();
    console.log('handleGetAll ', live_streams);
    const { id, name } = live_streams[3];    
    setStream({
      ...stream,
      id,
      name,
    })
  }

  const getLiveState = async () => {
    const { live_stream } = await getStreamState(stream.id);
    console.log('GET State ', live_stream.state, live_stream);
    setStream({
      ...stream, state: live_stream?.state,
    })
  }

  const handleGetOne = async () => {
    const { live_stream } = await getStream(stream.id);
    console.log('handleGetOne ', live_stream);
    const { 
      player_hls_playback_url, id, name, source_connection_information,
      player_embed_code,
      player_id,
      stream_targets,
    } = live_stream;    
    setStream({
      hls: player_hls_playback_url,
      id,
      name,
      source: source_connection_information,
      embed: player_embed_code,
      player: player_id,
      tr: stream_targets[0]?.id,
    })
  }

  const handleUpdate = async () => {
    const result = await patchStream(stream.id, 
      { "live_stream": { "disable_authentication": true }});
    console.log('handleUpdate', result);
  }

  const refreshPlayer = (started) => {
    console.log('Refresh Player ', started)
    setStream({ ...stream, started });
  }

  const getVideoStreamState = async () => {
    // const result = await getVideoStream(stream.hls);
    // console.log('getVideoStreamState', result);
    window.player = player;
    console.log('player ',player);
    const started = await checkVideo(stream.hls);
    refreshPlayer(started);
 
  }

  return (
    <>
      <Paper elevation={1}>
        <div className={classes.root}>
        <Typography variant="h3" gutterBottom>
          Wowza Streaming
        </Typography>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <MyButton color='blue' onClick={handleGetAll}>Get All</MyButton>
            <MyButton color='green' onClick={handleGetOne} disabled={!stream}>Get One</MyButton>
            <MyButton color='red' onClick={handleUpdate} disabled={!stream}>Update Stream</MyButton>
            <MyButton color='blue' onClick={handleCreate}>Create</MyButton>
            <MyButton color='green' onClick={handleStart} disabled={!stream || stream.state !== LIVE_STREAM_STATES.STOPPED}>Start</MyButton>
            <MyButton color='red' onClick={handleStop} disabled={!stream || !stream.started || stream.state === LIVE_STREAM_STATES.STOPPED}>Stop</MyButton>
            <MyButton color='blue' onClick={getLiveState} disabled={!stream}>Get Live State</MyButton>
            <MyButton color='blue' onClick={refreshPlayer} disabled={!stream}>Refresh</MyButton>
            <MyButton color='blue' onClick={getVideoStreamState} disabled={!stream}>getVideoStream</MyButton>
          </ButtonGroup>
        </div>
      </Paper>
      {stream ? <>
        <Paper elevation={1}>
          <Typography variant="h5" gutterBottom>
            {stream.name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {stream.source?.primary_server}/{stream.source?.stream_name}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {stream.hls}
          </Typography>
        </Paper> 
        {stream.hls &&
          <Paper>
          </Paper>}
        {stream.state === LIVE_STREAM_STATES.STARTED && stream.started?
          <Paper elevation={1}>
            <ReactPlayer
              className='react-player'
              ref={player}
              id="player"
              url={stream.hls}
              width='100%'
              height='100%'
            />
          </Paper>
        : null} 
        </> 
      : null}
    </>
    );
}
export default Wowza;
