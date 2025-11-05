const dummyApiResponse = {
    showLighAndDarkMode: true,
    showTicTacToe: true,
    showCustomTabs: true,
    showModalPopUp : true,
    showQrCodeGenerator: false
}

function featureFlagDataService(){
    return new Promise((resolve, reject)=> {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject('Some Erros occurred, Please try again')
    })
}


export default featureFlagDataService