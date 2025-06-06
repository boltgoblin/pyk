

const scriptsInEvents = {

	async Eportals_Event2_Act1(runtime, localVars)
	{
		const nextLayoutName = "LevelSelection";
		const roomLayoutName = "LevelSelection";
		const sdkElem = document.createElement("script");
		sdkElem.type = "text/javascript";
		sdkElem.src = "https://sdk.crazygames.com/Construct3CrazySDK-v3.js";
		document.body.appendChild(sdkElem);
		sdkElem.onload = function () {
		    window.ConstructCrazySDK.init()
		 .then(() => {
					const roomId = window.ConstructCrazySDK.game.getInviteParam("roomId")
					console.log("Room id:", roomId);
					
					const instantMultiplayer = window.ConstructCrazySDK.game.isInstantMultiplayer;
					console.log("Instant multiplayer:", instantMultiplayer)
					
					if(roomId){
						runtime.globalVars.roomId = roomId;
						runtime.goToLayout(roomLayoutName)
					}else if(instantMultiplayer){
						// should automatically create a new room
					}else{
		            	runtime.goToLayout(nextLayoutName);
					}
		 })
		 .catch((e) => console.log("Failed to init CrazySDK", e));
		};
		sdkElem.onerror = function () {
		    console.error("Failed to load Construct3CrazySDK script.");
		};
	},

	async Eportals_Event4_Act1(runtime, localVars)
	{
		window.ConstructCrazySDK.game.gameplayStart();
	},

	async Eportals_Event6_Act1(runtime, localVars)
	{
		window.ConstructCrazySDK.game.gameplayStop();
	},

	async Eportals_Event8_Act1(runtime, localVars)
	{
		window.ConstructCrazySDK.game.happytime();
	},

	async Eportals_Event14_Act3(runtime, localVars)
	{
		await window.ConstructCrazySDK.ad.requestAd("midgame");
	},

	async Egameplay_Event41_Act3(runtime, localVars)
	{
		await window.ConstructCrazySDK.ad.requestAd("rewarded");
		await crazysdk.waitForAdToFinish();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
