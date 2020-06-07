<template>
    <div>
        <h1>리스트</h1>
    </div>    
</template>
<script>
export default {
    name : 'list',
    beforeMount() {
         this.$axios({
             url:'/selectlist',
             method:'GET'
         })
         .then((response) => {
             alert(response.data);
         })
         .catch(() => {
             alert("에러");
         })
    }
}
</script>