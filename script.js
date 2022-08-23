(() => {
	if('serviceWorker' in navigator){
		window.addEventListener("load",()=>{
			navigator.serviceWorker.register('service-worker.js')
			.then((registration)=>{
					console.log(registration);
			},function(err){
					console.log(err);
			});
		})
	}else{
		alert('Not Supported')
	}
})()