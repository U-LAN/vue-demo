<template>
  <div>
    <d2-crud
      ref="d2Crud"
      :columns="columns"
      :data="data"
      :options="options"
      :pagination="pagination"
      :row-handle="rowHandle"
    ></d2-crud>
  </div>
</template>
<script>
import data from "./data/table-data.json";
import select from "./select";
export default {
  data() {
    return {
      columns: [
        {
          title: "镜像名称",
          key: "name",
          showOverflowTooltip: true
        },
        {
          title: "TAG",
          key: "tag",
          showOverflowTooltip: true
        },
        {
          title: "Docker类型",
          key: "dockerType",
          showOverflowTooltip: true
        },
        {
          title: "CUDA",
          key: "cuda",
          showOverflowTooltip: true
        },
        {
          title: "cuDNN",
          key: "cudnn",
          showOverflowTooltip: true
        },
        {
          title: "操作系统",
          key: "system",
          showOverflowTooltip: true
        },
        {
          title: "语言环境",
          key: "language",
          showOverflowTooltip: true
        },
        {
          title: "镜像环境",
          key: "mirror",
          showOverflowTooltip: true
        },
        {
          title: "创建时间",
          key: "time",
          showOverflowTooltip: true
        }
      ],
      data: [],
      options: {
        height: "600"
      },
      pagination: {
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 100,
        background: true,
        layout: "->,total,sizes,prev, pager, next, jumper"
      },
      rowHandle: {
        columnHeader: "操作",
        width: "300",
        custom: [
          {
            text: "查看详情",
            size: "mini",
            type: "primary"
            // emit:
          },
          {
            text: "删除",
            size: "mini",
            type: "danger"
            // emit:
          },
          {
            text: "...",
            size: "mini",
            type: "primary"
            // emit:
          }
        ]
      }
    };
  },
  mounted() {
    this.data = data;
  }
};
</script>
<style lang="scss" scoped>
</style>