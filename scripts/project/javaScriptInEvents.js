

const scriptsInEvents = {

	async Egameplay_Event42_Act4(runtime, localVars)
	{
		await window.ConstructCrazySDK.ad.requestAd("rewarded");
		await crazysdk.waitForAdToFinish();
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
