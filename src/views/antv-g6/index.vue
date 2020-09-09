<template>
  <div id="mountNode" style="width:100%;"></div>
</template>
<script>
import G6 from '@antv/g6'

import deepCopy from '../../assest/methods/deepCopy'
import setTimer from '../../assest/methods/timer'

const binaryTreeData1 = {
  id: 6,
  left: {
    id: 3,
    left: {
      id: 2,
      left: null,
      right: null
    },
    right: {
      id: 4,
      left: null,
      right: null
    }
  },
  right: {
    id: 5,
    left: null,
    right: null
  }
}

const binaryTreeData2 = {
  id: 1,
  left: {
    id: 2,
    left: {
      id: 4,
      left: {
        id: 7,
        left: null,
        right: null
      },
      right: {
        id: 5,
        left: null,
        right: null
      }
    },
    right: {
      id: 8,
      left: null,
      right: null
    }
  },
  right: {
    id: 3,
    left: null,
    right: {
      id: 9,
      left: null,
      right: null
    }
  }
}

export default {
  mounted () {
    this.initGraph(
      // this.convertBinaryTree(this.addTree(binaryTreeData1, binaryTreeData2))
      this.convertBinaryTree(binaryTreeData2)
    )
    console.log(this.searchLeaves(binaryTreeData2, 4))
  },
  methods: {
    initGraph (data) {
      const width = document.getElementById('mountNode').scrollWidth
      const height = document.getElementById('mountNode').scrollHeight || 800
      const graph = new G6.TreeGraph({
        container: 'mountNode',
        width,
        height,
        linkCenter: true,
        modes: {
          default: [
            {
              type: 'collapse-expand',
              onChange: function onChange (item, collapsed) {
                const data = item.get('model').data
                data.collapsed = collapsed
                return true
              }
            },
            'drag-canvas',
            'zoom-canvas',
            'drag-node'
          ]
        },
        defaultNode: {
          size: 26,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5]
          ],
          style: {
            fill: '#C6E5FF',
            stroke: '#5B8FF9'
          },
          labelCfg: {
            position: 'bottom',
            offset: 10,
            style: {
              fill: '#666'
            }
          }
        },
        defaultEdge: {
          type: 'cubic-vertical',
          style: {
            stroke: '#A3B1BF'
          }
        },
        layout: {
          type: 'compactBox',
          direction: 'TB',
          getId: function getId (d) {
            return d.id
          },
          getHeight: function getHeight () {
            return 16
          },
          getWidth: function getWidth () {
            return 16
          },
          getVGap: function getVGap () {
            return 80
          },
          getHGap: function getHGap () {
            return 20
          }
        }
      })

      graph.node(function (node) {
        // let position = 'right'
        // let rotate = 0
        // if (!node.children) {
        //   position = 'bottom'
        //   rotate = Math.PI / 2
        // }
        return {
          label: node.id,
          labelCfg: {
            position: 'center',
            // offset: 5,
            style: {
              // rotate,
              // textAlign: 'start'
            }
          }
        }
      })

      graph.data(data)
      graph.render()
      graph.fitView()
    },
    convertBinaryTree (tree) {
      tree = deepCopy(tree)
      this.convertTreeNode(tree)
      return tree
    },
    convertTreeNode (tree) {
      if (tree) {
        tree.id = tree.id
        let children = []
        if (tree.left) {
          children.push(tree.left)
          delete tree.left
        }
        if (tree.right) {
          children.push(tree.right)
          delete tree.right
        }
        if (children.length > 0) {
          tree.children = children
          tree.children.forEach((_) => this.convertTreeNode(_))
        }
      }
    },
    // 二叉树相加
    addTree (t1, t2) {
      if (!t1 && !t2) return null

      let node = {
        id: undefined,
        left: null,
        right: null
      }
      if (t1 && !t2) {
        node.id = t1.id
        node.left = this.addTree(t1.left, null)
        node.right = this.addTree(t1.right, null)
      } else if (!t1 && t2) {
        node.id = t2.id
        node.left = this.addTree(t2.left, null)
        node.right = this.addTree(t2.right, null)
      } else {
        node.id = t1.id + t2.id
        node.left = this.addTree(t1.left, t2.left)
        node.right = this.addTree(t1.right, t2.right)
      }
      return node
    },
    // 根据给定值，查找叶子节点（返回叶子节点和路径）
    searchLeaves (tree, key, pathList) {
      if (!tree) return null

      if (!pathList) pathList = []

      pathList.push(tree.id)

      if (tree.id === key) return pathList

      let found
      found = this.searchLeaves(tree.left, key, pathList)
      if (found) return found
      found = this.searchLeaves(tree.right, key, pathList)
      if (found) return found
      pathList.pop()
      return found
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
