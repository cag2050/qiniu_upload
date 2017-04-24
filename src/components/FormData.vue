<template>
<div>
    <form id="testform" method="post" enctype="multipart/form-data">
      <input name="key" id="key" type="hidden" value="">
      <input name="token" type="hidden" value="<%= uptoken %>">
      <input id="userfile" name="file" type="file" />
      <input name="accept" type="hidden" />
    </form>
</div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted () {
        console.log(this.$http)
    },
    methods: {

    }
}
</script>

<style>
</style>

