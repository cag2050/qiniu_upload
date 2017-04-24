<template>
<div>
    <form :id="formId" method="post" enctype="multipart/form-data">
        <input name="token" type="hidden" :value="uptoken">
        <!--<input name="file" type="file" @change='upload'/>-->
        <input name="file" type="file" @change='upload' :accept="accept"/>
        <input name="accept" type="hidden" />
    </form>
    <b>选择文件</b>：{{ fileName }}<br/>
    <b>上传进度</b>：{{ loaded }} MB / {{ fileSize }} MB, {{ percent }}%<br/>
    <b>上传结果</b>：{{ result }}<br/>
</div>
</template>

<script>
export default {
    data () {
        return {
            fileName: '',
            fileSize: '',
            loaded: '',
            percent: '',
            result: ''
        }
    },
    props: {
        formId: {
            type: String,
            required: true
        },
        uptoken: {
            type: String,
            required: true
        },
        accept: {
            type: String,
            required: true
        }
    },
    methods: {
        upload (event) {
            let _this = this
            let file = event.target.files[0]
            if (file) {
                this.fileName = file.name
                let formData = new FormData(document.getElementById(this.formId))
                this.$http.post('http://upload.qiniu.com/', formData, {
                    progress (event) {
                        _this.loaded = (event.loaded / 1000000).toFixed(2)
                        _this.fileSize = (event.total / 1000000).toFixed(2)
                        _this.percent = (event.loaded / event.total * 100).toFixed(2)
                    }
                })
                .then(response => {
                    this.result = '上传成功'
                }, error => {
                    this.result = '错误码：' + error.status + ' 错误信息：' + error.data.error
                })
            }
        }
    }
}
</script>

<style>
</style>

