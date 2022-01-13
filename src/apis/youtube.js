import axios from 'axios';

const KEY = 'AIzaSyCNUV3MswdKIDr4yWcwM8zjt8eEufvImYA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

