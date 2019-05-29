var path = require('path');

module.exports = {
    src_path : path.join(__dirname, '..', 'source'),
	trg_path : path.join(__dirname, '..', 'docs'),
	tasks : {
        css : {
			public : {
				'styles' : null
			}
		},
		js : {
			public : {
				// 'scripts' : null
			}
		},
		svg: {
			common: {
				'sprite': null
			}
		}
	},
	browser_sync : {
		proxy: {
			target: "zoon-test.local"
		},
		open: false
	}
};