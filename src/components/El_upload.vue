<template>
<div>
    <el-upload action='http://upload.qiniu.com/'
        :show-file-list='showUploadList'
        :on-progress="handleProgress"
        :on-success="handleSuccess"
        :on-error="handleError"
        :before-upload="beforeUpload"
        :data='form'>
        <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <b>选择文件</b>：{{ fileName }}<br/>
    <b>上传进度</b>：{{ loaded }} MB / {{ fileSize }} MB, {{ percent }}%<br/>
    <b>上传结果</b>：{{ result }}<br/>
</div>
</template>

<script>
import config from '../config/config'

export default {
    data () {
        return {
            form: {
                token: config.uptoken,
                key: null
            },
            showUploadList: false,
            fileName: '',
            fileSize: '',
            loaded: '',
            percent: '',
            result: ''
        }
    },
    methods: {
        beforeUpload (file) {
            this.fileName = file.name
            this.form.key = file.name
        },
        handleProgress (event, file, fileList) {
            this.loaded = (event.loaded / 1000000).toFixed(2)
            this.fileSize = (event.total / 1000000).toFixed(2)
            this.percent = (event.loaded / event.total * 100).toFixed(2)
        },
        handleSuccess (response, file, fileList) {
            this.result = '上传成功'
        },
        handleError (error, response, file) {
            this.result = error.toString()
        }
    }
}
</script>

<style>
</style>
