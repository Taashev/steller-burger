// get cookie
export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

// set cookie
export function setCookie(name, value, props={}) {
	let { expires } = props;

	if (typeof expires === 'number' && expires) {
		const d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = d;
	}
	if (expires && expires.toUTCString) {
		props.expires = expires.toUTCString();
	}
	value = encodeURIComponent(value);
	let updateCookie = `${name}=${value}`;
	for (const propName in props) {
		updateCookie += `; ${propName}`;
		const propValue = props[propName];
		if (propValue !== true) {
			updateCookie += `=${propValue}`;
		}
	}
	document.cookie = updateCookie;
};
