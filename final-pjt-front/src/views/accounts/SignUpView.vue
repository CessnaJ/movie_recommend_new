<template>
  <div>
    <h1>회원가입 페이지</h1>
    <form @submit.prevent="signUp" enctype="multipart/form-data">
      <label for="username">아이디 입력 : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password1">비밀번호 입력 : </label>
      <input type="password" id="password1" v-model="password1"><br>

      <label for="password2">비밀번호 확인 : </label>
      <input type="password" id="password2" v-model="password2">

      <label for="Image">프로필 사진 업로드: </label>
      <input type="file" name="Image" @change="fileChange">

      <div>
        <input type="submit" value="회원가입">
      </div>

    </form>
  </div>
</template>

<script>
import{getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"

export default {
    name: "SignUpView",
    data() {
    return {
      username: null,
      password1: null,
      password2: null,
      // 회원가입할 때 업로드할 프로필
      image: null,
    }
  },
  methods: {
    signUp() {
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2

      const image = this.image

      const payload = {
        username : username,
        password1 : password1,
        password2 : password2,
        image : image,
      }
      this.$store.dispatch('signUp', payload)
    },
    fileChange: function (e) {
    const nowImage = e.target.files[0]
    const date = new Date()
    const imgName = nowImage.name + date.toString()
    const storage = getStorage()
    const storageRef = ref(storage, imgName)
    uploadBytes(storageRef, nowImage).then(() => {
      getDownloadURL(ref(storage, imgName).then((url) => {
        console.log(url)
        this.image = url
      }))
     })
    },
  },
}
</script>

<style>

</style>