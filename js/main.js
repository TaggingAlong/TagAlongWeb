var hash;

function GetRoutes() {
}

function LoadHash() {
	var str_hash = window.location.hash.replace(/^\#\//, "");
	var arr_hash = str_hash.split("/");
	
	hash = {
		"array": arr_hash,
		"string": str_hash,
		"route": arr_hash[0],
		"data": arr_hash.slice(1)
	};
	
	Utils.ClearContent();
	Utils.ClearTags();
	
	if (hash.string === "")
		Routes.Default();
	else if (hash.route in Routes)
		for (i in Routes[hash.route])
			if (hash.string.match(new RegExp(Routes[hash.route][i]["pattern"], "i" )) !== null) {
				Routes[hash.array[0]][i].handler(hash);
				return (true);
			}
	return (false)
}

$(document).ready(function() {
	$(window).on("hashchange", LoadHash);
	
	if (window.location.hash.length > 1) {
		LoadHash();
	}
	else {
		Routes.Default();
	}
	
	$("input.search")[0].placeholder = Utils.SearchSuggest()
});