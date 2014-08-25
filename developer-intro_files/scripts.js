var QueryString = function () {
			  // This function is anonymous, is executed immediately and
			  // the return value is assigned to QueryString!
			  var query_string = {};
			  var query = window.location.search.substring(1);
			  var vars = query.split("&");
			  for (var i=0;i<vars.length;i++) {
				var pair = vars[i].split("=");
					// If first entry with this name
				if (typeof query_string[pair[0]] === "undefined") {
				  query_string[pair[0]] = pair[1];
					// If second entry with this name
				} else if (typeof query_string[pair[0]] === "string") {
				  var arr = [ query_string[pair[0]], pair[1] ];
				  query_string[pair[0]] = arr;
					// If third or later entry with this name
				} else {
				  query_string[pair[0]].push(pair[1]);
				}
			  }
				return query_string;
			} ();


			function urldecode(str) {
			  //       discuss at: http://phpjs.org/functions/urldecode/
			  //      original by: Philip Peterson
			  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			  //      improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			  //      improved by: Brett Zamir (http://brett-zamir.me)
			  //      improved by: Lars Fischer
			  //      improved by: Orlando
			  //      improved by: Brett Zamir (http://brett-zamir.me)
			  //      improved by: Brett Zamir (http://brett-zamir.me)
			  //         input by: AJ
			  //         input by: travc
			  //         input by: Brett Zamir (http://brett-zamir.me)
			  //         input by: Ratheous
			  //         input by: e-mike
			  //         input by: lovio
			  //      bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
			  //      bugfixed by: Rob
			  // reimplemented by: Brett Zamir (http://brett-zamir.me)
			  //             note: info on what encoding functions to use from: http://xkr.us/articles/javascript/encode-compare/
			  //             note: Please be aware that this function expects to decode from UTF-8 encoded strings, as found on
			  //             note: pages served as UTF-8
			  //        example 1: urldecode('Kevin+van+Zonneveld%21');
			  //        returns 1: 'Kevin van Zonneveld!'
			  //        example 2: urldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
			  //        returns 2: 'http://kevin.vanzonneveld.net/'
			  //        example 3: urldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
			  //        returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
			  //        example 4: urldecode('%E5%A5%BD%3_4');
			  //        returns 4: '\u597d%3_4'

			  return decodeURIComponent((str + '')
				.replace(/%(?![\da-f]{2})/gi, function () {
				  // PHP tolerates poorly formed escape sequences
				  return '%25';
				})
				.replace(/\+/g, '%20'));
			}

			$(document).ready(function() {
				$('#param_name').html(urldecode(QueryString.n));
				$('#param_neighbor').html(urldecode(QueryString.nb));
				$('#param_neighbor_type').html(urldecode(QueryString.nbt));
				$('#param_city').html(urldecode(QueryString.c));
				$('#param_email').html(urldecode(QueryString.e));
				$('#param_buddy').html(urldecode(QueryString.b));
				
				
				$('#param_role').html(urldecode(QueryString.r));
				if (QueryString.d) {
					$('#' + QueryString.d).show();
					console.log('turn on dept section');
				}
				if (QueryString.r) {
					$('#' + QueryString.r).show();
					console.log('turn on role section');
				}
				$('#param_email_link').attr("href", "mailto:"+urldecode(QueryString.e));
				$('#param_img').attr("src", "./imgs/"+urldecode(QueryString.img));

			});