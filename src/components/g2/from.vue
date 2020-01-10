<template>
 <div>
    <van-cell-group>
        <van-field
        v-model="username"
        required
        clearable
        label="标题"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
        />
    </van-cell-group>
    <van-cell-group>
        <van-field
        v-model="message"
        rows="1"
        autosize
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        />
    </van-cell-group> </div>
</template>

<script>
export default {
    data(){
        return {
            username:'',
            message:'',
        }
    }
}
</script>

<style>

</style>