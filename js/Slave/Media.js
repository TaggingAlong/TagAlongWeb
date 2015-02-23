var Media = {
	"_media": null,
	"Default": function () {
		Media.Get();
	},
	"Get": function (obj) {
		var req = typeof(obj) === "undefined" ? "" : obj.data.join("/");
		var tags = {};
		var obj;
		$.ajax({url: "./Media/" + req, type: "GET", dataType: "JSON"}).done(function(data) {
			for (i in data) {
				obj = data[i];
				if (req === "")
					$("div.content").append(Templates.ThumbnailLink(obj));
				else
					$("div.content").append(Templates.ShowMedia(obj));
				for (t in obj["file_tags"])
					obj.file_tags[t] in tags ? tags[obj.file_tags[t]] += 1 : tags[obj.file_tags[t]] = 1;
			}
			Media._media = data;
		}).complete(function() {
			for (i in tags)
				$("ul.tags").append(Templates.TagList({"tag": i, "count": tags[i]}));
		});
	}
};