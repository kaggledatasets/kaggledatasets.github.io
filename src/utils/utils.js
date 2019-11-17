import fetch from 'node-fetch';

const PYPI_URL = 'https://pypi.org/pypi/kaggledatasets/json';

export const getOS = () => {
  let platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    os = 'linux';

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac';
  }  else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  }  else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }

  return os;
}

export async function getPipInfo() {
  const res = await fetch(PYPI_URL);
  const data = await res.json();
  return {'wheelLink': data.urls[0].url, 'version': data.info.version};
}

export default {getOS, getPipInfo};