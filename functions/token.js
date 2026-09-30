2026-09-30T19:50:02.074686Z	Cloning repository...
2026-09-30T19:50:03.23657Z	From https://github.com/kingms2911-create/Final-webinar
2026-09-30T19:50:03.23695Z	 * branch            a4165d4913b28063e5f4dc5848022193912a0794 -> FETCH_HEAD
2026-09-30T19:50:03.237062Z	
2026-09-30T19:50:03.256191Z	HEAD is now at a4165d4 Rename token.js to functions/token.js
2026-09-30T19:50:03.256561Z	
2026-09-30T19:50:03.328433Z	
2026-09-30T19:50:03.328858Z	Using v2 root directory strategy
2026-09-30T19:50:03.349917Z	Success: Finished cloning repository files
2026-09-30T19:50:05.38236Z	Checking for configuration in a Wrangler configuration file (BETA)
2026-09-30T19:50:05.382947Z	
2026-09-30T19:50:05.552386Z	No Wrangler configuration file found. Continuing.
2026-09-30T19:50:05.839575Z	Detected the following tools from environment: npm@10.9.2, nodejs@22.16.0
2026-09-30T19:50:05.841045Z	Installing project dependencies: npm install --progress=false
2026-09-30T19:50:07.943641Z	
2026-09-30T19:50:07.943962Z	added 7 packages in 1s
2026-09-30T19:50:07.994413Z	Executing user command: npm install
2026-09-30T19:50:08.620468Z	
2026-09-30T19:50:08.62078Z	up to date in 360ms
2026-09-30T19:50:08.639429Z	Finished
2026-09-30T19:50:09.410803Z	Checking for configuration in a Wrangler configuration file (BETA)
2026-09-30T19:50:09.411481Z	
2026-09-30T19:50:09.591382Z	No Wrangler configuration file found. Continuing.
2026-09-30T19:50:09.592008Z	Found Functions directory at /functions. Uploading.
2026-09-30T19:50:09.597013Z	 ⛅️ wrangler 3.114.17
2026-09-30T19:50:09.597201Z	-------------------
2026-09-30T19:50:10.405049Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 2 errors:[0m
2026-09-30T19:50:10.405497Z	
2026-09-30T19:50:10.405593Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "crypto"[0m
2026-09-30T19:50:10.405662Z	  
2026-09-30T19:50:10.405726Z	      ../node_modules/agora-token/src/AccessToken2.js:1:21:
2026-09-30T19:50:10.405802Z	  [37m      1 │ var crypto = require([32m'crypto'[37m)
2026-09-30T19:50:10.405849Z	          ╵                      [32m~~~~~~~~[0m
2026-09-30T19:50:10.405891Z	  
2026-09-30T19:50:10.405945Z	    The package "crypto" wasn't found on the file system but is built into node. Are you trying to bundle for node? You can use "platform: 'node'" to do that, which will remove this error.
2026-09-30T19:50:10.406003Z	  
2026-09-30T19:50:10.406045Z	  
2026-09-30T19:50:10.406096Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "zlib"[0m
2026-09-30T19:50:10.406135Z	  
2026-09-30T19:50:10.406169Z	      ../node_modules/agora-token/src/AccessToken2.js:2:21:
2026-09-30T19:50:10.406212Z	  [37m      2 │ const zlib = require([32m'zlib'[37m)
2026-09-30T19:50:10.406265Z	          ╵                      [32m~~~~~~[0m
2026-09-30T19:50:10.406317Z	  
2026-09-30T19:50:10.406416Z	    The package "zlib" wasn't found on the file system but is built into node. Are you trying to bundle for node? You can use "platform: 'node'" to do that, which will remove this error.
2026-09-30T19:50:10.406894Z	  
2026-09-30T19:50:10.406979Z	  
2026-09-30T19:50:10.407028Z	
2026-09-30T19:50:10.407067Z	
2026-09-30T19:50:10.411156Z	
2026-09-30T19:50:10.413441Z	[31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mBuild failed with 2 errors:[0m
2026-09-30T19:50:10.41359Z	
2026-09-30T19:50:10.413685Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "crypto"[0m
2026-09-30T19:50:10.413763Z	  
2026-09-30T19:50:10.413825Z	      ../node_modules/agora-token/src/AccessToken2.js:1:21:
2026-09-30T19:50:10.413884Z	  [37m      1 │ var crypto = require([32m'crypto'[37m)
2026-09-30T19:50:10.413946Z	          ╵                      [32m~~~~~~~~[0m
2026-09-30T19:50:10.414Z	  
2026-09-30T19:50:10.414044Z	    The package "crypto" wasn't found on the file system but is built into node.
2026-09-30T19:50:10.414146Z	    - Make sure to prefix the module name with "node:" or update your compatibility_date to 2024-09-23 or later.
2026-09-30T19:50:10.414226Z	    
2026-09-30T19:50:10.414289Z	  
2026-09-30T19:50:10.414343Z	  
2026-09-30T19:50:10.414407Z	  [31m✘ [41;31m[[41;97mERROR[41;31m][0m [1mCould not resolve "zlib"[0m
2026-09-30T19:50:10.414478Z	  
2026-09-30T19:50:10.414543Z	      ../node_modules/agora-token/src/AccessToken2.js:2:21:
2026-09-30T19:50:10.414605Z	  [37m      2 │ const zlib = require([32m'zlib'[37m)
2026-09-30T19:50:10.414663Z	          ╵                      [32m~~~~~~[0m
2026-09-30T19:50:10.414724Z	  
2026-09-30T19:50:10.414787Z	    The package "zlib" wasn't found on the file system but is built into node.
2026-09-30T19:50:10.414865Z	    - Make sure to prefix the module name with "node:" or update your compatibility_date to 2024-09-23 or later.
2026-09-30T19:50:10.414968Z	    
2026-09-30T19:50:10.41506Z	  
2026-09-30T19:50:10.415133Z	  
2026-09-30T19:50:10.415215Z	
2026-09-30T19:50:10.415269Z	
2026-09-30T19:50:10.424159Z	🪵  Logs were written to "/root/.config/.wrangler/logs/wrangler-2026-09-30_19-50-10_094.log"
2026-09-30T19:50:10.500563Z	Failed building Pages Functions.
2026-09-30T19:50:11.366194Z	Failed: generating Pages Functions failed. Check the logs above for more information. If this continues for an unknown reason, contact support: https://cfl.re/3WgEyrH
