<template>
  <v-container class="transparent">
    <div
      v-for="(comment, i) in hasLoaded"
      :key="i"
      class="list-comment"
    >
      <CommentCard :comment="comment" />
    </div>
    <template v-if="loading">
      <v-row justify="center">
        <div
          v-for="n in 3"
          :key="`skeleton-${n}`"
        >
          <v-skeleton-loader
            v-bind="attrs"
            :loading="true"
            type="article"
          >
          </v-skeleton-loader>
        </div>
      </v-row>
    </template>
    <div
      v-if="hasLoaded.length"
      v-observe-visibility="handleScrollToBottom"
    ></div>
  </v-container>
</template>

<script>
import { reactive, toRefs, onMounted, defineComponent, computed } from '@vue/composition-api'
import CommentCard from './CommentCard.vue'
import axios from 'axios'

export default defineComponent({
  name: 'Lists',
  components: {
    CommentCard,
  },
  setup() {
    const state = reactive({
      limit: 10,
      page: 1,
      listComments: [],
      totals: {},
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
      loading: true,
      hasLoaded: computed(() => loadedComments()),
    })

    async function fetchComments() {
      try {
        state.loading = true
        const comments = await axios
          .get(`https://jsonplaceholder.typicode.com/comments?_page=${state.page}&_limit=${state.limit}`)
          .then((response) => response.data)
        setComments(comments)
      } catch (error) {
        console.log(error)
      }
    }

    function setComments(comments) {
      state.listComments = [...state.listComments, ...comments]
      state.loading = false
    }

    async function nextPage() {
      try {
        state.page += 1
        await fetchComments()
      } catch (error) {
        console.log(error)
      }
    }
    function handleScrollToBottom(isVisible) {
      if (!isVisible) {
        return
      }
      nextPage()
    }

    onMounted(async () => {
      await fetchComments()
    })

    function loadedComments() {
      return state.listComments
    }

    return { ...toRefs(state), handleScrollToBottom, loadedComments }
  },
})
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  .list-comment {
    padding: 12px;
  }
}
@media (min-width: 640px) {
  .list-comment {
    width: 50%;
  }
}
@media (min-width: 1024px) {
  .list-comment {
    width: 33%;
  }
}
</style>
