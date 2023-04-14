import Vue from "vue";
import Router from "vue-router";

import HomeView from "./views/HomeView.vue";
import CoursesView from "./views/CoursesView.vue";
import CourseView from "./views/CourseView.vue";
import CourseClass from "./views/CourseClass.vue";
import ClassDescription from "./views/ClassDescription.vue";
import ActionsView from "./views/ActionsView.vue";
import DataActions from "./views/DataActions.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/courses",
      component: CoursesView,
      props: true,
      children: [
        {
          name: "course",
          path: ":course",
          component: CourseView,
          props: true,
          children: [
            {
              name: "classes",
              path: "classes",
              component: CourseClass,
            },
            {
              name: "description",
              path: "description",
              component: ClassDescription,
            },
          ],
        },
      ],
    },
    {
      path: "/actions",
      component: ActionsView,
      children: [
        {
          path: ":symbol",
          component: DataActions,
          props: true,
        },
      ],
    },
  ],
});
