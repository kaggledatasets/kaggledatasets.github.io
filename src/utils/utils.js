const getOS = () => {
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

export default getOS;