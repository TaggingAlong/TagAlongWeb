var Strings = {
	searchSuggestions: [
		"Enter tags...",
		"What are you looking for ?",
		"I've come to serve you."
	]
}

var Utils = {
	ClearContent: function() {$("div.content").html("");},
	ClearTags: function() {$("ul.tags").html("");},
	SearchSuggest: function() {
		return(Strings.searchSuggestions[Math.floor(Math.random() * 100, 1)
			% Strings.searchSuggestions.length]);
	}
}