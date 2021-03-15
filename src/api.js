import { wowza_access_key, wowza_api_key, wowza_host, wowza_version } from './keys';

const wowza_headers = {
  'Content-Type' : 'application/json',
  'wsc-api-key': wowza_api_key,
  'wsc-access-key': wowza_access_key,
}
const live_streams_url = `${wowza_host}/api/${wowza_version}/live_streams`;

const end_points = {
  create_live_stream: {
    url: () => `${live_streams_url}`,
    method: 'POST'
  },
  start_live_stream: {
    url: (live_stream_id) => `${live_streams_url}/${live_stream_id}/start`,
    method: 'PUT'
  },
  get_live_stream: {
    url: (live_stream_id) => `${live_streams_url}/${live_stream_id}`,
    method: 'GET'
  },
  stop_live_stream: {
    url: (live_stream_id) => `${live_streams_url}/${live_stream_id}/stop`,
    method: 'PUT'
  },
  update_live_stream: {
    url: (live_stream_id) => `${live_streams_url}/${live_stream_id}`,
    method: 'PATCH'
  },
  get_all_streams: {
    url: () => `${live_streams_url}`,
    method: 'GET'
  },
  get_live_state: {
    url: (live_stream_id) => `${live_streams_url}/${live_stream_id}/state`,
    method: 'GET',
  },
  get_video_stream: {
    url: url => url,
    method: 'GET',
  }

}

const getResponse = async (url, method, body) => {
  const params = {
    method,
    headers: wowza_headers,
  }
  if (body) params.body = JSON.stringify(body);
  const response = await fetch(url, params);
  const result = await response.json();
  return result;
}

const live_stream_body =  {
  "live_stream": {
    "aspect_ratio_height": 1080,
    "aspect_ratio_width": 1920,
    "billing_mode": "pay_as_you_go",
    "broadcast_location": "us_west_california", // region?
    "closed_caption_type": "none",
    "delivery_method": "push", // pull = source_url is required
    "encoder": "other_rtmp", // stream encoder
    "hosted_page": true,
    "hosted_page_sharing_icons": true,
    "name": "MyLiveStream", // stream name (maximum 200 characters)
    "player_responsive": true,
    "player_type": "wowza_player",
    "transcoder_type": "transcoded",
    "recording": true, // false
    "player_video_poster_image": 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
    "disable_authentication": true,
  }
};

export const createStream = () => {
  const { url, method } = end_points.create_live_stream;
  return getResponse(url(), method, live_stream_body);
}

export const startStream = (id) => {
  const { url, method } = end_points.start_live_stream;
  return getResponse(url(id), method);
}

export const getAll = () => {
  const { url, method } = end_points.get_all_streams;
  return getResponse(url(), method);
}

export const stopStream = (id) => {
  const { url, method } = end_points.stop_live_stream;
  return getResponse(url(id), method);
}

export const getStream = (id) => {
  const { url, method } = end_points.get_live_stream;
  return getResponse(url(id), method);
}

export const patchStream = (id, body) => {
  const { url, method } = end_points.update_live_stream;
  return getResponse(url(id), method, body);
} 

export const getStreamState = (id) => {
  const { url, method } = end_points.get_live_state;
  return getResponse(url(id), method);
}
export const getVideoStream = (link) => {
  const { url, method } = end_points.get_video_stream;
  return getResponse(url(link), method);
}

export const checkVideo = async url => {
  try {
    const resp = await fetch(url, {
      headers: {
        //'Content-Type' : 'application/json',
        // "Cache-Control": "no-cache",
        //"Access-Control-Allow-Origin": "*",
      },
      method: 'GET'
    });
    console.log('check video result ', resp.ok, resp.status);
    return resp.status === 200 || resp.ok;
  } catch (e) {
    console.log('check video error ', e);
    return false;
  }
}