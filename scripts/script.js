function tapRocket() {
 window.postMessage( JSON.stringify({ method: 'tapRocket', args: [ true ]}), 'https://assets.zipschool.com/' );
 console.log("Message should be sent")
}
