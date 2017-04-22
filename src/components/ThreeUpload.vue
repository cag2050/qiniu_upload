<template>
<div id="video_container">
    <button id="pickfiles1">上传视频1</button>
    <button id="pickfiles2">上传视频2</button>
    <upload :browse_button='browse_button1'
            :uptoken='uptoken2'>
    </upload>
    <upload :browse_button='browse_button2'
            :uptoken='uptoken2'>
    </upload>
</div>
</template>

<script>
import Upload from './Upload'

export default {
    data () {
        return {
            browse_button1: '',
            browse_button2: 'pickfiles2',
            uptoken1: 'iUTbwTRLotclpFa8kHoeSUvgxgvH1WL2-ROdbY7B:WR_3F1eT-QeTSHV1yp6X-xxzH4w=:eyJzY29wZSI6InRlc3R2aWRlbzIiLCJkZWFkbGluZSI6MTQ5Mjg1NTA3Mn0=',
            uptoken2: 'iUTbwTRLotclpFa8kHoeSUvgxgvH1WL2-ROdbY7B:WR_3F1eT-QeTSHV1yp6X-xxzH4w=:eyJzY29wZSI6InRlc3R2aWRlbzIiLCJkZWFkbGluZSI6MTQ5Mjg1NTA3Mn0='
        }
    },
    components: {
        Upload
    }
}
</script>

<style>

</style>
