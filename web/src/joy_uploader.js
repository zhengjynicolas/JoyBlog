(function() {
    var uploader = new qq.FineUploader({
        element: $("#uploader")[0],
        request: {
            endpoint: 'server/nodejs.js'
        },
        deleteFile: {
            enabled: true,
            endpoint: 'server/nodejs.js'
        },
        chunking: {
            enabled: true,
            concurrent: {
                enabled: true
            }
        },
        resume: {
            enabled: true
        },
        retry: {
            enableAuto: true
        }
    })

})();