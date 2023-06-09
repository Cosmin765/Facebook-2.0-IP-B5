const SERVER_ADDRESS = 'http://localhost:8084';
const ADS_ADDRESS = 'http://localhost:8085';

async function getRaw(url, method = 'POST', body = null, headers = null) {
  const options = {
    method,
    credentials: 'include', // include cookies in the request
    body,
  };
  if(headers) {
    options.headers = headers;
  }
  const res = await fetch(url, options);
  return res;
}

async function getText(url, method = 'POST', body = null, headers = null) {
  const res = await getRaw(url, method, body, headers);
  const data = await res.text();
  return data;
}

async function getData(url, method = 'POST', body = null, headers = null) {
  const res = await getRaw(url, method, body, headers);
  const data = await res.json();
  return data;
}

let userCache = null;
let lastUpdateUser = 0;
const UPDATE_TIME = 3000;  // 3 seconds

async function getUser() {
  const now = Date.now();
  if(userCache && now - lastUpdateUser < UPDATE_TIME) {
    return userCache;
  }
  userCache = await getData(SERVER_ADDRESS + '/getOwnId', 'GET');
  lastUpdateUser = now;
  return userCache;
}

const usersCache = new Map();
const usersLastUpdateTime = new Map();

async function getUserOther(userId) {
  const now = Date.now();
  const lastUpdateTime = usersLastUpdateTime.get(userId) ?? 0;
  if(usersCache.has(userId) && now - lastUpdateTime < UPDATE_TIME) {
    return usersCache.get(userId);
  }
  var url = new URL(SERVER_ADDRESS + '/user');
  url.searchParams.append('id', userId);
  const user = await getData(url.toString(),'GET');
  usersCache.set(userId, user);
  usersLastUpdateTime.set(userId, now);
  return user;
}

async function getFriends() {
  const url = new URL(SERVER_ADDRESS + '/friends');
  const user = await getUser();
  url.searchParams.append('userId', user.id)
  return await getData(url, 'GET');
}

async function getFriendRequests() {
  const url = new URL(SERVER_ADDRESS + '/friendRequests');
  return await getData(url, 'GET');
}

async function getSuggestions() {
  const url = new URL(SERVER_ADDRESS + '/suggestions?count=4');
  return await getData(url, 'GET');
}

async function addFriend(idReceiver){
  await getData(SERVER_ADDRESS+`/addFriendRequest?id=${idReceiver}&status=pending`,'POST');
}

async function getRecommendedPosts() {
  const url = new URL(SERVER_ADDRESS + '/posts/recommended');
  url.searchParams.set('count', 10);
  url.searchParams.set('cursor', 0);
  const posts = await getData(url, 'POST');
  return posts;
}

async function getUserPosts(userId) {
  const userId2 = parseInt(userId, 10);
  const url = new URL(SERVER_ADDRESS + '/posts/user');
  url.searchParams.set('id', userId);
  const posts = await getData(url, 'GET');
  return posts;
}

const imageCache = new Map();

async function getImage(imageName) {
  if(imageCache.has(imageName)) {
    return imageCache.get(imageName);
  }

  const url = new URL(SERVER_ADDRESS + '/cloudflare/download');
  url.searchParams.set('file', imageName);
  //don't uncomment :(
  //console.log('made req');
  const base64 = await getText(url, 'GET');
  imageCache.set(imageName, base64);
  return base64;
}

async function likePost(postId) {
  const url = new URL(SERVER_ADDRESS + '/likes');
  const user = await getUser();
  url.searchParams.set('userId', user.id);
  url.searchParams.set('postId', postId);
  return await getData(url, 'POST');
}

async function unlikePost(likeId) {
  const url = new URL(SERVER_ADDRESS + '/likes');
  url.searchParams.set('likeId', likeId);
  return await getData(url, 'DELETE');
}

async function getRecommendedAds() {
  const url = new URL(ADS_ADDRESS + '/ads/recommended');
  const user = await getUser();
  url.searchParams.set('userId', user.id);
  return await getData(url, 'GET');
}

async function getFriendRequestsSend() {
  const url = new URL(SERVER_ADDRESS + '/friendRequestsSend');
}
async function setUserLogged(value){
  await getData(SERVER_ADDRESS+`/setLogged?value=${value}`,'POST');
}

async function getLoggedFriends() {
  const url = new URL(SERVER_ADDRESS + '/getLoggedFriends');
  return await getData(url, 'GET');
}

async function getGraphData(userId, level=2) {
  const url = new URL(SERVER_ADDRESS + '/graphReact');
  url.searchParams.set('userId', userId);
  url.searchParams.set('level', level);
  return await getData(url, 'GET');
}

async function createComment(content, postId) {
  const url = new URL(SERVER_ADDRESS + "/createComment");
  const user = await getUser();
  const body = JSON.stringify({
    content,
    userId: user.id,
    postId
  });
  const headers = {
    'content-type': 'application/json'
  }
  return await getRaw(url, 'POST', body, headers);
}

export { 
  SERVER_ADDRESS, 
  getRaw, 
  getData, 
  getUser, 
  getFriends, 
  getFriendRequests, 
  getSuggestions, 
  addFriend,
  getRecommendedPosts,
  getImage,
  likePost,
  unlikePost,
  getRecommendedAds,
  getUserPosts,
  getUserOther,
  getFriendRequestsSend,
  setUserLogged,
  getLoggedFriends,
  getGraphData,
  createComment
};
