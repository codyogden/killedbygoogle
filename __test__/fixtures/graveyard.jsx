import { format } from 'date-fns';

var now = new Date();
var dateFormat = 'yyyy-MM-dd';

export const willDieInFuture = [{
    "dateClose": format(now.setDate(now.getDate() + 14), dateFormat),
    "dateOpen": format(now.setDate(now.getDate() - 100), dateFormat),
    "description": "Fabric was a platform that helped mobile teams build better apps, understand their users, and grow their business.",
    "link": "https://get.fabric.io/roadmap",
    "name": "Fabric"
}];

export const diedInPast = [{
    "dateClose": format(now.setDate(now.getDate() - 366), dateFormat),
    "dateOpen": format(now.setDate(now.getDate() - 3 * 366), dateFormat),
    "description": "The Nexus One (codenamed HTC Passion) is an Android smartphone designed and manufactured by HTC as Google's first Nexus smartphone.",
    "link": "https://en.wikipedia.org/wiki/Nexus_One",
    "name": "Google Nexus One"
}, {
    "dateClose": format(now.setDate(now.getDate() - 2 * 366), dateFormat),
    "dateOpen": format(now.setDate(now.getDate() - 4 * 366), dateFormat),
    "description": "Orkut was a social network designed to help users meet new and old friends and maintain existing relationships.",
    "link": "https://en.wikipedia.org/wiki/Orkut",
    "name": "Orkut"
  }, {
    "dateClose": format(now.setDate(now.getDate() - 3 * 366), dateFormat),
    "dateOpen": format(now.setDate(now.getDate() - 6 * 366), dateFormat),
    "description": "Google Deskbar was a small inset window on the Windows toolbar and lets users perform searches without leaving desktop.",
    "link": "https://www.computerweekly.com/news/2240053391/Google-launches-Deskbar-software",
    "name": "Google Deskbar"
}];