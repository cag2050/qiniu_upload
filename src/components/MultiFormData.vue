<template>
<div>
    <FormData
        :formId='formId'
        :uptoken='uptoken'
        :accept='accept'>
    </FormData>
    <FormData
        :formId='formId2'
        :uptoken='uptoken2'
        :accept='accept2'>
    </FormData>
</div>
</template>

<script>
import config from '../config/config'
import FormData from './FormData'

export default {
    data () {
        return {
            formId: 'testform',
            uptoken: config.uptoken,
            accept: 'video/*',
            formId2: 'testform2',
            uptoken2: config.uptoken,
            accept2: 'video/*'
        }
    },
    components: {
        FormData
    }
}
</script>

<style>
</style>

