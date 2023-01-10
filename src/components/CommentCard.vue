<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        :class="`elevation-${hover ? 12 : 2}`"
        class="card transition-swing"
      >
        <v-card-title class="card__title">
          <span class="card__title-number">{{ comment.id }}</span>
          {{ comment.name }}
        </v-card-title>
        <v-card-text class="card__text">
          <p>{{ comment.body }}</p>
          <span class="card__text-footer">{{ comment.email }}</span>
        </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>
  
  <script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'CommentCard',
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
})
</script>
  
<style scoped lang="scss">
.card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background-color: #e1d7c6 !important;
  &__title,
  &__text {
    position: relative;
    text-align: left;
  }
  &__title {
    padding-top: 30px;
    &-number {
      position: absolute;
      top: 0;
      left: 0;
      min-width: 38px;
      padding: 0 6px;
      font-size: 0.75rem;
      font-weight: 600;
      text-align: center;
      border-bottom-right-radius: 50%;
      background-color: #579bb1;
    }
  }
  &__text {
    p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      // Addition lines for 2 line or multiline ellipsis
      display: -webkit-box !important;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
    &-footer {
      position: absolute;
      bottom: -5px;
      right: 5px;
      font-size: 0.5rem;
      text-align: right;
    }
  }
}
</style>
  