<template>
  <div class="flex h-full">
    <div class="flex flex-col w-52 border-r-1 border-gray-100">
      <h3 class="text-gray-700 text-base font-semibold pl-6 py-6 border-b-1 border-gray-100">
        <span class="inline-flex items-center justify-center rounded-full mr-2">
          <i class="w-4 h-4 bg-gray inline-block" />
        </span>
        {{ $route.meta.title }}
      </h3>
      <ul class="flex-1">
        <li
          v-for="sectionItem in sectionItems"
          v-text="sectionItem.name"
          :key="sectionItem.name"
          class="
            p-3
            font-semibold
            text-gray-700
            hover:bg-gray-100 hover:border-r-4 hover:border-primary-500
            cursor-pointer
            duration-300
          "
          :class="[
            $route.query.section === sectionItem.section
              ? 'bg-gray-100 border-r-4 border-primary-500'
              : '',
          ]"
        />
      </ul>
    </div>
    <div>
      <!--  -->
    </div>
  </div>
</template>

<script lang="ts">
import { PageSection } from "@/types/page-section";
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const sectionItems: Array<PageSection> = [
  {
    name: "Admin users",
    section: "admin-users",
    description: "",
  },
];

export default defineComponent({
  name: "UsersPage",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const selectedSection = ref(
      sectionItems.find((i) => i.section === route.query.section) || sectionItems[0]
    );

    router.push({
      query: {
        section: selectedSection.value.section,
      },
    });

    return {
      sectionItems,
    };
  },
});
</script>

<style lang="scss" module>
.cssModuleClass {
  color: red;
  font-weight: bold;
}
</style>
