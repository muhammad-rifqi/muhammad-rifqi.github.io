self.addEventListener('install', (event)=>{
	//self.skipWaiting();
	console.log('Update Installed',event);
})

self.addEventListener('activate', (event)=>{
	console.log('Update Activated',event);
})

self.addEventListener('fetch', function (event) {
    console.log('Update Fetched',event);
});