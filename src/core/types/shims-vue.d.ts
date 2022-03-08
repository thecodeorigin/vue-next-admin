import { AxiosInstance } from 'axios';

export declare global {
  declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }

  declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
      $http: AxiosInstance;
    }
  }

  interface Window { $http: AxiosInstance; }
}
