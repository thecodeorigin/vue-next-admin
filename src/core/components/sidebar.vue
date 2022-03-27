<script lang="ts">
import { ElTooltip } from "element-plus";
import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";

import "element-plus/es/components/tooltip/style/css";

enum SidebarItemPlacement {
  TOP,
  BOTTOM,
}

interface SidebarItem {
  name: string;
  icon: string;
  path: string;
  placement?: SidebarItemPlacement;
}

const sidebarItems: Array<SidebarItem> = [
  {
    name: "Dashboard",
    icon: "home-filled",
    path: "/",
  },
  {
    name: "Users",
    icon: "user",
    path: "/users",
  },
  {
    name: "Settings",
    icon: "settings",
    path: "/settings",
    placement: SidebarItemPlacement.BOTTOM,
  },
];

export default defineComponent({
  name: "DefaultSidebar",
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const _renderSidebarItem = (sidebarItem: any) =>
      h(
        ElTooltip,
        {
          key: sidebarItem.name,
          content: sidebarItem.name,
          appendTo: "body",
          effect: "dark",
          placement: "right",
        },
        [
          h(
            RouterLink,
            {
              class:
                "w-10 h-10 flex items-center justify-center rounded-full border-1 border-gray-100",
              to: sidebarItem.path,
            },
            [
              h("i", {
                class: "w-4 h-4 inline-block bg-gray",
              }),
            ]
          ),
        ]
      );

    return () =>
      h("ul", { class: "h-full w-full py-2 flex flex-col justify-between items-center" }, [
        h(
          "div",
          {
            class: "flex flex-col items-center gap-2",
          },
          sidebarItems
            .filter((i) => i.placement === SidebarItemPlacement.TOP || i.placement === undefined)
            .map(_renderSidebarItem)
        ),
        h(
          "div",
          {
            class: "flex flex-col items-center gap-2",
          },
          sidebarItems
            .filter((i) => i.placement === SidebarItemPlacement.BOTTOM)
            .map(_renderSidebarItem)
        ),
      ]);
  },
});
</script>
