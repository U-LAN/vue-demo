<template>
  <div id="mountNode"></div>
</template>
<script>
import G6 from "@antv/g6";
export default {
  mounted() {
    const data = {
      nodes: [
        {
          id: "node1",
          label: "node1",
          x: 100,
          y: 200,
          // 该节点可选的连接点集合，该点有两个可选的连接点
          anchorPoints: [[0, 1], [0.5, 1]],
          shape: "rect"
        },
        {
          id: "node2",
          label: "node2",
          x: 300,
          y: 400,
          // 该节点可选的连接点集合，该点有两个可选的连接点
          anchorPoints: [[0.5, 0], [1, 0.5]],
          shape: "rect"
        }
      ],
      edges: [
        {
          source: "node1",
          target: "node2",
          // 该边连入 source 点的第 0 个 anchorPoint，
          sourceAnchor: 0,
          // 该边连入 target 点的第 0 个 anchorPoint，
          targetAnchor: 0,
          style: {
            endArrow: true
          }
        },
        {
          source: "node2",
          target: "node1",
          // 该边连入 source 点的第 1 个 anchorPoint，
          sourceAnchor: 1,
          // 该边连入 source 点的第 1 个 anchorPoint，
          targetAnchor: 1,
          style: {
            endArrow: true
          }
        }
      ]
    };

    // G6.registerEdge("hvh", {
    //   draw(cfg, group) {
    //     const startPoint = cfg.startPoint;
    //     const endPoint = cfg.endPoint;
    //     const shape = group.addShape("path", {
    //       attrs: {
    //         stroke: "#333",
    //         path: [
    //           ["M", startPoint.x, startPoint.y],
    //           ["L", endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y], // 三分之一处
    //           ["L", endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y], // 三分之二处
    //           ["L", endPoint.x, endPoint.y]
    //         ]
    //       }
    //     });
    //     return shape;
    //   }
    // });

    const graph = new G6.Graph({
      container: "mountNode",
      width: 1500,
      height: 500,
      defaultNode: {
        shape: "rect",
        style: {
          opacity: 0.1
        }
      },
      modes: {
        default: ["drag-node"]
      },
      defaultEdge: {
        // ... 其他属性
        style: {
          lineWidth: 1,
          endArrow: true
          // ... 其他属性
        }
      },
      linkCenter: true // 使边连入节点的中心
    });
    graph.data(data);
    graph.render();
  }
};
</script>
<style lang="scss" scoped>
</style>