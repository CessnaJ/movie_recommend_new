<template>
  <div>
    <h1>여기는 커뮤게시판</h1>
    <router-link :to="{ name: 'communitycreate' }">게시글 작성</router-link>
    <CommunityItem/>
  </div>
</template>

<script>
import CommunityItem from '@/components/CommunityItem';

export default {
    name: "CommunityView",
    components: { CommunityItem }
}
</script>

<style>

</style>