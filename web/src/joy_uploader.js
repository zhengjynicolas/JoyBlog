(function() {
    var uploader = new qq.FineUploader({
        element: $("#uploader")[0],
        request: {
            endpoint: '../../uploads'
        },
        deleteFile: {
            enabled: true,
            endpoint: '../../uploads'
        },
        chunking: {
            enabled: true,
            concurrent: {
                enabled: true
            },
            success: {
                endpoint: "?"
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