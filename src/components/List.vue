<template>
    <div>
        <h1>리스트</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>이름</th>
                    <th>성별</th>
                    <th>클래스 레벨</th>
                    <th>국가</th>
                    <th>전공</th>
                    <th>활동</th>
                </tr>
            </thead> 
            <tbody id="users">
                <tr v-for="user in users" :key="user[user]">
                    <td>{{user[0]}}</td>
                    <td>{{user[1]}}</td>
                    <td>{{user[2]}}</td>
                    <td>{{user[3]}}</td>
                    <td>{{user[4]}}</td>
                    <td>{{user[5]}}</td>
                </tr>    
            </tbody>       
        </table>    
        <button @click="check">클릭</button>
    </div>    
</template>
<script>
import Constant from '../Constant';
import { mapState } from 'vuex';

export default {
    name : 'list',
    state : { users:'' },
    beforeMount() {
        //  this.$axios({
        //      url:'/selectlist',
        //      method:'GET'
        //  })
        //  .then((response) => {
        //      alert(response.data);
        //  })
        //  .catch(() => {
        //      alert("에러");
        //  })

        //  this.$axios({
        //      url: '/googlesheet',
        //      method:'GET'
        //  })
        //  .then((response) => {
        //      alert(response.data);
        //      this.$store.commit(Constant.ADD_USERS = response.data);
        //  })
        //  .catch(() => {
        //      alert("구글 에러");
        //  })
        this.$store.dispatch(Constant.ADD_USERS);
    },
    computed : {
        ...mapState({
            users : state=> state.users
        })
    },
    methods : {
        check : function(){
            console.log(this.users);
        }
    }
}
</script>