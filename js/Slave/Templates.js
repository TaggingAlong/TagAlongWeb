var Templates = {
	ThumbnailLink: function(obj) {
		return ('<a href="#/Media/'+obj.file_id+'" class="thumbnail"> \
			<img src="./'+obj.file_thumb+'" class="thumbnail" /> \
			</a>');
	},
	TagList: function (obj) {
		var hash = window.location.hash.match(/^#\/Tag(\/[^\W]+)+/i);
		
		if (hash == null)
			hash = "";
		else
			hash = '<a href="'+hash[0].concat("/"+obj.tag)+'" class="append-tag">+</a>';
		console.log(hash);
		return (hash + '<li class="tags" id="'+obj.tag+'"> \
		<a href="#/Tag/'+obj.tag+'/" class="tag"> \
		'+obj.tag+' ('+obj.count+') \
		</a></li>');
	},
	ShowMedia: function(obj) {
		return ('<img src="./'+obj.file_path+'" />');
	},
	HTMLComment: function(obj) {
		return ("<!--\n"+JSON.stringify(obj)+"\n-->");
	}
};
