<template>
  <div class="d3"></div>
</template>
<script>
import * as d3 from "d3";
export default {
  mounted() {
    // this.$nextTick(() => {
    this.initD3();
    // });
  },
  methods: {
    initD3() {
      var width = 800,
        height = 700;

      var i = 0;

      var svg = d3
        .select(".d3")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      svg
        .append("rect")
        .attr("width", width)
        .attr("height", height)
        .on("ontouchstart" in document ? "touchmove" : "mousemove", particle);

      function particle() {
        var m = d3.mouse(this);
        svg
          .insert("circle", "rect")
          .attr("cx", m[0])
          .attr("cy", m[1])
          .attr("r", 1e-6)
          .style("stroke", d3.hsl((i = (i + 1) % 360), 1, 0.5))
          .style("stroke-opacity", 1)
          .transition()
          .duration(2000)
          .ease(Math.sqrt)
          .attr("r", 100)
          .style("stroke-opacity", 1e-6)
          .remove();

        d3.event.preventDefault();
      }
    }
  }
};
</script>
<style >
.d3 {
  width: 800px;
  height: 700px;
  background: #222;
  box-shadow: 0 0 5px 5px rgba(3, 8, 82, 0.1);
}
rect {
  fill: none;
  pointer-events: all;
}

circle {
  fill: none;
  stroke-width: 2.5px;
}
</style>
