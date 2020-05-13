export const resource = {
    "kind": "youtube#liveBroadcast",
    "etag": '',
    "id": 'my-first-live-broadcast',
    "snippet": {
      "publishedAt": Date.now,
    //   "channelId": string,
      "title": 'My first broadcast',
      "description": 'Desciption of my first broadcast',
      "scheduledStartTime": Date.now + 10000,
      "scheduledEndTime": Date.now + 1000000,
      "actualStartTime": Date.now,
      "actualEndTime": Date.now + 1200000,
      "isDefaultBroadcast": true,
    },
  };