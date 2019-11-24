let WheelLink = null, Version = null;
const PYPI_URL = 'https://pypi.org/pypi/kaggledatasets/json';

function getOS() {
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

async function getPipInfo() {
  const res = await fetch(PYPI_URL);
  const data = await res.json();
  return {'wheelLink': data.urls[0].url, 'version': data.info.version};
}

function updateBuild(val) {
    // TODO: Adding support for nightly builds as well :)
    $('#build-nightly').removeClass('focus'); $('#build-stable').addClass('focus'); 
    $('#code-snippet').html(getCommand());
}

function updateOS(val) {
    val === 'linux' ? 
        ($('#os-mac').removeClass('focus'), $('#os-windows').removeClass('focus'), $('#os-linux').addClass('focus')) :
        val === 'mac' ? 
            ($('#os-linux').removeClass('focus'), $('#os-windows').removeClass('focus'), $('#os-mac').addClass('focus')) :
            ($('#os-linux').removeClass('focus'), $('#os-mac').removeClass('focus'), $('#os-windows').addClass('focus'));
    $('#code-snippet').html(getCommand());
}

function updatePkg(val) {
    val === 'conda' ? 
        ($('#pkg-pip').removeClass('focus'), $('#pkg-source').removeClass('focus'), $('#pkg-conda').addClass('focus')) :
        val === 'pip' ? 
            ($('#pkg-conda').removeClass('focus'), $('#pkg-source').removeClass('focus'), $('#pkg-pip').addClass('focus')) :
            ($('#pkg-conda').removeClass('focus'), $('#pkg-pip').removeClass('focus'), $('#pkg-source').addClass('focus'));
    $('#code-snippet').html(getCommand());
}

function getBuild() {
    return $('#build-stable').hasClass('focus') ? 'stable' : 'nightly';
}

function getOS() {
    return $('#os-linux').hasClass('focus') ? 'linux' : $('#os-mac').hasClass('focus') ? 'mac' : 'windows';
}

function getPkg() {
    return $('#pkg-pip').hasClass('focus') ? 'pip' : $('#pkg-conda').hasClass('focus') ? 'conda' : 'source';
}

function getCommand() {
    let name = 'kaggledatasets',
        pkg = getPkg(), os = getOS(), build = getBuild(),
        postfix = pkg === 'conda' ? ` -c ${name}`:'';
    if (pkg === 'source') {
        return `# Follow instructions at this URL: https://github.com/${name}/${name}#from-source`
    }
    if (os === 'mac') {
        if (pkg === 'pip') {
            return `${pkg} install ${name}==${Version}${postfix}`;
        }
        return `${pkg} install ${name}${postfix}`;
    } else if (os === 'linux') {
        return `${pkg} install ${name}${postfix}`;
    } else if (os === 'windows') {
        // let wheelLink = getPipInfo().then(res => { return res.wheelLink });
        // console.log(wheelLink);
        if (pkg === 'pip') {
            return `${pkg} install ${name}${postfix} -f ${WheelLink}`;
        }
        return `${pkg} install ${name}${postfix}`;
    }
}

// On Page Load Default Actions
getPipInfo().then(res => {
    WheelLink = res.wheelLink; Version = res.version;
    $('#build-stable').html(`Stable (${res.version})`).addClass('focus');
});
updateOS(getOS());
updatePkg('conda');
$('#code-snippet').html(getCommand());