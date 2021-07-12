function getCookie(cookieName)
{
	var cookies = document.cookie.split('|');
			
	for (var i = 0; i < cookies.length; i++)
		if (cookies[i].split(':')[0] == cookieName)
			return cookies[i].split(":")[1];
			
	return null;
}
		
function setCookie(cookieName, value)
{
	var cookies = document.cookie.split('|');
	var foundCookie = cookieExists(cookieName);
			
	if (foundCookie)
	{
		for (var i = 0; i < cookies.length; i++)
			if (cookies[i].split(':')[0] == cookieName)
				cookies[i] = cookieName + ":" + value;
						
		document.cookie = cookies.join('|');
	}
	else
		createCookie(cookieName, value);
}

function deleteCookie(cookieName)
{
	if (cookieExists(cookieName))
	{
		var cookies = document.cookie.split('|');
		
		var index = indexOfCookie(cookieName);
		
		if (index != null)
			if (cookies.length < 2)
				cookies = [];
			else
				cookies.splice(index, 1);
			
		document.cookie = cookies.join('|');
	}
}
		
function createCookie(cookieName, value)
{
	var cookies = document.cookie.split('|');
			
	if (!cookieExists(cookieName))
	{
		if (cookies[0] == "")
			cookies.splice(0, 1);
			
		cookies.push(cookieName + ":" + value);
		document.cookie = cookies.join('|');
	}
	else
		setCookie(cookieName, value);
}
		
function cookieExists(cookieName)
{
	var cookies = document.cookie.split('|');
			
	for (var i = 0; i < cookies.length; i++)
		if (cookies[i].split(':')[0] == cookieName)
			return true;
						
	return false;
}

function indexOfCookie(cookieName)
{
	var cookies = document.cookie.split('|');
	
	for (var i = 0; i < cookies.length; i++)
	{
		if (cookies[i].split(':')[0] == cookieName)
			return i;
	}
	
	return null;
}
