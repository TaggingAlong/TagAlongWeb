function RouteNotImplemented(obj) {
	console.error("RouteNotImplemented:");
	console.error(obj);
}

var Routes = {
	"Default": Media.Default,
	Login: [
		{
			"pattern": "Login\/?$",
			"handler": RouteNotImplemented
		}
	],
	Register: [
		{
			"pattern": "Register\/?$",
			"handler": RouteNotImplemented
		}
	],
	Permissions: [
		{
			"pattern": "Permissions\/?$",
			"handler": RouteNotImplemented
		}
	],
	Media: [
		{
			"pattern": "Media(\/[0-9]+\/?)+$",
			"handler": Media.Get
		}
	],
	Tags: [
		{
			"pattern": "Tags?\/([^\W]\/?)+$",
			"handler": RouteNotImplemented
		}
	],
	User: [
		{
			"pattern": "User\/[^\W]+\/?$",
			"handler": RouteNotImplemented
		},
		{
			"pattern": "User\/id\/[\d]+\/?$",
			"handler": RouteNotImplemented
		}
	],
	Upload: [
		{
			"pattern": "Upload\/?$",
			"handler": RouteNotImplemented
		}
	],
	Update: [
		{
			"pattern": "Update\/[\d]+\/?$",
			"handler": RouteNotImplemented
		}
	],
	Delete: [
		{
			"pattern": "Delete\/[\d]+\/?$",
			"handler": RouteNotImplemented
		}
	],
	Version: [
		{
			"pattern": "Version\/?$",
			"handler": RouteNotImplemented
		}
	]
};
