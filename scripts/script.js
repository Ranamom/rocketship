function tapRocket() {
    if(window.parent) {
        let message = {
            namespace: 'ZipSchoolGame',
            eventName: 'callback',
            method: 'rocketTapped'
        }
        
        window.parent.postMessage( JSON.stringify( message ), '*' );
    }
}
